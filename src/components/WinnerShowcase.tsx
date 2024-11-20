import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface Winner {
  id: number;
  name: string;
  prize: string;
  location: string;
  date: string;
  image: string;
  proofImage: string;
  story: string;
  category: string;
}

const winners: Winner[] = [
  {
    id: 1,
    name: "Michael Anderson",
    prize: "$2.5 Million",
    location: "Los Angeles, CA",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    proofImage: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=400&fit=crop",
    story: "Won the Mega Millions jackpot with numbers he'd been playing for 20 years.",
    category: "Lottery"
  },
  {
    id: 2,
    name: "Sarah Martinez",
    prize: "$500,000",
    location: "Chicago, IL",
    date: "February 28, 2024",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    proofImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop",
    story: "Scratched her way to victory with our Premium Scratch Card series.",
    category: "Scratch Card"
  },
  {
    id: 3,
    name: "Robert Chen",
    prize: "$1.8 Million",
    location: "Seattle, WA",
    date: "March 1, 2024",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    proofImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop",
    story: "Hit the jackpot on his first-ever lottery ticket purchase!",
    category: "Powerball"
  },
  {
    id: 4,
    name: "Emily Thompson",
    prize: "$750,000",
    location: "Miami, FL",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    proofImage: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=400&fit=crop",
    story: "Won big in our special St. Patrick's Day drawing event.",
    category: "Special Draw"
  }
];

const WinnerShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextWinner = () => {
    setActiveIndex((prev) => (prev + 1) % winners.length);
  };

  const prevWinner = () => {
    setActiveIndex((prev) => (prev - 1 + winners.length) % winners.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-brand-gray-light to-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-brand-blue mb-4">
            Real Winners, Real Proof
          </h2>
          <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
            See the joy and excitement of our recent winners as they claim their life-changing prizes
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
            <button
              onClick={prevWinner}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all transform hover:scale-110"
              aria-label="Previous winner"
            >
              <ChevronLeftIcon className="w-6 h-6 text-brand-blue" />
            </button>
            <button
              onClick={nextWinner}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all transform hover:scale-110"
              aria-label="Next winner"
            >
              <ChevronRightIcon className="w-6 h-6 text-brand-blue" />
            </button>
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Winner Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={winners[activeIndex].image}
                  alt={winners[activeIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-brand-blue"
                />
                <div>
                  <h3 className="text-2xl font-heading font-bold text-brand-blue">
                    {winners[activeIndex].name}
                  </h3>
                  <p className="text-brand-gray-dark">
                    {winners[activeIndex].location}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between border-b border-brand-gray-light pb-4">
                  <span className="text-brand-gray-dark">Prize Amount</span>
                  <span className="text-xl font-heading font-bold text-brand-green">
                    {winners[activeIndex].prize}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-brand-gray-light pb-4">
                  <span className="text-brand-gray-dark">Category</span>
                  <span className="text-lg font-medium text-brand-blue">
                    {winners[activeIndex].category}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-brand-gray-light pb-4">
                  <span className="text-brand-gray-dark">Date Claimed</span>
                  <span className="text-lg text-brand-gray-dark">
                    {winners[activeIndex].date}
                  </span>
                </div>
              </div>

              <p className="text-lg text-brand-gray-dark mb-6">
                "{winners[activeIndex].story}"
              </p>

              <div className="flex justify-center">
                <a
                  href="/winners"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-brand-orange hover:bg-brand-gold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Read Full Story
                </a>
              </div>
            </div>

            {/* Proof Image */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple opacity-20 rounded-2xl rotate-3"></div>
              <motion.div
                initial={{ rotate: -3 }}
                animate={{ rotate: 3 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="relative bg-white p-4 rounded-2xl shadow-xl"
              >
                <img
                  src={winners[activeIndex].proofImage}
                  alt="Prize proof"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6 rounded-b-lg">
                  <p className="text-white text-sm">
                    Official prize verification photo
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {winners.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex
                  ? 'bg-brand-blue scale-125'
                  : 'bg-brand-gray-light hover:bg-brand-blue/50'
              }`}
              aria-label={`Go to winner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinnerShowcase;
