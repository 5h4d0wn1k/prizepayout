import { motion } from "framer-motion";
import ProcessSteps from "../components/ProcessSteps";
import FAQ from "../components/FAQ";

const HowItWorks = () => {
  return (
    <div className="py-20 bg-brand-gray-light">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-blue mb-4">
            How to Claim Your Prize
          </h1>
          <p className="text-xl text-brand-gray-dark max-w-2xl mx-auto">
            Follow our simple, secure process to claim your prize. We're here to make your winning experience smooth and enjoyable.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-32"
        >
          <h2 className="text-3xl font-heading font-bold text-brand-blue text-center mb-12">
            Our Prize Claiming Process
          </h2>
          <ProcessSteps />
        </motion.div>

        {/* Security Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center mb-32"
        >
          <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
            Your Security is Our Priority
          </h2>
          <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto mb-8">
            We employ bank-level security measures to protect your information and ensure
            a safe prize claiming process. Our platform is regularly audited and
            certified by leading security firms.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "256-bit Encryption",
              "Fraud Prevention",
              "Identity Protection",
              "Secure Payments",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-brand-gray-light rounded-full px-6 py-3 text-brand-blue font-medium"
              >
                {feature}
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-heading font-bold text-brand-blue text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-brand-blue rounded-2xl shadow-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            Ready to Claim Your Prize?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Start your claim process now or contact our support team for assistance.
            We're here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-brand-blue hover:bg-brand-gold hover:text-white font-body font-medium px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
              Start Claim Process
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-brand-blue font-body font-medium px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
