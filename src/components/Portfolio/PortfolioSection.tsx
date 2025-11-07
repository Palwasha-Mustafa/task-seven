import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import deskIt from "../../images/Picture1.png";
import behamas from "../../images/Picture2.png";
import fleetmasta from "../../images/Picture31.png";
import moviestream from "../../images/Picture4.png";
import GetStartedLine from "../../images/colorline.png";// your vertical line image
// import GetStartedLine from "../../images/get-started-line.png"; // vertical line beside heading

type TabKey =
  | "Web Development"
  | "App Development"
  | "UI/UX Design"
  | "Graphic Design"
  | "SaaS"
  | "Artificial Intelligence";

type Project = {
  title: string;
  desc: string;
  img: string;
  extraClass?: string;
};

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Web Development");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // modal state

  const portfolioData = {
    "Web Development": [
      {
        title: "DeskIt",
        desc: "Redesigning new app for discovering barber and beauty professionals.",
        img: deskIt,
      },
      {
        title: "Behamas",
        desc: "Gaining the customer experience from idea to investment with branding, website, and app.",
        img: behamas,
        extraClass: "mt-20",
      },
      {
        title: "Fleetmasta",
        desc: "A Shopify website that supports immunity, health, and energy.",
        img: fleetmasta,
        extraClass: "mt-20",
      },
      {
        title: "MovieStream",
        desc: "A modern streaming platform with responsive UI and content curation.",
        img: moviestream,
      },
    ],
    "App Development": [],
    "UI/UX Design": [],
    "Graphic Design": [],
    SaaS: [],
    "Artificial Intelligence": [],
  };

  const tabs = Object.keys(portfolioData);

  return (
    <section className="bg-[#0f0f15] text-white py-16 px-6 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col gap-10">
        {/* ===== Header Section ===== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={GetStartedLine}
              alt="line"
              className="w-[12px] h-[62px] object-contain"
            />
            <h2 className="text-[43px] font-gilroy-bold font-normal leading-[120%]">
              Our Portfolio
            </h2>
          </div>

          <p className="text-gray-300 max-w-2xl text-sm md:text-base">
            Explore our portfolio to see how we’ve transformed ideas into
            impactful digital solutions. From innovative designs to
            cutting-edge applications, discover the projects that showcase our
            expertise and creativity.
          </p>
        </div>

        {/* ===== Tabs (Your Styling Preserved) ===== */}
        <div className="flex flex-wrap justify-start gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as TabKey)}
              className={`px-4 py-2 rounded-full font-medium transition ${activeTab === tab
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ===== Portfolio Grid ===== */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-1 md:grid-cols-2 gap-10"
            >
              {portfolioData[activeTab].length > 0 ? (
                portfolioData[activeTab].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                    className={`relative flex flex-col items-center text-center group transition-transform duration-300 ${item.extraClass || ""}`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-auto object-cover rounded-2xl"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 rounded-2xl flex flex-col justify-center items-center transition-opacity duration-500">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(item)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition"
                      >
                        View Project
                      </button>
                    </div>

                    {/* Info Below */}
                    <div className="mt-3 max-w-md -ml-30">
                      <p className="text-gray-300 text-sm leading-snug">
                        <span className="font-semibold text-white">
                          {item.title}:
                        </span>{" "}
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-500 italic">
                  No projects available yet.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===== CTA Button ===== */}
        <div className="flex justify-center mt-10">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-white font-medium shadow-lg transition">
            View All Projects
          </button>
        </div>
      </div>

      {/* ===== Smaller Modal ===== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1E1C26] rounded-2xl p-5 max-w-sm w-full relative shadow-lg text-center"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>

              {/* Image */}
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-auto object-cover rounded-xl mb-3"
              />

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {selectedProject.desc}
              </p>

              {/* Back Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm transition"
              >
                ← Back
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
