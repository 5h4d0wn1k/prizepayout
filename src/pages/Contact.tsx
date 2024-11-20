import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const contactMethods = [
  {
    icon: PhoneIcon,
    title: "Phone Support",
    description: "24/7 support for urgent inquiries",
    contact: "+1 (800) PRIZE-WIN",
    action: "Call now",
    href: "tel:+18007749394",
  },
  {
    icon: EnvelopeIcon,
    title: "Email",
    description: "Get a response within 24 hours",
    contact: "support@prizepayout.com",
    action: "Send email",
    href: "mailto:support@prizepayout.com",
  },
  {
    icon: MapPinIcon,
    title: "Office",
    description: "Visit our main office",
    contact: "123 Winner's Circle, NY 10001",
    action: "Get directions",
    href: "https://maps.google.com",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Live Chat",
    description: "Chat with our support team",
    contact: "Available 24/7",
    action: "Start chat",
    href: "#chat",
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

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
            Contact Us
          </h1>
          <p className="text-xl text-brand-gray-dark max-w-2xl mx-auto">
            Have questions about your prize? Our team is here to help you 24/7.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <method.icon className="w-12 h-12 text-brand-gold mb-4" />
              <h3 className="text-xl font-heading font-bold text-brand-blue mb-2">
                {method.title}
              </h3>
              <p className="text-brand-gray-dark mb-4">{method.description}</p>
              <p className="font-medium text-brand-blue mb-4">{method.contact}</p>
              <span className="text-brand-orange hover:text-brand-gold font-medium">
                {method.action} →
              </span>
            </a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-heading font-bold text-brand-blue mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-brand-gray-dark mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-brand-gray-dark mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-brand-gray-dark mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brand-gray-dark mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-gold text-white font-body font-medium px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
