// ProjectRequirementsSection.jsx
import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft, FaFileUpload, FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

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
  const [notes, setNotes] = useState("");

  const handleGuidedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuidedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step < 6) setStep(step + 1);
  };
  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setUploadedFile(file);
  };

    const handleSubmit = () => {
    // Close current modal
    setActiveForm(null);

    // Show thank-you popup
    setShowThankYou(true);

    // Reset all data for new submission
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
    setStep(1);

    // Hide thank-you popup after 3 seconds
    setTimeout(() => setShowThankYou(false), 3000);
  };


  return (
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
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
            Start Guided Estimate <FaArrowRight />
          </button>
          <p className="mt-3 text-gray-500 text-sm">Takes 2–3 minutes.</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-1 bg-gradient-to-br from-green-50 to-teal-100 border border-teal-200 rounded-2xl shadow-lg p-8 cursor-pointer hover:shadow-2xl transition-all duration-300"
          onClick={() => setActiveForm("upload")}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Upload Project Brief</h3>
          <p className="text-gray-700 mb-6">
            Have detailed requirements? Upload your brief or project document for a tailored estimate.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
            Upload Your Project Brief <FaArrowRight />
          </button>
          <p className="mt-3 text-gray-500 text-sm">PDF, DOCX, or Paste Text.</p>
        </motion.div>
      </div>

      {/* Guided Form Modal */}
      <AnimatePresence>
        {activeForm === "guided" && (
          <motion.div
            key="guided-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-indigo-50 via-white to-blue-100 rounded-3xl shadow-2xl p-8 max-w-2xl w-full relative"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Guided Estimate Form – Step {step}/6
              </h3>

              {/* Dynamic Step Content */}
              {step === 1 && (
                <div className="space-y-4">
                  <input type="text" name="name" placeholder="Name" value={guidedData.name} onChange={handleGuidedChange}
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <input type="email" name="email" placeholder="Email" value={guidedData.email} onChange={handleGuidedChange}
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <input type="tel" name="phone" placeholder="Phone" value={guidedData.phone} onChange={handleGuidedChange}
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-2">
                  <p className="font-medium text-gray-800">Key Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Login System", "AI Chatbot", "Payment Gateway", "Analytics"].map((feature) => (
                      <button
                        key={feature}
                        type="button"
                        onClick={() =>
                          setGuidedData((prev) => ({
                            ...prev,
                            features: prev.features.includes(feature)
                              ? prev.features.filter((f) => f !== feature)
                              : [...prev.features, feature],
                          }))
                        }
                        className={`px-4 py-2 rounded-full border text-sm ${
                          guidedData.features.includes(feature)
                            ? "bg-indigo-500 text-white"
                            : "border-gray-300 text-gray-700"
                        } transition-all duration-300`}
                      >
                        {feature}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-2">
                  <p className="font-medium text-gray-800">Project Complexity:</p>
                  <div className="flex gap-4">
                    {["Basic", "Standard", "Advanced"].map((complexity) => (
                      <button
                        key={complexity}
                        type="button"
                        onClick={() => setGuidedData((prev) => ({ ...prev, complexity }))}
                        className={`px-4 py-2 rounded-full border ${
                          guidedData.complexity === complexity
                            ? "bg-indigo-500 text-white"
                            : "border-gray-300 text-gray-700"
                        } transition-all duration-300`}
                      >
                        {complexity}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-2">
                  <p className="font-medium text-gray-800">Project Overview:</p>
                  <div className="flex gap-4 flex-wrap">
                    {["Basic Website", "Web App", "Custom AI Solution"].map((overview) => (
                      <button
                        key={overview}
                        type="button"
                        onClick={() => setGuidedData((prev) => ({ ...prev, overview }))}
                        className={`px-4 py-2 rounded-full border ${
                          guidedData.overview === overview
                            ? "bg-indigo-500 text-white"
                            : "border-gray-300 text-gray-700"
                        } transition-all duration-300`}
                      >
                        {overview}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-2">
                  <p className="font-medium text-gray-800">Suggested Timeline:</p>
                  <div className="flex gap-4 flex-wrap">
                    {["2–4 weeks", "4–6 weeks", "6–12 weeks"].map((timeline) => (
                      <button
                        key={timeline}
                        type="button"
                        onClick={() => setGuidedData((prev) => ({ ...prev, timeline }))}
                        className={`px-4 py-2 rounded-full border ${
                          guidedData.timeline === timeline
                            ? "bg-indigo-500 text-white"
                            : "border-gray-300 text-gray-700"
                        } transition-all duration-300`}
                      >
                        {timeline}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 6 && (
                <div className="space-y-2 text-gray-800">
                  <p className="font-medium">Review Summary:</p>
                  <ul className="space-y-1 text-sm">
                    <li><b>Name:</b> {guidedData.name || "N/A"}</li>
                    <li><b>Email:</b> {guidedData.email || "N/A"}</li>
                    <li><b>Phone:</b> {guidedData.phone || "N/A"}</li>
                    <li><b>Features:</b> {guidedData.features.join(", ") || "N/A"}</li>
                    <li><b>Complexity:</b> {guidedData.complexity || "N/A"}</li>
                    <li><b>Overview:</b> {guidedData.overview || "N/A"}</li>
                    <li><b>Timeline:</b> {guidedData.timeline || "N/A"}</li>
                  </ul>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-6 flex justify-between">
                <button
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
                  onClick={handlePrevStep}
                >
                  <FaArrowLeft /> Back
                </button>
                {step < 6 && (
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-all"
                    onClick={handleNextStep}
                  >
                    Next <FaArrowRight />
                  </button>
                )}
                {step === 6 && (
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                )}
              </div>

              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                onClick={() => setActiveForm(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Modal */}
      <AnimatePresence>
        {activeForm === "upload" && (
          <motion.div
            key="upload-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-green-50 via-white to-teal-100 rounded-3xl shadow-2xl p-8 max-w-2xl w-full relative"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">Upload Project Brief</h3>

              <label className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center mb-4 cursor-pointer hover:border-teal-500 transition-colors block">
                <FaFileUpload className="mx-auto w-10 h-10 text-gray-400 mb-2" />
                <p>{uploadedFile ? uploadedFile.name : "Click or drag file here"}</p>
                <input type="file" className="hidden" onChange={handleFileUpload} />
              </label>

              <textarea
                placeholder="Additional notes..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
              />

              <div className="flex justify-between">
                <button
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
                  onClick={() => setActiveForm(null)}
                >
                  <FaArrowLeft /> Back
                </button>
                <button
                  className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all"
                  onClick={handleSubmit}
                >
                  Submit <FaArrowRight />
                </button>
              </div>

              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                onClick={() => setActiveForm(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thank You Popup */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          >
            <motion.div
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              exit={{ y: 30 }}
              className="bg-gradient-to-br from-green-100 via-white to-emerald-100 p-8 rounded-3xl shadow-2xl text-center max-w-md"
            >
              <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Your project details have been submitted successfully. We’ll reach out soon!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </motion.section>
  );
};

export default ProjectRequirementsSection;
