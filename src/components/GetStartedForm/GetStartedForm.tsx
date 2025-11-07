// // File: src/components/GetStartedForm.tsx
// import React from "react";

// const GetStartedForm: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-[#0d0d14] flex items-center justify-center px-6 py-10">
//       <div className="max-w-6xl w-full bg-transparent text-white flex flex-col md:flex-row justify-between items-start gap-10">
//         {/* Left side: Form */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
//             <div className="h-8 w-1 bg-blue-500 rounded" />
//             Get Started Today
//           </h2>
//           <form className="flex flex-col gap-5">
//             <div>
//               <label className="block text-sm mb-2">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Shumaila"
//                 className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-2">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-2">Phone Number</label>
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-2">Project Details</label>
//               <textarea
//                 placeholder="Project Details"
//                 className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium w-32 transition-colors"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* Right side: Text + Map */}
//         <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
//           <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
//             Fill out the form below, and our team will get back to you promptly
//             with a personalized quote. Your journey toward innovation begins
//             here.
//           </p>

//           <div className="relative w-full max-w-lg">
//            <img src="../images/mapp.png" alt="World Map" className="w-full opacity-70" />

//             {/* Country flags */}
//             <div className="absolute top-[30%] left-[20%] flex items-center gap-2">
//               <img
//                 src="https://flagcdn.com/w20/ca.png"
//                 alt="Canada"
//                 className="w-6 h-4"
//               />
//               <span className="text-sm">Canada</span>
//             </div>

//             <div className="absolute top-[25%] left-[55%] flex items-center gap-2">
//               <img
//                 src="https://flagcdn.com/w20/de.png"
//                 alt="Germany"
//                 className="w-6 h-4"
//               />
//               <span className="text-sm">Germany</span>
//             </div>

//             <div className="absolute top-[38%] left-[65%] flex items-center gap-2">
//               <img
//                 src="https://flagcdn.com/w20/pk.png"
//                 alt="Pakistan"
//                 className="w-6 h-4"
//               />
//               <span className="text-sm">Pakistan</span>
//             </div>

//             <div className="absolute top-[60%] left-[35%] flex items-center gap-2">
//               <img
//                 src="https://flagcdn.com/w20/br.png"
//                 alt="Brazil"
//                 className="w-6 h-4"
//               />
//               <span className="text-sm">Brazil</span>
//             </div>

//             <div className="absolute bottom-[15%] right-[10%] flex items-center gap-2">
//               <img
//                 src="https://flagcdn.com/w20/au.png"
//                 alt="Australia"
//                 className="w-6 h-4"
//               />
//               <span className="text-sm">Australia</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetStartedForm;



// import React from "react";

// const GetStartedForm: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-[#0d0d14] flex items-center justify-center px-6 py-10">
//       <div className="max-w-6xl w-full bg-transparent text-white flex flex-col md:flex-row justify-between items-start gap-10">
//         {/* Left side: Form */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
//             <div className="h-8 w-1 bg-blue-500 rounded" />
//             Get Started Today
//           </h2>
//           <form className="flex flex-col gap-5">
//             <div>
//               <label className="block text-sm mb-2">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Shumaila"
//                 className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-2">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-2">Phone Number</label>
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-2">Project Details</label>
//               <textarea
//                 placeholder="Project Details"
//                 className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium w-32 transition-colors"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* Right side: Text + Map */}
//         <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
//           <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
//             Fill out the form below, and our team will get back to you promptly
//             with a personalized quote. Your journey toward innovation begins
//             here.
//           </p>

//           <div className="relative w-full max-w-lg">
//            <img src="../images/mapp.png" alt="World Map" className="w-full opacity-70" />

//             {/* Country flags */}
//             <div className="absolute top-[30%] left-[20%] flex items-center gap-2">
//               <img
//                 src="https://flagcdn.com/w20/ca.png"
//                 alt="Canada"
//                 className="w-6 h-4"
//               />
//               <span className="text-sm">Canada</span>
//             </div>

//             <div className="absolute top-[25%] left-[55%] flex items-center gap-2">
//               <img
//                 src="https://flagcdn.com/w20/de.png"
//                 alt="Germany"
//                 className="w-6 h-4"
//               />
//               <span className="text-sm">Germany</span>
//             </div>

//             <div className="absolute top-[38%] left-[65%] flex items-center gap-2">
//               <img
//                 src="https://flagcdn.com/w20/pk.png"
//                 alt="Pakistan"
//                 className="w-6 h-4"
//               />
//               <span className="text-sm">Pakistan</span>
//             </div>

