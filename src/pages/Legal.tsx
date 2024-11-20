import { motion } from "framer-motion";
import {
  DocumentTextIcon,
  ShieldCheckIcon,
  ScaleIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const legalDocuments = [
  {
    icon: DocumentTextIcon,
    title: "Terms of Service",
    description:
      "Our terms of service outline the rules and guidelines for using PrizePayout's platform.",
    lastUpdated: "March 1, 2024",
  },
  {
    icon: ShieldCheckIcon,
    title: "Privacy Policy",
    description:
      "Learn how we collect, use, and protect your personal information.",
    lastUpdated: "March 1, 2024",
  },
  {
    icon: ScaleIcon,
    title: "Prize Claim Agreement",
    description:
      "Details about the prize claiming process and associated responsibilities.",
    lastUpdated: "February 15, 2024",
  },
  {
    icon: LockClosedIcon,
    title: "Security Policy",
    description:
      "Our commitment to maintaining the highest standards of security.",
    lastUpdated: "February 1, 2024",
  },
];

const Legal = () => {
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
            Legal Information
          </h1>
          <p className="text-xl text-brand-gray-dark max-w-2xl mx-auto">
            Transparency and compliance are at the core of our operations. Review
            our legal documents below.
          </p>
        </motion.div>

        {/* Legal Documents Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {legalDocuments.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <doc.icon className="w-12 h-12 text-brand-gold mb-6" />
              <h2 className="text-2xl font-heading font-bold text-brand-blue mb-4">
                {doc.title}
              </h2>
              <p className="text-brand-gray-dark mb-6">{doc.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-brand-gray-dark">
                  Last updated: {doc.lastUpdated}
                </span>
                <button className="text-brand-orange hover:text-brand-gold font-medium">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-20"
        >
          <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
            Regulatory Compliance
          </h2>
          <div className="prose max-w-none text-brand-gray-dark">
            <p className="mb-4">
              PrizePayout is committed to maintaining the highest standards of
              regulatory compliance. We operate in accordance with all applicable
              laws and regulations in the jurisdictions where we provide our
              services.
            </p>
            <h3 className="text-xl font-heading font-bold text-brand-blue mt-8 mb-4">
              Licenses and Certifications
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Licensed Money Transmitter in all 50 US states</li>
              <li>PCI DSS Level 1 Certified</li>
              <li>SOC 2 Type II Compliant</li>
              <li>ISO 27001 Certified</li>
            </ul>
            <h3 className="text-xl font-heading font-bold text-brand-blue mt-8 mb-4">
              Anti-Fraud Measures
            </h3>
            <p className="mb-4">
              We employ sophisticated fraud detection systems and maintain strict
              verification procedures to ensure the legitimacy of all prize claims.
              Our platform includes:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Advanced identity verification</li>
              <li>Multi-factor authentication</li>
              <li>Real-time transaction monitoring</li>
              <li>Secure document verification</li>
            </ul>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-brand-blue rounded-2xl shadow-lg p-8 text-center text-white"
        >
          <h2 className="text-3xl font-heading font-bold mb-4">
            Legal Assistance
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Need help understanding our legal documents or have specific legal
            questions? Our legal team is here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-brand-blue hover:bg-brand-gold hover:text-white font-body font-medium px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
              Contact Legal Team
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-brand-blue font-body font-medium px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Legal;
