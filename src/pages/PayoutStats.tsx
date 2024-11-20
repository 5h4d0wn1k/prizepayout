import { motion } from "framer-motion";
import QuickStats from "../components/QuickStats";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const monthlyData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Total Payouts ($M)",
      data: [120, 150, 180, 220, 250, 280, 310, 350, 400, 450, 500, 650],
      borderColor: "#0047AB",
      backgroundColor: "rgba(0, 71, 171, 0.1)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const regionData = {
  labels: ["North America", "Europe", "Asia", "Australia", "Africa", "South America"],
  datasets: [
    {
      label: "Payouts by Region ($M)",
      data: [350, 200, 150, 100, 50, 80],
      backgroundColor: [
        "#0047AB",
        "#FFC107",
        "#2ECC71",
        "#FF5733",
        "#8E44AD",
        "#3498DB",
      ],
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const PayoutStats = () => {
  return (
    <div className="py-20 bg-brand-gray-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-blue mb-4">
            Payout Statistics
          </h1>
          <p className="text-xl text-brand-gray-dark max-w-2xl mx-auto">
            Explore our transparent payout data and see the life-changing prizes we've awarded.
          </p>
        </motion.div>
        
        <QuickStats />
        
        {/* Monthly Stats Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-16 p-8 bg-white rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-heading font-bold text-brand-blue mb-8">
            Monthly Payout Trends
          </h2>
          <div className="h-96">
            <Line data={monthlyData} options={chartOptions} />
          </div>
        </motion.div>

        {/* Regional Distribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 bg-white rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-heading font-bold text-brand-blue mb-8">
            Payouts by Region
          </h2>
          <div className="h-96">
            <Bar data={regionData} options={chartOptions} />
          </div>
        </motion.div>
        
        {/* Largest Payouts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 bg-white rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-heading font-bold text-brand-blue mb-8">
            Largest Payouts
          </h2>
          <div className="space-y-6">
            {[
              {
                amount: "$650M",
                date: "March 2024",
                location: "New York",
                winner: "John D.",
                game: "Mega Millions",
              },
              {
                amount: "$450M",
                date: "February 2024",
                location: "California",
                winner: "Sarah M.",
                game: "Powerball",
              },
              {
                amount: "$380M",
                date: "January 2024",
                location: "Texas",
                winner: "Robert K.",
                game: "State Lottery",
              },
            ].map((payout, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-brand-gray-light rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <span className="text-3xl font-bold text-brand-gold">
                      {payout.amount}
                    </span>
                    <div>
                      <p className="text-lg font-medium text-brand-blue">
                        {payout.winner}
                      </p>
                      <p className="text-brand-gray-dark">{payout.game}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-brand-blue font-medium">{payout.location}</p>
                      <p className="text-brand-gray-dark">{payout.date}</p>
                    </div>
                    <button className="text-brand-orange hover:text-brand-gold transition-colors">
                      View Story →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PayoutStats;