//             <div className="absolute top-[60%] left-[35%] flex items-center gap-2">
//               <img
//                 src="https://flagcdn.com/w20/br.png"
//                 alt="Brazil"
//                 className="w-6 h-4"
//               />
//               <span className="text-sm">Brazil</span>
//             </div>

//             <div className="absolute bottom-[15%] right-[10%] flex items-center gap-2">
//               <img
//                 src="https://flagcdn.com/w20/au.png"
//                 alt="Australia"
//                 className="w-6 h-4"
//               />
//               <span className="text-sm">Australia</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetStartedForm;




// import React from "react";
// import mapImage from "../../images/mapp2.png"; // ✅ Import your image here

// const GetStartedForm: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-[#0d0d14] flex items-center justify-center px-6 py-10">
//       <div className="max-w-6xl w-full bg-transparent text-white flex flex-col md:flex-row justify-between items-start gap-10">
//         {/* Left side: Form */}
//       <div className="w-full md:w-1/2">
//              <h2 className="flex items-center gap-2 mb-6">
//            <div className="h-[62px] w-[12px] bg-[#1E61B8] rounded" />
//              <span className="font-gilroy-black font-normal text-[48px] leading-[120%] text-white">
//                 Get Started Today
//                  </span>
//             </h2>
//              </div>
//             </div>


//      <form className="flex flex-col gap-5">
//   <div>
//     <label className="block font-gilroy-bold font-normal text-[20px] leading-[100%] text-white mb-2">
//       Full Name
//     </label>
//     <input
//       type="text"
//       placeholder="Shumaila"
//       className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//   </div>

//   <div>
//     <label className="block font-gilroy-bold font-normal text-[20px] leading-[100%] text-white mb-2">
//       Email Address
//     </label>
//     <input
//       type="email"
//       placeholder="Email Address"
//       className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//   </div>

//   <div>
//     <label className="block font-gilroy-bold font-normal text-[20px] leading-[100%] text-white mb-2">
//       Phone Number
//     </label>
//     <input
//       type="text"
//       placeholder="Phone Number"
//       className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//   </div>

//   <div>
//     <label className="block font-gilroy-bold font-normal text-[20px] leading-[100%] text-white mb-2">
//       Project Details
//     </label>
//     <textarea
//       placeholder="Project Details"
//       className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none"
//     />
//   </div>

//   <button
//     type="submit"
//     className="bg-[#1E61B8] hover:bg-[#15518f] text-white py-3 px-6 rounded-[35px] font-medium w-[143px] h-[48px] transition-colors"
//   >
//     Submit
//   </button>
// </form>

//         </div>

//         {/* Right side: Text + Map */}
//         <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
//           <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
//             Fill out the form below, and our team will get back to you promptly
//             with a personalized quote. Your journey toward innovation begins
//             here.
//           </p>

//           <div className="relative w-full max-w-lg">
//             {/* ✅ Use imported image here */}
//             <img src={mapImage} alt="World Map" className="w-full opacity-70" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetStartedForm;


import React from "react";
import GetStartedLine from "../../images/colorline.png"; 
import mapImage from "../../images/mapp2.png"; // ✅ Import your image here

const GetStartedForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1E1C26]  flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full bg-transparent text-white flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Left side: Heading + Form */}
        <div className="w-full md:w-1/2">
          {/* Heading */}
          <h2 className="flex items-center gap-2 mb-6">
           
            <span className="font-gilroy-black font-normal text-[48px] leading-[120%] text-white">
              Get Started Today
            </span>
            <img
          src={GetStartedLine}
          alt="Heading icon"
          className="w-[px12] h-[62px] object-contain -ml-110" // adjust size as needed
        />
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-5">
            <div>
              <label className="block font-gilroy-bold font-normal text-[20px] leading-[100%] text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Shumaila"
                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-gilroy-bold font-normal text-[20px] leading-[100%] text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-gilroy-bold font-normal text-[20px] leading-[100%] text-white mb-2">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-gilroy-bold font-normal text-[20px] leading-[100%] text-white mb-2">
                Project Details
              </label>
              <textarea
                placeholder="Project Details"
                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#1E61B8] hover:bg-[#15518f] text-white py-3 px-6 rounded-[35px] font-medium w-[143px] h-12 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right side: Text + Map */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
            Fill out the form below, and our team will get back to you promptly
            with a personalized quote. Your journey toward innovation begins
            here.
          </p>

          <div className="relative w-full max-w-lg">
            <img
              src={mapImage}
              alt="World Map"
              className="w-full opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedForm;
