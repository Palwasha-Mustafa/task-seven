import { useState, useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/banner.json'; // Adjust path as needed


const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = [
        { img: "/web-icon.svg", label: "Web Development" },
        { img: "/graphic-icon.svg", label: "Graphic Design" },
        { img: "/app-icon.svg", label: "App Development" },
        { img: "/saas-icon.svg", label: "SaaS Development" },
        { img: "/uiux-icon.svg", label: "UI/UX Design" },
        { img: "/ai-icon.svg", label: "Artificial Intelligence" },
    ];

    return (
        <>
            <div className="absolute inset-0 z-0">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    style={{
                        width: 'full',
                        height: 'full',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0
                    }}
                />
            </div>

            <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white'
                : ''
                }`}>

                <div className={`sticky top-0 z-50 grid grid-cols-3 px-10 justify-between items-center py-2 transition-all duration-300 max-w-[1440px] mx-auto `}>
                    <div>
                        <img src={isScrolled ? '/dvz-logo-light.svg' : '/dvz-logo.svg'} alt="" className='w-[71px] h-[71px]' />
                    </div>
                    <div className="">
                        <ul className={`flex gap-15 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
                            }`}>
                            <li className="cursor-pointer hover:font-medium text-lg">Home</li>
                            <li className="cursor-pointer hover:font-medium text-lg">About</li>
                            <div className="relative inline-block" ref={dropdownRef}>
                                {/* button to toggle dropdown */}
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="cursor-pointer hover:font-medium focus:font-medium text-lg flex gap-2 items-center"
                                >
                                    <span>Services</span>
                                    <img src={isScrolled ? '/dark-dropdown.svg' : '/light-dropdown.svg'} alt="" />
                                </button>

                                {/* dropdown box */}
                                {open && (
                                    <div className="absolute left-0 mt-2 w-[560px] bg-white rounded-[10px] shadow-xl px-15 py-12  grid grid-cols-2 gap-4 border border-[#74747480] z-50">
                                        {items.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition"
                                            >
                                                {/* your image icons */}
                                                <img src={item.img} alt={item.label} className="w-6 h-6 object-contain" />
                                                <span className="text-gray-800 font-normal text-lg">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <li className="cursor-pointer hover:font-medium text-lg">Portfolio</li>
                        </ul>
                    </div>
                    <div className="flex gap-3 ml-auto">
                        <button className={`px-8 py-2 rounded-full border cursor-pointer transition-colors duration-300 ${isScrolled
                            ? 'border-black bg-white text-black'
                            : 'border-white bg-black text-white'
                            }`}>Login in</button>
                        <button className={`px-6 py-2 rounded-full cursor-pointer transition-colors duration-300 ${isScrolled
                            ? 'bg-black text-white'
                            : 'bg-white text-black'
                            }`}>Get in touch</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Nav