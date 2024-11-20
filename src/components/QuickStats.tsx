import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CurrencyDollarIcon, UserGroupIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface Stat {
  id: number;
  name: string;
  value: string;
  icon: any;
  description: string;
}

const stats: Stat[] = [
  {
    id: 1,
    name: 'Total Payouts',
    value: '$650M+',
    icon: CurrencyDollarIcon,
    description: 'In verified prize money distributed'
  },
  {
    id: 2,
    name: 'Happy Winners',
    value: '1,000+',
    icon: UserGroupIcon,
    description: 'Successful claims processed'
  },
  {
    id: 3,
    name: 'Average Claim Time',
    value: '48 hours',
    icon: ClockIcon,
    description: 'From verification to payout'
  },
  {
    id: 4,
    name: 'Success Rate',
    value: '100%',
    icon: CheckCircleIcon,
    description: 'For valid prize claims'
  },
];

const QuickStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <section ref={containerRef} className="py-24 sm:py-32 bg-gradient-to-b from-white to-brand-gray-light">
      <motion.div 
        className="container-custom"
        style={{ opacity, y }}
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-brand-blue mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-brand-gray-dark max-w-2xl mx-auto">
              Join thousands of winners who have successfully claimed their prizes through our secure platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4 p-3 rounded-xl bg-brand-blue/10">
                    <stat.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <dt className="text-lg font-medium text-brand-gray-dark mb-2">
                    {stat.name}
                  </dt>
                  <dd className="text-4xl font-heading font-bold text-brand-blue mb-2">
                    {stat.value}
                  </dd>
                  <p className="text-sm text-brand-gray-dark text-center">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <a
              href="/stats"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-brand-blue hover:bg-brand-purple transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View Detailed Statistics
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default QuickStats;