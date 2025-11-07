// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Picture5 from "../../images/Picture5.png";
// import Picture6 from "../../images/Picture6.png";
// import Picture7 from "../../images/Picture7.png";
// import Picture8 from "../../images/Picture8.png";
// import GetStartedLine from "../../images/colorline.png"; // ✅ your vertical line image

// const WorkProcess = () => {
//   const [activeStep, setActiveStep] = useState<number | null>(null);
//   const [selectedStep, setSelectedStep] = useState<number | null>(null);

//   const steps = [
//     {
//       num: 1,
//       title: "Discover & Strategize",
//       icon: Picture5,
//       description:
//         "We begin by understanding your business, goals, and challenges to design a clear strategy that drives measurable success.",
//     },
//     {
//       num: 2,
//       title: "Design & Develop",
//       icon: Picture6,
//       description:
//         "Our creative and technical teams craft user-centric designs and robust development solutions that bring ideas to life.",
//     },
//     {
//       num: 3,
//       title: "Launch & Support",
//       icon: Picture7,
//       description:
//         "After rigorous testing, we launch your product seamlessly and continue to provide maintenance and support post-deployment.",
//     },
//     {
//       num: 4,
//       title: "Test & Refine",
//       icon: Picture8,
//       description:
//         "We continuously test, refine, and optimize to ensure lasting performance and future scalability for your project.",
//     },
//   ];

//   return (
//     <div className="bg-[#0B0C10] text-white py-16 px-6 flex flex-col items-center relative">
//       {/* Section Heading */}
//       <div className="max-w-3xl text-center mb-12 -ml-100">
//         <div className="flex items-center justify-center gap-3 mb-3 -ml-10">
//           <img
//             src={GetStartedLine}
//             alt="line"
//             className="w-[12px] h-[62px] object-contain -ml-88"
//           />
//           <h1 className="text-[43px] font-normal font-gilroy-bold leading-[120%] ">
//             Our Work Process
//           </h1>
//         </div>

//         <p className="text-gray-400 text-sm leading-relaxed ml-10">
//           At Devzz Tech, our streamlined work process ensures efficiency,
//           quality, and innovation at every stage of your project. Here’s how we
//           make it happen:
//         </p>
//       </div>

//       {/* Numbered Timeline */}
//       <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto py-10">
//         <div className="absolute w-[90%] h-[2px] bg-white top-1/2 transform -translate-y-1/2 z-0"></div>

//         <div className="flex justify-between w-[90%] z-10">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               onMouseEnter={() => setActiveStep(index)}
//               onMouseLeave={() => setActiveStep(null)}
//               onClick={() => setSelectedStep(step.num)}
//               className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white relative cursor-pointer transition-all duration-300 ${
//                 index === 0
//                   ? "p-[3px] bg-gradient-to-r from-[#1E61B8] to-[#7E939A] animate-gradientMove bg-[length:200%_200%]"
//                   : "border-[3px] border-white"
//               } ${
//                 activeStep === index
//                   ? "scale-110 shadow-[0_0_20px_rgba(30,97,184,0.6)]"
//                   : ""
//               }`}
//             >
//               <div className="absolute inset-[3px] rounded-full bg-[#0B0C10] flex items-center justify-center">
//                 0{step.num}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Process Boxes */}
//       <div className="flex flex-row justify-center items-stretch gap-[66px] mt-16 w-full max-w-[1290px] flex-wrap">
//         {steps.map((step, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-[#1E1C26] rounded-2xl w-[250px] h-[250px] flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
//             onClick={() => setSelectedStep(step.num)}
//           >
//             <img
//               src={step.icon}
//               alt={step.title}
//               className="w-16 h-16 mb-4 object-contain"
//             />
//             <h3 className="text-lg font-semibold">{step.title}</h3>
//           </motion.div>
//         ))}
//       </div>

//       {/* Step Detail Modal */}
//       <AnimatePresence>
//         {selectedStep && (
//           <motion.div
//             className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-[#1E1C26] rounded-2xl max-w-md w-full p-8 text-center relative border border-white/10"
//               initial={{ scale: 0.8, opacity: 0, y: 40 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.8, opacity: 0, y: 40 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
//                 onClick={() => setSelectedStep(null)}
//               >
//                 ✕
//               </button>
//               <img
//                 src={steps[selectedStep - 1].icon}
//                 alt="icon"
//                 className="w-20 h-20 mx-auto mb-4"
//               />
//               <h2 className="text-2xl font-bold mb-2">
//                 {steps[selectedStep - 1].title}
//               </h2>
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 {steps[selectedStep - 1].description}
//               </p>
//               <button
//                 onClick={() => setSelectedStep(null)}
//                 className="mt-6 px-6 py-2 bg-gradient-to-r from-[#1E61B8] to-[#7E939A] rounded-full text-white hover:opacity-90 transition"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Gradient animation keyframes */}
//       <style>{`
//         @keyframes gradientMove {
//           0% { background-position: 0% 50%; }
//           100% { background-position: 100% 50%; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WorkProcess;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Picture5 from "../../images/Picture5.png";
import Picture6 from "../../images/Picture6.png";
import Picture7 from "../../images/Picture7.png";
import Picture8 from "../../images/Picture8.png";
import GetStartedLine from "../../images/colorline.png";

const WorkProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps = [
    { num: 1, title: "Discover & Strategize", icon: Picture5, description: "We begin by understanding your business, goals, and challenges to design a clear strategy that drives measurable success." },
    { num: 2, title: "Design & Develop", icon: Picture6, description: "Our creative and technical teams craft user-centric designs and robust development solutions that bring ideas to life." },
    { num: 3, title: "Launch & Support", icon: Picture7, description: "After rigorous testing, we launch your product seamlessly and continue to provide maintenance and support post-deployment." },
    { num: 4, title: "Test & Refine", icon: Picture8, description: "We continuously test, refine, and optimize to ensure lasting performance and future scalability for your project." },
  ];

  return (
    // <div className="bg-[#0B0C10] text-white py-16 px-6 flex flex-col items-center relative">
    //   {/* Heading */}
    //   <div className="max-w-3xl text-center mb-12 ">
    //     <div className="flex items-center justify-center gap-3 mb-3   ">
    //       <img src={GetStartedLine} alt="line" className="w-[12px] h-[62px] object-contain  -ml-200" />
    //       <h1 className="text-[43px] font-gilroy-bold leading-[120%] -ml-80">Our Work Process</h1>
    //     </div>
    //     <p className="text-gray-400 text-sm leading-relaxed">
    //       At Devzz Tech, our streamlined work process ensures efficiency, quality, and innovation at every stage of your project. Here’s how we make it happen:
    //     </p>
    //   </div>
    <div className="bg-[#0B0C10] text-white py-16 px-6 flex flex-col items-center relative">
      {/* Section Heading */}
      <div className="max-w-3xl text-center mb-12 -ml-100">
        <div className="flex items-center justify-center gap-3 mb-3 -ml-10">
          <img
            src={GetStartedLine}
            alt="line"
            className="w-[12px] h-[62px] object-contain -ml-88"
          />
          <h1 className="text-[43px] font-normal font-gilroy-bold leading-[120%] ">
            Our Work Process
          </h1>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed ml-10">
          At Devzz Tech, our streamlined work process ensures efficiency,
          quality, and innovation at every stage of your project. Here’s how we
          make it happen:
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto py-10">
        {/* Connecting line */}
        <div className="absolute w-[90%] h-[4px] bg-white/30 top-1/2 transform -translate-y-1/2 z-0 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#1E90FF] via-white to-[#1E90FF] step-gradient animate-stepFlow"></div>
        </div>

        {/* Circles */}
        <div className="flex justify-between w-[90%] z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
              onClick={() => setSelectedStep(step.num)}
              className={`relative w-20 h-20 flex items-center justify-center rounded-full cursor-pointer transition-transform duration-300 p-[3px] ${activeStep === index ? "scale-110 shadow-[0_0_25px_rgba(173,216,230,0.8)]" : ""
                }`}
            >
              <div className="absolute inset-[3px] rounded-full bg-[#0B0C10] flex items-center justify-center z-10">
                0{step.num}
              </div>
              <div className="absolute inset-0 rounded-full bg-[#0B0C10] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-[#1E90FF] via-white to-[#1E90FF] step-gradient animate-stepFlow opacity-60"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Boxes */}
      <div className="flex flex-row justify-center items-stretch gap-[66px] mt-16 w-full max-w-[1290px] flex-wrap">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1E1C26] rounded-2xl w-[250px] h-[250px] flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedStep(step.num)}
          >
            <img src={step.icon} alt={step.title} className="w-16 h-16 mb-4 object-contain" />
            <h3 className="text-lg font-semibold">{step.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStep && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1E1C26] rounded-2xl max-w-md w-full p-8 text-center relative border border-white/10"
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                onClick={() => setSelectedStep(null)}
              >
                ✕
              </button>
              <img src={steps[selectedStep - 1].icon} alt="icon" className="w-20 h-20 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">{steps[selectedStep - 1].title}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{steps[selectedStep - 1].description}</p>
              <button
                onClick={() => setSelectedStep(null)}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-[#1E90FF] to-[#1E90FF] rounded-full text-white hover:opacity-90 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyframes */}
      <style>{`
        @keyframes stepFlow {
          0%, 12.5% { background-position: 0% 50%; }
          25%, 37.5% { background-position: 100% 50%; }
          50%, 62.5% { background-position: 200% 50%; }
          75%, 87.5% { background-position: 300% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-stepFlow {
          background-size: 400% 100%;
          animation: stepFlow 8s steps(4) infinite;
        }
      `}</style>
    </div>
  );
};

export default WorkProcess;
