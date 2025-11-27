// GuidedFormModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface GuidedData {
  name: string;
  email: string;
  phone: string;
  features: string[];
  complexity: string;
  overview: string;
  timeline: string;
}

interface GuidedFormModalProps {
  activeForm: "guided" | "upload" | null;
  setActiveForm: (form: "guided" | "upload" | null) => void;
  guidedData: GuidedData;
  setGuidedData: React.Dispatch<React.SetStateAction<GuidedData>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  step: number;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  isStepValid: () => boolean;
  loading: boolean;
  handleSubmit: () => void;
  errors: { email: string; phone: string };
}

const GuidedFormModal: React.FC<GuidedFormModalProps> = ({
  activeForm,
  setActiveForm,
  guidedData,
  setGuidedData,
  step,
  loading,
  handleNextStep,
  handlePrevStep,
  isStepValid,
  handleSubmit,
  errors,
}) => {

  const handleGuidedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuidedData((prev) => ({ ...prev, [name]: value }));
  };

  return (
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

            {/* Step Content */}
            {step === 1 && (
              <div className="space-y-4">
                <input type="text" name="name" placeholder="Name" value={guidedData.name} onChange={handleGuidedChange}
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <input type="email" name="email" placeholder="Email" value={guidedData.email} onChange={handleGuidedChange}
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <input type="tel" name="phone" placeholder="Phone" value={guidedData.phone} onChange={handleGuidedChange}
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
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
                      className={`px-4 py-2 rounded-full border text-sm ${guidedData.features.includes(feature)
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
                      className={`px-4 py-2 rounded-full border ${guidedData.complexity === complexity
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
                      className={`px-4 py-2 rounded-full border ${guidedData.overview === overview
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
                      className={`px-4 py-2 rounded-full border ${guidedData.timeline === timeline
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
                  disabled={!isStepValid()}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all
                    ${isStepValid()
                      ? "bg-indigo-500 text-white hover:bg-indigo-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
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
                  {loading ? 'Submitting...':'Submit'}
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
  );
};

export default GuidedFormModal;
