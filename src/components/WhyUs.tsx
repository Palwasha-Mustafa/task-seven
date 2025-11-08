import React from 'react';

const WhyUs: React.FC = () => {
    const features = "Trusted by startups and enterprises alike, we’ve delivered successful projects across fintech, healthtech, e-commerce, and more."

    const stats = [
        { value: "100+", label: "Satisfied Clients" },
        { value: "10+", label: "Years of Experience" },
        { value: "40+", label: "Brand Partners" },
        { value: "100+", label: "Projects We've Delivered" }
    ];

    return (

        <>

            <div className="pt-12 pb-20 bg-[#15141d]">
                <div className="max-w-[1440px] mx-auto px-10">
                    <h2 className="text-[42px] font-semibold text-[#FFFFFF] leading-12 pb-[21px] flex items-center gap-[23px]">
                        <span
                            className="inline-block w-3 h-[62px]"
                            style={{ background: 'linear-gradient(rgb(30, 97, 184) 0%, rgb(126, 147, 154) 100%)' }}
                        />
                        <span>Why Choose Us?</span>
                    </h2>

                    <div className="flex justify-center items-center w-[520px] h-[513px] rounded-full border-3 border-[#74747480] border-dashed mx-auto mt-[21px] relative">
                        <div className="flex backdrop-blur-[100px] bg-[#2a2932] w-[61px] h-[61px] rounded-full justify-center items-center absolute -top-7 left-1/2 -translate-x-1/2">
                            <img src="/position-t.svg" alt="" />
                        </div>
                        <div className="flex backdrop-blur-[100px] bg-[#2a2932] w-[61px] h-[61px] rounded-full justify-center items-center absolute top-1/2 -left-8 -translate-y-1/2">
                            <img src="/position-l.svg" alt="" />
                        </div>
                        <div className="flex backdrop-blur-[100px] bg-[#2a2932] w-[61px] h-[61px] rounded-full justify-center items-center absolute top-[190px] -right-6 -translate-y-1/2">
                            <img src="/position-r.svg" alt="" />
                        </div>
                        <div className="flex backdrop-blur-[100px] bg-[#2a2932] w-[61px] h-[61px] rounded-full justify-center items-center absolute -bottom-9 left-[120px] -translate-y-1/2">
                            <img src="/position-bl.svg" alt="" />
                        </div>
                        <div className="flex backdrop-blur-[100px] bg-[#2a2932] w-[61px] h-[61px] rounded-full justify-center items-center absolute -bottom-[22px] right-[82px] -translate-y-1/2">
                            <img src="/position-br.svg" alt="" />
                        </div>

                        {/* Inner Circle */}
                        <div className="w-[333px] h-[333px] rounded-full border-3 border-[#74747480] border-dashed overflow-hidden mx-auto ">

                            <div className="w-[170px] h-[180px] rounded-full bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center" style={{
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(0, 0, 0, 0.3)'
                            }}>
                                <h3 className="text-[32px] font-bold text-[#FFFFFF] leading-[100%] tracking-[0%] text-center">
                                    80%
                                </h3>
                                <p className="text-[13px] font-normal text-[#FFFFFF] leading-[150%] tracking-[0%] text-center pt-0.5">
                                    Tech Stack Optimized
                                </p>
                            </div>
                        </div>

                        {/* Feature Cards */}
                        <div className="w-[399px] border border-[#747474] rounded-[10px] py-[19px] px-[9px] absolute top-[88px] -left-[232px] -translate-y-1/2 flex gap-3 items-start">
                            <img src="/why-tick.svg" alt="why choose us" className="w-5" />
                            <p className="text-[16px] text-[#E9EFF8] leading-[150%] font-medium">
                                {features}
                            </p>
                        </div>
                        <div className="w-[399px] border border-[#747474] rounded-[10px] py-[19px] px-[9px] absolute top-8 -right-[222px] -translate-y-1/2 flex gap-3 items-start">
                            <img src="/why-tick.svg" alt="why choose us" className="w-5" />
                            <p className="text-[16px] text-[#E9EFF8] leading-[150%] font-medium">
                                {features}
                            </p>
                        </div>
                        <div className="w-[399px] border border-[#747474] rounded-[10px] py-[19px] px-[9px] absolute -bottom-2.5 -left-[315px] -translate-y-1/2 flex gap-3 items-start">
                            <img src="/why-tick.svg" alt="why choose us" className="w-5" />
                            <p className="text-[16px] text-[#E9EFF8] leading-[150%] font-medium">
                                {features}
                            </p>
                        </div>
                        <div className="w-[399px] border border-[#747474] rounded-[10px] py-[19px] px-[9px] absolute bottom-[70px] -right-[290px] -translate-y-1/2 flex gap-3 items-start">
                            <img src="/why-tick.svg" alt="why choose us" className="w-5" />
                            <p className="text-[16px] text-[#E9EFF8] leading-[150%] font-medium">
                                {features}
                            </p>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="bg-[#17161F] border border-[#747474] rounded-[10px] py-8 px-[60px] mt-[87px] flex flex-wrap items-center justify-between">
                        {stats.map((stat, index) => (
                            <React.Fragment key={index}>
                                <div className="text-center px-4">
                                    <h2 className="text-[40px] font-black text-white leading-[141%] pb-2">
                                        {stat.value}
                                    </h2>
                                    <p className="text-[18px] font-normal text-white leading-[141%]">
                                        {stat.label}
                                    </p>
                                </div>
                                {index < stats.length - 1 && (
                                    <svg height="104" width="1" aria-hidden="true">
                                        <line x1="0" y1="0" x2="0" y2="104" stroke="#747474" strokeWidth="4" strokeDasharray="5, 6" />
                                    </svg>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};

export default WhyUs;