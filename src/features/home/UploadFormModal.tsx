// UploadFormModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaFileUpload } from "react-icons/fa";
interface UploadFormModalProps {
  activeForm:"guided"| "upload" | null;
  setActiveForm: (form: "upload" | null) => void;
  guidedData: { email: string; phone: string };
  setGuidedData: React.Dispatch<React.SetStateAction<{   name: string;
  email: string;
  phone: string;
  features: string[];
  complexity: string;
  overview: string;
  timeline: string; }>>;
  uploadedFile: File | null;
  setUploadedFile: React.Dispatch<React.SetStateAction<File | null>>;
  notes: string;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
 loading:boolean;
  handleSubmit: () => void;
  isValidDetail: () => boolean;
  errors: { email: string; phone: string };
}

const UploadFormModal: React.FC<UploadFormModalProps> = ({
  activeForm,
  setActiveForm,
  guidedData,
  setGuidedData,
  uploadedFile,
  setUploadedFile,
  loading,
  notes,
  setNotes,
  handleSubmit,
  isValidDetail,
  errors,
}) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setUploadedFile(file);
  };

  return (
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
            className="bg-gradient-to-br from-indigo-50 via-white to-blue-100 rounded-3xl shadow-2xl p-8 max-w-2xl w-full relative"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">Upload Project Brief</h3>

            <label className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center mb-4 cursor-pointer hover:border-indigo-500 transition-colors block">
              <FaFileUpload className="mx-auto w-10 h-10 text-gray-400 mb-2" />
              <p>{uploadedFile ? uploadedFile.name : "Click or drag file here"}</p>
              <input type="file" className="hidden" onChange={handleFileUpload} />
            </label>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={guidedData.email}
              onChange={(e) => setGuidedData((prev) => ({ ...prev, email: e.target.value }))
}
              className="w-full border border-gray-300 rounded-xl mb-2 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={guidedData.phone}
onChange={(e) => setGuidedData((prev) => ({ ...prev, phone: e.target.value }))}              
className="w-full border border-gray-300 rounded-xl mb-2 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}

            <textarea
              placeholder="Additional notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            />

            {/* Buttons */}
            <div className="mt-6 flex justify-between">
              <button
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
                onClick={() => setActiveForm(null)}
              >
                <FaArrowLeft /> Back
              </button>
              <button
                disabled={!isValidDetail()}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all
                  ${isValidDetail()
                    ? "bg-indigo-500 text-white hover:bg-indigo-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                onClick={handleSubmit}
              >
                {loading ?'Submitting...': <>Submit <FaArrowRight /></>}
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
  );
};

export default UploadFormModal;
