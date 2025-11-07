import React from 'react';

const About: React.FC = () => {
  return (
    <section className="w-[1290px] h-[468px] opacity-100 mx-auto">
      <div className="flex gap-[185px] h-full">
        
        {/* Left Side - Text Content */}
        <div className="w-[496px] h-[321px] opacity-100">
          
          {/* Group: Blue Bar + Heading (380px × 62px) with 23px gap */}
          <div className="w-[380px] h-[62px] opacity-100 flex items-center mt-[73.5px] gap-[23px]">
            {/* Blue Gradient Bar */}
            <div className="w-[12px] h-[62px] bg-gradient-to-b from-[#1E61B8] to-[#7E939A]"></div>
            
            {/* Heading */}
            <h2 className="w-[345px] h-[48px] text-[42px] leading-[48px] font-semibold text-white">
              About Devzz Tech
            </h2>
          </div>
          
          {/* Content Text  */}
          <div className="w-[462px] h-[243px] mt-[16px] ml-[34px]">
            <p className="text-[18px] leading-[150%] text-white font-normal">
              At Devzz Tech, we specialize in delivering innovative digital solutions that empower businesses to thrive in a rapidly evolving technological landscape. With a passion for technology and creativity, our expert team transforms ideas into impactful results, driving growth, efficiency, and success. We are dedicated to building lasting partnerships by exceeding expectations and delivering excellence at every step.
            </p>
          </div>
          
        </div>

        {/* Right Side - GIF Image */}
        <div className="flex-1 flex items-center justify-center">
          <img 
            src="/about-us.gif"  
            alt="Devzz Tech Animation"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default About;