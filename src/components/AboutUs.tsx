// AboutUs.tsx
import React, { useState } from 'react';

interface Testimonial {
  id: number;
  text: string;
  secondText: string;
  author: string;
  position: string;
}

const AboutUs: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  // Testimonial data
  // Testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "devzztech has helped my team and I stay on the same page. Previously, we were all over the board. Using devzztech has definitely saved us time and money.",
    secondText: "I highly recommend devzztech. It has been so important for us as we continue to grow our company.",
    author: "Haylie Rosser",
    position: "Marketing Manager, 10Pearls"
  },
  {
    id: 2,
    text: "devzztech has helped my team and I stay on the same page. Previously, we were all over the board. Using devzztech has definitely saved us time and money.",
    secondText: "I highly recommend devzztech. It has been so important for us as we continue to grow our company.",
    author: "Haylie Rosser", 
    position: "Marketing Manager, 10Pearls"
  },
  {
    id: 3,
    text: "devzztech has helped my team and I stay on the same page. Previously, we were all over the board. Using devzztech has definitely saved us time and money.",
    secondText: "I highly recommend devzztech. It has been so important for us as we continue to grow our company.",
    author: "Haylie Rosser",
    position: "Marketing Manager, 10Pearls"
  },
  {
    id: 4,
    text: "devzztech has helped my team and I stay on the same page. Previously, we were all over the board. Using devzztech has definitely saved us time and money.",
    secondText: "I highly recommend devzztech. It has been so important for us as we continue to grow our company.",
    author: "Haylie Rosser",
    position: "Marketing Manager, 10Pearls"
  },
];

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-[1290px] h-[800px] opacity-100 mx-auto relative">
      
      {/* Centered Heading with Blue Bar */}
      <div className="flex items-center justify-center gap-6 absolute top-[5px] left-1/2 transform -translate-x-1/2">
        {/* Blue Gradient Bar */}
        <div className="w-3 h-[62px] bg-linear-to-b from-[#1E61B8] to-[#7E939A] rounded-full"></div>
        
        {/* Heading */}
        <h2 className="font-gilroy-bold text-[43px] leading-[120%] text-white text-center">
          What they say about us?
        </h2>
      </div>

      {/* Centered Description Text  */}
      <div className="w-[593px] absolute top-[83px] left-1/2 transform -translate-x-1/2 opacity-100">
        <p className="w-full font-gilroy-regular text-[20px] leading-[150%] text-white text-center">
          Hear from our satisfied clients who trust us to deliver exceptional results. Their words inspire us to push boundaries and innovate every day.
        </p>
      </div>

      {/* Testimonials Carousel Section */}
      <div className="absolute top-[214px] left-0 w-full">
        
        {/* Carousel Container */}
        <div className="relative overflow-hidden mx-auto w-[1200px]">
          
          {/* Slides */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-full shrink-0 flex justify-center"
              >
                {/* Testimonial Card - Round Square Container */}
                <div className="w-[900px] min-h-[450px] bg-white rounded-2xl relative p-12 shadow-lg">
                  
                  {/* Inverted Comma - Left Top */}
                <div className="absolute top-8 left-8 text-[#0B2240]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                  </div>

      
{/* Testimonial Text - adjustment */}
<div className="w-full min-h-[239px] mt-8 pl-4 pr-4">
  <p className="font-gilroy-regular text-[30px] leading-[150%] text-black whitespace-pre-line wrap-break-word">
    {testimonial.text}
  </p>
  
  {/* Second part -text */}
  <p className="font-gilroy-regular text-[24px] leading-[150%] text-black mt-6">
    {testimonial.secondText}
  </p>
</div>

{/* Author Info -  aligned */}
<div className="mt-12 pl-4">
  {/* Author Name - Exact styling */}
  <div className="w-[155px] h-[38px]">
    <h4 className="font-bold text-[20px] leading-[150%] text-[#0B2240] text-center tracking-[0%]">
      {testimonial.author}
    </h4>
  </div>
  
  {/* Author Position */}
  <div className="w-[210px] h-6 mt-2">
    <p className="font-gilroy-regular text-[16px] leading-[150%] text-black text-center">
      {testimonial.position}
    </p>
  </div>
</div>
                  </div>
                </div> 
            ))}
          </div>

          {/* Navigation Arrows - Left and Right Side */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors border border-gray-300"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors border border-gray-300"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators/Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600' : 'bg-white'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default AboutUs;