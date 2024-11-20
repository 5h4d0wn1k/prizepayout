import { motion } from "framer-motion";
import {
  TrophyIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    label: "Total Paid Out",
    value: "$650M+",
    icon: TrophyIcon,
  },
  {
    label: "Happy Winners",
    value: "10,000+",
    icon: UserGroupIcon,
  },
  {
    label: "Years of Trust",
    value: "15+",
    icon: ShieldCheckIcon,
  },
  {
    label: "Countries Served",
    value: "50+",
    icon: GlobeAltIcon,
  },
];

const team = [
  {
    name: "Sarah Anderson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "20+ years of experience in prize management and financial services.",
  },
  {
    name: "Michael Chen",
    role: "Chief Security Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Former cybersecurity expert, ensuring your prizes are safe and secure.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Customer Success",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Dedicated to making your prize claiming experience smooth and enjoyable.",
  },
];

const About = () => {
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
            About PrizePayout
          </h1>
          <p className="text-xl text-brand-gray-dark max-w-2xl mx-auto">
            Your trusted partner in prize claiming for over 15 years. We've helped
            thousands of winners receive their prizes safely and securely.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <stat.icon className="w-12 h-12 text-brand-gold mx-auto mb-4" />
              <div className="text-3xl font-bold text-brand-blue mb-2">
                {stat.value}
              </div>
              <div className="text-brand-gray-dark">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-brand-gray-dark leading-relaxed">
              At PrizePayout, we believe everyone deserves their moment of joy. Our
              mission is to make prize claiming simple, secure, and exciting. We're
              committed to transparency, security, and exceptional service for every
              winner.
            </p>
          </div>
        </motion.div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-brand-blue text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-brand-blue mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-purple font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-brand-gray-dark">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-20"
        >
          <a
            href="/contact"
            className="inline-block bg-brand-orange hover:bg-brand-gold text-white font-body font-medium px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
