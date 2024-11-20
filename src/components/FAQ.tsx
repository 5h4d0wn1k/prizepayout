import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How do I know if I've won a prize?",
    answer:
      "Winners are notified through official channels, including email and phone. You can also check your ticket number on our website or mobile app. All winners receive formal notification letters with detailed instructions.",
  },
  {
    question: "What documents do I need to claim my prize?",
    answer:
      "Required documents include valid government-issued photo ID, proof of ticket purchase, the original winning ticket, and completed claim forms. For prizes over $10,000, additional documentation may be required.",
  },
  {
    question: "How long do I have to claim my prize?",
    answer:
      "Prize claim periods vary by game and jurisdiction, typically ranging from 90 days to one year from the draw date. We recommend claiming your prize as soon as possible to avoid missing the deadline.",
  },
  {
    question: "Are prizes taxable?",
    answer:
      "Yes, prizes are generally subject to federal and state taxes. We withhold the required tax amounts from prizes over $5,000. We recommend consulting with a financial advisor for tax planning.",
  },
  {
    question: "Can I remain anonymous when claiming a prize?",
    answer:
      "Anonymity options vary by jurisdiction. Some states allow winners to claim prizes through trusts or LLCs to maintain privacy. Our team can advise you on available options in your area.",
  },
  {
    question: "How are prizes paid out?",
    answer:
      "Winners can choose between lump sum payments or annuity options for large prizes. Payments can be made via check, wire transfer, or direct deposit. Our financial team will discuss all available options.",
  },
  {
    question: "What security measures protect winners?",
    answer:
      "We employ state-of-the-art security protocols, including identity verification, secure payment processing, and fraud prevention systems. All winner information is protected with bank-level encryption.",
  },
  {
    question: "Can I claim a prize on behalf of someone else?",
    answer:
      "In most cases, prizes must be claimed by the ticket holder. Exceptions may be made with proper legal documentation, such as power of attorney or estate executorship papers.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 flex items-center justify-between focus:outline-none"
            >
              <span className="text-lg font-heading font-bold text-brand-blue">
                {faq.question}
              </span>
              <ChevronDownIcon
                className={`w-6 h-6 text-brand-blue transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-6 text-brand-gray-dark">
                {faq.answer}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
