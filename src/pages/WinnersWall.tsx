import { motion } from "framer-motion";
import WinnerCards from "../components/WinnerCards";
import { useState } from "react";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";

const regions = ["All Regions", "North America", "Europe", "Asia", "Australia", "Africa", "South America"];
const prizeRanges = ["All Prizes", "$1K-$10K", "$10K-$100K", "$100K-$1M", "$1M+"];
const timeframes = ["All Time", "This Month", "Last 3 Months", "This Year"];

const WinnersWall = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedPrizeRange, setSelectedPrizeRange] = useState("All Prizes");
  const [selectedTimeframe, setSelectedTimeframe] = useState("All Time");
  const [showFilters, setShowFilters] = useState(false);

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
            Wall of Winners
          </h1>
          <p className="text-xl text-brand-gray-dark max-w-2xl mx-auto">
            Meet our lucky winners and read their inspiring stories. Your name could be next on this list!
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-gray-dark" />
              <input
                type="text"
                placeholder="Search winners by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-brand-gray-light focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              />
            </div>
            
            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-brand-gray-light hover:border-brand-blue transition-colors"
            >
              <FunnelIcon className="w-5 h-5 text-brand-blue" />
              <span className="text-brand-blue font-medium">Filters</span>
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-2xl shadow-lg"
            >
              {/* Region Filter */}
              <div>
                <label className="block text-sm font-medium text-brand-gray-dark mb-2">
                  Region
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full p-2 rounded-lg border border-brand-gray-light focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                >
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              {/* Prize Range Filter */}
              <div>
                <label className="block text-sm font-medium text-brand-gray-dark mb-2">
                  Prize Range
                </label>
                <select
                  value={selectedPrizeRange}
                  onChange={(e) => setSelectedPrizeRange(e.target.value)}
                  className="w-full p-2 rounded-lg border border-brand-gray-light focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                >
                  {prizeRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeframe Filter */}
              <div>
                <label className="block text-sm font-medium text-brand-gray-dark mb-2">
                  Timeframe
                </label>
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="w-full p-2 rounded-lg border border-brand-gray-light focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                >
                  {timeframes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Winner Cards */}
        <WinnerCards />

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-brand-orange hover:bg-brand-gold text-white font-body font-medium px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
            Load More Winners
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinnersWall;
