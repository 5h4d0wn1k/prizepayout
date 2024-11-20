import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ShieldCheckIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: ShieldCheckIcon,
    text: "100% Secure & Verified",
  },
  {
    icon: CurrencyDollarIcon,
    text: "Fast Payouts",
  },
  {
    icon: ClockIcon,
    text: "24/7 Support",
  },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-gray-light to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 -left-4 w-72 h-72 bg-brand-blue/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-0 -right-4 w-72 h-72 bg-brand-gold/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-green/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
        />
      </div>

      <div className="relative container-custom py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block text-brand-blue mb-2">
                  Transform Your Win
                </span>
                <span className="block bg-gradient-to-r from-brand-orange to-brand-gold bg-clip-text text-transparent">
                  Into Reality
                </span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-brand-gray-dark max-w-3xl mx-auto">
                Secure, transparent, and hassle-free prize claiming process. Your dreams are just a few steps away.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/claim"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-brand-orange hover:bg-brand-gold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Claim Your Prize
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/how-it-works"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Learn More
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center justify-center gap-2 text-brand-blue"
                >
                  <feature.icon className="h-6 w-6" />
                  <span className="text-lg font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;