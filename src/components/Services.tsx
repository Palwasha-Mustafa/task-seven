import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "From custom designs to e-commerce platforms, our web solutions are built to grow with your business.",
      icon: "/images/1.png"
    },
    {
      title: "App Development",
      description: "Empowering businesses with mobile apps that captivate, engage, and deliver results.",
      icon: "/images/2.png"
    },
    {
      title: "UI/UX Design",
      description: "Transforming ideas into digital interfaces that inspire, engage, and deliver satisfaction.",
      icon: "/images/3.png"
    },
    {
      title: "Graphic Design",
      description: "From logos to marketing, we elevate your brand and captivate your audience.",
      icon: "/images/4.png"
    },
    {
      title: "SaaS Solution",
      description: "We design scalable and secure SaaS solutions tailored to meet industry-specific challenges & business goals.",
      icon: "/images/5.png"
    },
    {
      title: "Artificial Intelligence",
      description: "Transform your business with AI-driven innovations, from automation to personalized customer experiences.",
      icon: "/images/6.png"
    }
  ];

  return (
    <section className="mt-[-96px]">
      <div className="max-w-[1440px] mx-auto px-10 flex flex-col">

        {/* Top Section */}
        <div className="flex w-full justify-between items-start">
          {/* Left Side - Blue Bar + Heading */}
          <h2 className="text-[42px] font-semibold text-white leading-[48px] pb-[21px] flex items-center gap-[23px]">
            <span
              className="inline-block w-3 h-[62px]"
              style={{ background: 'linear-gradient(rgb(30, 97, 184) 0%, rgb(126, 147, 154) 100%)' }}
            />
            <span>Our Services</span>
          </h2>

          {/* Right Side Text */}
          <div className="w-[600px] h-[243px]">
            <p className="text-[18px] leading-[150%] text-white font-normal">
              Transforming ideas into impactful digital solutions that empower businesses to innovate, grow, and thrive in a competitive world.
            </p>
          </div>
        </div>

        <div className="mt-[-130px] flex justify-center w-full">
          <div className="w-[1210px] grid grid-cols-3 gap-x-[90.5px] gap-y-[24px]">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-[343px] h-[255px] opacity-100 rounded-[10px] border border-[rgba(40,45,69,1)] p-[22px] bg-[#15141D] flex flex-col items-center justify-center gap-[25px] transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                {/* Hover background */}
                <div className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-[#1E2A78] to-[#0B1640] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-[25px]">
                  <div className="w-[63px] h-[63px] opacity-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-center text-center">
                    <h3 className="w-[299px] h-[24px] text-[20px] leading-[120%] font-black text-white">
                      {service.title}
                    </h3>
                    <p className="text-white text-sm leading-[150%]">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
