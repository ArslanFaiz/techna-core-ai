// ProjectRequirementsSection.jsx
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import ThankYouPopup from "./ThankYouPopup";
import UploadFormModal from "./UploadFormModal";
import GuidedFormModal from "./GuidedFormModal";
import {createEstimate } from "../../Api/estimate";
import { createProjectBrief } from "../../Api/projectBrief";

const ProjectRequirementsSection = () => {
  const [activeForm, setActiveForm] = useState<"guided" | "upload" | null>(null);
  const [step, setStep] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  // Guided form state
  const [guidedData, setGuidedData] = useState<{
    name: string;
    email: string;
    phone: string;
    features: string[];
    complexity: string;
    overview: string;
    timeline: string;
  }>({
    name: "",
    email: "",
    phone: "",
    features: [],
    complexity: "",
    overview: "",
    timeline: "",
  });
  // Upload form state
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [loading,setLoading]=useState(false)
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    phone: ""
  });


  const handleNextStep = () => {
    // Step 1 ke liye email & phone validation
    if (step === 1) {
      let newErrors = { email: "", phone: "" };

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!guidedData.email) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(guidedData.email)) {
        newErrors.email = "Invalid email format";
      }

      // Phone validation (simple 10 digit)
      const phoneDigits = guidedData.phone.replace(/\D/g, ""); // Remove non-digits
      if (!guidedData.phone) {
        newErrors.phone = "Phone number is required";
      } else if (phoneDigits.length < 10) {
        newErrors.phone = "Phone number is Invalid";
      }

      setErrors(newErrors);

      // Agar koi error hai → next step na ho
      if (newErrors.email || newErrors.phone) return;
    }

    // Agar step < 6 → next step
    if (step < 6) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
  if (
    !guidedData.name ||
    !guidedData.email ||
    !guidedData.phone ||
    guidedData.features.length === 0 ||
    !guidedData.complexity ||
    !guidedData.overview ||
    !guidedData.timeline
  ) {
    toast.error("Please fill all fields");
    return;
  }

  try {
    setLoading(true);

    const response = await createEstimate({
      name: guidedData.name,
      email: guidedData.email,
      phone: guidedData.phone,
      keyFeatures: guidedData.features, 
      projectComplexity: guidedData.complexity,
      projectOverview: guidedData.overview,
      suggestedTimeline: guidedData.timeline,
    });

    console.log("Estimate created:", response);

    setActiveForm(null);
    setShowThankYou(true);
    setGuidedData({
      name: "",
      email: "",
      phone: "",
      features: [],
      complexity: "",
      overview: "",
      timeline: "",
    });
    setStep(1);
    setTimeout(() => setShowThankYou(false), 3000);
  } catch (error: any) {
    console.error("Estimate submit error:", error);
    toast.error("Failed to submit. Please try again.");
  } finally {
    setLoading(false);
  }
};

 const handleProjectSubmit = async () => {
  if (!guidedData.email || !guidedData.phone || !uploadedFile) {
    toast.error("Please fill all required fields and upload the document");
    return;
  }

  try {
    setLoading(true);

    // createProjectBrief function use karte hue
    const response = await createProjectBrief({
      email: guidedData.email,
      phone: guidedData.phone,
      message: notes,
      document: uploadedFile,
    });

    console.log("Project brief created:", response);

    // Success handling
    setShowThankYou(true);
    setActiveForm(null);
    setGuidedData({
      name: "",
      email: "",
      phone: "",
      features: [],
      complexity: "",
      overview: "",
      timeline: "",
    });
    setUploadedFile(null);
    setNotes("");
    setTimeout(() => setShowThankYou(false), 3000);

  } catch (error: any) {
    console.error("Project Brief submit error", error);
    toast.error("Failed to submit project brief");
  } finally {
    setLoading(false);
  }
};


  const isStepValid = () => {
    if (step === 1) {
      return guidedData.name.trim() !== "" &&
        guidedData.email.trim() !== "" &&
        guidedData.phone.trim() !== "";
    }
    if (step === 2) {
      return guidedData.features.length > 0;
    }
    if (step === 3) {
      return guidedData.complexity !== "";
    }
    if (step === 4) {
      return guidedData.overview !== "";
    }
    if (step === 5) {
      return guidedData.timeline !== "";
    }
    return true;
  };
  const isValidDetail = (): boolean => {
    // Basic empty check
    if (
      guidedData.email.trim() === "" ||
      guidedData.phone.trim() === "" ||
      uploadedFile === null
    ) return false;

    return true; // All valid
  };



  return (
    <>
    <Toaster position='top-center'/>
    <motion.section
      initial={{ opacity: 0, y: 100 }}       // starts lower
      whileInView={{ opacity: 1, y: 0 }}     // moves upward and fades in
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full py-0 bg-gradient-to-r from-indigo-50 via-white to-purple-100"
    >

      <section id="project" className="relative w-full py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950">
        {/* Heading */}
        <div className="text-center mb-12 px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100">
            Give Your Project Requirements
          </h2>
          <p className="mt-3 text-gray-400 text-lg">
            Choose how you’d like to share your project details with us.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 border border-indigo-200 rounded-2xl shadow-lg p-8 cursor-pointer hover:shadow-2xl transition-all duration-300"
            onClick={() => setActiveForm("guided")}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Start Guided Estimate</h3>
            <p className="text-gray-700 mb-6">
              Perfect for exploring ideas and getting instant estimates through simple questions.
            </p>
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
              Start Guided Estimate <FaArrowRight />
            </button>

            <p className="mt-3 text-gray-500 text-sm">Takes 2–3 minutes.</p>
          </motion.div>

          {/* Card 2 */}
          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 border border-indigo-200 rounded-2xl shadow-lg p-8 cursor-pointer hover:shadow-2xl transition-all duration-300"
            onClick={() => setActiveForm("upload")}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Upload Project Brief</h3>
            <p className="text-gray-700 mb-6">
              Have detailed requirements? Upload your brief or project document for a tailored estimate.
            </p>
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
              Upload Your Project Brief <FaArrowRight />
            </button>

            <p className="mt-3 text-gray-500 text-sm">PDF, DOCX, or Paste Text.</p>
          </motion.div>

        </div>

        {/* Guided Form Modal */}
        <AnimatePresence>
          <GuidedFormModal
            activeForm={activeForm}
            setActiveForm={setActiveForm}
            guidedData={guidedData}
            setGuidedData={setGuidedData}
            setLoading={setLoading}
            loading={loading}
            step={step}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            isStepValid={isStepValid}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </AnimatePresence>

        {/* Upload Modal */}
        <AnimatePresence>
          <UploadFormModal
            activeForm={activeForm}
            setLoading={setLoading}
            loading={loading}
            setActiveForm={setActiveForm}
            guidedData={guidedData}
            setGuidedData={setGuidedData}
            uploadedFile={uploadedFile}
            setUploadedFile={setUploadedFile}
            notes={notes}
            setNotes={setNotes}
            handleSubmit={handleProjectSubmit}
            isValidDetail={isValidDetail}
            errors={errors}
          />
        </AnimatePresence>

        {/* Thank You Popup */}
        <AnimatePresence>
          <ThankYouPopup show={showThankYou} />
        </AnimatePresence>
      </section>
    </motion.section>
    </>
  );
};

export default ProjectRequirementsSection;
