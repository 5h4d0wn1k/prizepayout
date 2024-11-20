import { motion } from "framer-motion";
import { NewspaperIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const newsArticles = [
  {
    title: "PrizePayout Reaches $650M in Total Payouts",
    date: "March 15, 2024",
    source: "Financial Times",
    excerpt:
      "Leading prize claiming platform PrizePayout announces a major milestone in total prize disbursements...",
    link: "#",
  },
  {
    title: "New Security Measures Enhance Winner Protection",
    date: "March 10, 2024",
    source: "Tech Weekly",
    excerpt:
      "PrizePayout implements state-of-the-art security protocols to ensure winner safety and privacy...",
    link: "#",
  },
  {
    title: "Record-Breaking Prize Claimed Through Platform",
    date: "March 5, 2024",
    source: "Business Insider",
    excerpt:
      "A lucky winner claims the largest prize in PrizePayout history through the platform's secure system...",
    link: "#",
  },
];

const pressReleases = [
  {
    title: "PrizePayout Expands to 10 New Countries",
    date: "March 1, 2024",
    type: "Expansion",
    fileSize: "1.2 MB",
  },
  {
    title: "Q4 2023 Payout Statistics Report",
    date: "February 15, 2024",
    type: "Financial Report",
    fileSize: "2.5 MB",
  },
  {
    title: "New Mobile App Launch Announcement",
    date: "February 1, 2024",
    type: "Product Launch",
    fileSize: "856 KB",
  },
];

const Media = () => {
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
            Media Center
          </h1>
          <p className="text-xl text-brand-gray-dark max-w-2xl mx-auto">
            Stay updated with our latest news, press releases, and media resources.
          </p>
        </motion.div>

        {/* Latest News */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-heading font-bold text-brand-blue mb-8">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <motion.a
                key={index}
                href={article.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <NewspaperIcon className="w-6 h-6 text-brand-gold mr-2" />
                    <span className="text-brand-purple font-medium">
                      {article.source}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-blue mb-2">
                    {article.title}
                  </h3>
                  <p className="text-brand-gray-dark mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-brand-gray-dark">
                      {article.date}
                    </span>
                    <span className="text-brand-orange hover:text-brand-gold font-medium">
                      Read more →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Press Releases */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-heading font-bold text-brand-blue mb-8">
            Press Releases
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="flex items-center justify-between p-6 border-b last:border-b-0 border-brand-gray-light hover:bg-brand-gray-light/20 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-heading font-bold text-brand-blue mb-1">
                    {release.title}
                  </h3>
                  <div className="flex items-center text-sm text-brand-gray-dark">
                    <span className="mr-4">{release.date}</span>
                    <span className="text-brand-purple">{release.type}</span>
                  </div>
                </div>
                <button className="flex items-center text-brand-orange hover:text-brand-gold font-medium">
                  <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">
                    Download ({release.fileSize})
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media Kit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <h2 className="text-3xl font-heading font-bold text-brand-blue mb-4">
            Media Kit
          </h2>
          <p className="text-brand-gray-dark mb-8 max-w-2xl mx-auto">
            Download our comprehensive media kit containing logos, brand guidelines,
            and high-resolution images for press use.
          </p>
          <button className="inline-flex items-center bg-brand-orange hover:bg-brand-gold text-white font-body font-medium px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
            <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
            Download Media Kit (5.2 MB)
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Media;
