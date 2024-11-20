import { motion } from "framer-motion";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

const ClaimPrize = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="py-20 bg-brand-gray-light min-h-screen">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-blue mb-4">
            Claim Your Prize
          </h1>
          <p className="text-xl text-brand-gray-dark max-w-2xl mx-auto">
            Please fill out the form below to start your secure prize claim process.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            {/* Security Badge */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-brand-blue/10 p-3 rounded-full">
                <ShieldCheckIcon className="w-8 h-8 text-brand-blue" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-brand-blue">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-brand-gray-dark mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-brand-gray-dark mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-brand-blue">
                  Contact Information
                </h2>
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
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-brand-gray-dark mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  />
                </div>
              </div>

              {/* Prize Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-brand-blue">
                  Prize Information
                </h2>
                <div>
                  <label
                    htmlFor="ticketNumber"
                    className="block text-sm font-medium text-brand-gray-dark mb-1"
                  >
                    Ticket Number
                  </label>
                  <input
                    type="text"
                    id="ticketNumber"
                    name="ticketNumber"
                    required
                    className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="prizeAmount"
                    className="block text-sm font-medium text-brand-gray-dark mb-1"
                  >
                    Prize Amount
                  </label>
                  <input
                    type="text"
                    id="prizeAmount"
                    name="prizeAmount"
                    required
                    className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    className="mt-1 h-4 w-4 text-brand-blue focus:ring-brand-blue border-brand-gray-light rounded"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 text-sm text-brand-gray-dark"
                  >
                    I agree to the{" "}
                    <a href="/legal" className="text-brand-blue hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/legal" className="text-brand-blue hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-gold text-white font-body font-medium px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Submit Claim
              </button>
            </form>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center text-brand-gray-dark text-sm"
          >
            <p className="flex items-center justify-center">
              <ShieldCheckIcon className="w-5 h-5 text-brand-blue mr-2" />
              Your information is protected with bank-level security
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClaimPrize;
