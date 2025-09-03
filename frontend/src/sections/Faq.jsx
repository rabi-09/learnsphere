import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How can I personalize my learning experience on LearnSphere?",
      answer:
        "LearnSphere uses AI-driven algorithms to tailor content and courses to your individual learning style, pace, and goals, making your education truly unique and effective.",
    },
    {
      question: "Is my data secure and private while using LearnSphere?",
      answer:
        "Absolutely. LearnSphere prioritizes your privacy by securely handling your personal information and keeping your learning activity confidential and protected.",
    },
    {
      question: "Can I collaborate with peers or instructors on LearnSphere?",
      answer:
        "Yes, you can join group projects, participate in live sessions, and engage in forums to collaborate, share ideas, and enhance your learning experience.",
    },
    {
      question: "What types of courses and content are available on LearnSphere?",
      answer:
        "LearnSphere offers a wide range of interactive courses including video lessons, quizzes, projects, and AI-powered practice tailored to many subject areas and skill levels.",
    },
    {
      question: "Do I need internet connectivity to access LearnSphere's features?",
      answer:
        "While an internet connection is required for live updates and collaboration, you can download course materials for offline study and sync progress when you reconnect.",
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