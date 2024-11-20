import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const winners = [
  {
    name: "Sarah Johnson",
    prize: "$250,000",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "I never thought I'd win. This has changed my life completely!",
    date: "March 15, 2024"
  },
  {
    name: "Michael Chen",
    prize: "$500,000",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "Dreams do come true. Thank you PrizePayout!",
    date: "March 10, 2024"
  },
  {
    name: "Emily Rodriguez",
    prize: "$750,000",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "The claiming process was so easy. I'm still in shock!",
    date: "March 5, 2024"
  },
  {
    name: "David Kim",
    prize: "$1,000,000",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    quote: "From dreaming to winning - PrizePayout made it happen!",
    date: "March 1, 2024"
  }
];

const WinnerCards = () => {
  return (
    <section className="py-20 bg-brand-gray-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-blue mb-4">
            Recent Winners
          </h2>
          <p className="text-xl text-brand-gray-dark max-w-2xl mx-auto">
            Join our growing list of winners who turned their dreams into reality.
            Your story could be next!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="winner-swiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {winners.map((winner, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src={winner.image}
                      alt={winner.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-brand-gold text-white px-4 py-2 rounded-full font-bold">
                      {winner.prize}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-brand-blue mb-2">
                      {winner.name}
                    </h3>
                    <p className="text-brand-gray-dark mb-4">
                      <span className="text-brand-purple">{winner.location}</span> • {winner.date}
                    </p>
                    <blockquote className="italic text-brand-gray-dark border-l-4 border-brand-gold pl-4 mb-4">
                      "{winner.quote}"
                    </blockquote>
                    <button className="w-full bg-brand-orange hover:bg-brand-gold text-white font-body font-medium px-6 py-3 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
                      Claim Your Prize
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default WinnerCards;