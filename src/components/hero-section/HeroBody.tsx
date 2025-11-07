
const HeroBody = () => {
    return (
        <>
            <div className="grid grid-cols-2 pl-10 container mx-auto">
                <div className="pt-32 space-y-9">
                    <div>
                        <h1 className="text-[78px] text-white font-normal leading[127%]">Creating Beyond
                            Boundaries with
                        </h1>
                        <h1 className="text-7xl font-black  -tight">
                            <span className="bg-linear-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent">
                                INNOVATION
                            </span>
                        </h1>
                    </div>
                    <div>
                        <p className="text-white leading[150%] text-[20px] font-normal">Empowering businesses with innovative solutions that
                            redefine possibilities and drive digital transformation.
                        </p>
                    </div>
                    <div className=" flex space-x-6">
                        <button className="flex gap-3.5 px-6 py-3 rounded-full text-[20px] bg-white text-black cursor-pointer"><span>Let's talk</span> <img src="/right-arrow.svg" alt="" /></button>
                        <button className="px-[18px] text-lg py-3 rounded-full border border-[#E9EFF8] bg-black text-[#E9EFF8] cursor-pointer">View Portfolio</button>
                    </div>
                </div>
                <div>
                    <img src="/donut.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default HeroBody
