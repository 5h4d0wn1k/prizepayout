import { motion } from "framer-motion";
import {
  TicketIcon,
  DocumentCheckIcon,
  BanknotesIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    icon: TicketIcon,
    title: "1. Verify Your Ticket",
    description:
      "Check your ticket numbers against the winning numbers on our website or mobile app. You can also scan your ticket using our mobile app for instant verification.",
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
  },
  {
    icon: DocumentCheckIcon,
    title: "2. Submit Your Claim",
    description:
      "Fill out the prize claim form with your personal information and ticket details. Make sure to have all required documents ready for verification.",
    color: "text-brand-orange",
    bgColor: "bg-brand-orange/10",
  },
  {
    icon: ShieldCheckIcon,
    title: "3. Verification Process",
    description:
      "Our security team will verify your ticket and identity. This process includes checking the ticket authenticity and validating your documentation.",
    color: "text-brand-purple",
    bgColor: "bg-brand-purple/10",
  },
  {
    icon: BanknotesIcon,
    title: "4. Receive Your Prize",
    description:
      "Once verified, choose your preferred payment method. Our team will process your payment and provide guidance on tax implications and financial planning.",
    color: "text-brand-green",
    bgColor: "bg-brand-green/10",
  },
];

const ProcessSteps = () => {
  return (
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-brand-gray-light z-0">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-blue to-brand-gold"
                  style={{ width: "100%" }}
                />
              </div>
            )}

            {/* Step Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 relative z-10">
              <div
                className={`w-16 h-16 rounded-2xl ${step.bgColor} ${step.color} p-4 mb-6`}
              >
                <step.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-blue mb-4">
                {step.title}
              </h3>
              <p className="text-brand-gray-dark">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Information */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-center"
      >
        <p className="text-brand-gray-dark mb-8">
          Need help with the process? Our support team is available 24/7 to assist you.
        </p>
        <button className="bg-brand-orange hover:bg-brand-gold text-white font-body font-medium px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
          Contact Support
        </button>
      </motion.div>
    </div>
  );
};

export default ProcessSteps;
