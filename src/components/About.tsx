import React from 'react';

const About: React.FC = () => {
  return (
    <section className="pt-12 pb-20 ">
      <div className="max-w-[1440px] mx-auto px-10 flex gap-[185px] h-[468px]">

        {/* Left Side - Text Content */}
        <div className="w-[496px] h-[321px] opacity-100">

          {/* Blue Bar + Heading */}
          <h2 className="text-[42px] font-semibold text-white leading-[48px] pb-[21px] flex items-center gap-[23px]">
            <span
              className="inline-block w-3 h-[62px]"
              style={{ background: 'linear-gradient(rgb(30, 97, 184) 0%, rgb(126, 147, 154) 100%)' }}
            />
            <span>About Devzz Tech</span>
          </h2>

          {/* Content Text */}
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
            className="w-[601px] h-[468px] object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
