import React, { useState } from "react";

interface Testimonial {
  id: number;
  text: string;
  secondText: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "devzztech has helped my team and I stay on the same page. Previously, we were all over the board. Using devzztech has definitely saved us time and money.",
    secondText: "I highly recommend devzztech. It has been so important for us as we continue to grow our company.",
    author: "Haylie Rosser",
    position: "Marketing Manager, 10Pearls",
  },
  {
    id: 2,
    text: "devzztech has helped my team and I stay on the same page. Previously, we were all over the board. Using devzztech has definitely saved us time and money.",
    secondText: "I highly recommend devzztech. It has been so important for us as we continue to grow our company.",
    author: "Haylie Rosser",
    position: "Marketing Manager, 10Pearls",
  },
  {
    id: 3,
    text: "devzztech has helped my team and I stay on the same page. Previously, we were all over the board. Using devzztech has definitely saved us time and money.",
    secondText: "I highly recommend devzztech. It has been so important for us as we continue to grow our company.",
    author: "Haylie Rosser",
    position: "Marketing Manager, 10Pearls",
  },
];

const AboutUs: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const total = testimonials.length;

  const getPosition = (index: number) => {
    if (index === current) return "center";
    if (index === current - 1) return "left";
    if (index === current + 1) return "right";
    return "hidden";
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative py-6 overflow-x-hidden">
      <div className="flex flex-col items-start">
        <div className="flex items-start gap-6 mb-4">
          <div className="w-[12px] h-[62px] bg-gradient-to-b from-[#1E61B8] to-[#7E939A]"></div>
          <h2 className="font-gilroy-bold text-[43px] leading-[120%] text-white">
            What they say about us?
          </h2>
        </div>
        <p className="font-gilroy-regular text-[20px] leading-[150%] text-white ml-[40px] max-w-[593px]">
          Hear from our satisfied clients who trust us to deliver exceptional results.
          Their words inspire us to push boundaries and innovate every day.
        </p>
      </div>

      <div className="relative w-full max-w-[1280px] h-[410px] mx-auto mb-15 mt-25 ">
        {testimonials.map((testimonial, index) => {
          const position = getPosition(index);

          let style = "opacity-0 pointer-events-none";
          if (position === "center") {
            style = `translate-x-[-50%] scale-[1.25] z-30 opacity-100 blur-none pointer-events-auto`;
          } else if (position === "left") {
            style = `translate-x-[-180%] scale-[1.25] z-20 opacity-50 blur-[1px] pointer-events-none`;
          } else if (position === "right") {
            style = `translate-x-[80%] scale-[1.25] z-20 opacity-50 blur-[1px] pointer-events-none`;
          }

          return (
            <div
              key={index}
              className={`absolute top-1/2 left-1/2 -translate-y-1/2 w-[660px] min-h-[340px] rounded-[32px] bg-white shadow-2xl transition-all duration-700 ${style}`}
              onClick={() => setCurrent(index)}
            >
              <div className="absolute top-8 left-8">
                <img
                  src="/images/Vector (2).png"
                  alt="Quote icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-full h-full pt-20 px-8 pb-8">
                <div className="w-full min-h-[239px]">
                  <p className="font-gilroy-regular text-[24px] leading-[150%] text-black whitespace-pre-line">
                    {testimonial.text}
                  </p>
                  <p className="font-gilroy-regular text-[20px] leading-[150%] text-black mt-6">
                    {testimonial.secondText}
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="font-bold text-[18px] leading-[150%] text-[#0B2240]">
                    {testimonial.author}
                  </h4>
                  <p className="font-gilroy-regular text-[14px] leading-[150%] text-black mt-1">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center space-x-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 shadow ${i === current ? "bg-[#1E61B8] scale-125" : "bg-[#E6E9EF] hover:bg-[#1E61B8] hover:scale-110"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
