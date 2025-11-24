import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../../constants';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Motion variants
  const faqItemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className=" min-h-screen bg-[#3e6a86] py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-6
            transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-12">
              <span className="text-white text-xs font-bold">?</span>
            </div>
            <span className="text-gray-700 font-medium hover:text-blue-100 transition-colors duration-300">FAQs</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
            Ask Us Anything?
          </h1>

          <p className="text-gray-100 text-lg md:text-xl transition-all duration-500 hover:text-blue-200">
            Find quick answers to the most common questions about Tomorrowbyte & Services
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={faqItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300
                hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left
                  transition-all duration-300 hover:bg-gray-100"
              >
                <span className="text-gray-900 font-medium text-lg pr-4 transition-colors duration-300 hover:text-blue-600">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 hover:text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 hover:text-blue-600" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="px-6 pb-5 text-gray-800 md:text-gray-700 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
