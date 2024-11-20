import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-gray-light">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-brand-blue mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-brand-purple mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-brand-gray-dark mb-8 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist. But don't worry, you
            might still be a winner!
          </p>
          <Link
            to="/"
            className="inline-block bg-brand-orange hover:bg-brand-gold text-white font-body font-medium px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Back to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
