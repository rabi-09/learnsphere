import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How can I report an illegal billboard?",
      answer: "You can capture a photo of the billboard using our app and upload it. The system will automatically tag the location and submit it to authorities."
    },
    {
      question: "Is my identity kept private when I report?",
      answer: "Yes, your personal details remain anonymous. Only the violation details are shared with the authorities."
    },
    {
      question: "How do authorities verify reported violations?",
      answer: "Authorities review uploaded images, verify location data, and cross-check against approved billboard permits before taking action."
    },
    {
      question: "What types of violations can I report?",
      answer: "You can report illegal billboards, expired advertisements, unsafe structures, or non-compliance with city regulations."
    },
    {
      question: "Do I need internet access to submit a report?",
      answer: "No. With our ESP32-enabled devices, you can capture and store reports offline. Once the device connected to ESP32 server, the reports are automatically uploaded."
    },
  ];


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-5xl font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isActive={activeIndex === index}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ index, question, answer, isActive, toggleFAQ }) => {
  return (
    <motion.div
      className="border border-neutral-800 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <motion.button
        className="flex justify-between items-center w-full p-4 md:p-6 text-left bg-black hover:bg-neutral-900 transition-colors"
        onClick={() => toggleFAQ(index)}
        whileHover={{ backgroundColor: "#1a1a1a" }}
        whileTap={{ scale: 0.99 }}
      >
        <span className="text-white font-medium text-lg md:text-xl pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isActive ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white"
        >
          <PlusIcon isActive={isActive} />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.4, delay: 0.1 }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="p-4 md:p-6 pt-0 md:pt-0">
              <p className="text-neutral-300 text-md md:text-lg">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PlusIcon = ({ isActive }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={isActive ? "M3 8H13" : "M3 8H13M8 3V13"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Faq;