// ThankYouPopup.tsx
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

interface ThankYouPopupProps {
  show: boolean;
}

const ThankYouPopup: React.FC<ThankYouPopupProps> = ({ show }) => {
  if (!show) return null;

  return (
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
  );
};

export default ThankYouPopup;
