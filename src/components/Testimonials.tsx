import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  location: string;
  amount: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "The claiming process was incredibly smooth. The team at PrizePayout guided me through every step, making what could have been an overwhelming experience feel easy and secure.",
    author: "Sarah Johnson",
    location: "New York, NY",
    amount: "$250,000",
    image: "/testimonials/winner1.jpg"
  },
  {
    id: 2,
    content: "I couldn't believe I won, and I was even more impressed by how professional and efficient the payout process was. They handled everything with utmost security and transparency.",
    author: "Michael Chen",
    location: "San Francisco, CA",
    amount: "$1,000,000",
    image: "/testimonials/winner2.jpg"
  },
  {
    id: 3,
    content: "From verification to receiving my winnings, everything was handled with complete professionalism. The financial advice provided was invaluable for managing my windfall.",
    author: "David Rodriguez",
    location: "Miami, FL",
    amount: "$500,000",
    image: "/testimonials/winner3.jpg"
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-brand-blue/5 to-brand-blue/10 py-24 sm:py-32">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-blue mb-4">
              What Our Winners Say
            </h2>
            <p className="text-xl text-brand-gray-dark">
              Real stories from real winners who trusted PrizePayout
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-1 p-8">
                  <div className="flex items-center gap-x-4 mb-8">
                    <img
                      className="h-16 w-16 rounded-full bg-brand-gray-light object-cover"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-blue">
                        {testimonial.author}
                      </h3>
                      <p className="text-brand-gray-dark">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-lg text-brand-gray-dark mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="mt-auto">
                    <div className="flex items-center gap-x-2">
                      <span className="text-sm text-brand-gray-dark">Prize Amount:</span>
                      <span className="text-lg font-heading font-bold text-brand-green">
                        {testimonial.amount}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <a
              href="/winners"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-brand-orange hover:bg-brand-gold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View More Success Stories
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;