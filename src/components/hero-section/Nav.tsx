import { useState, useEffect } from 'react';

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <>

            <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white'
                    : ''
                    }`}>

                <div className={`sticky top-0 z-50 grid grid-cols-3 px-10 justify-between items-center py-2 transition-all duration-300 container mx-auto `}>
                    <div>
                        <img src={isScrolled ? '/dvz-logo-light.jpg' : '/dvz-logo.svg'} alt="" className='w-[71px] h-[71px]' />
                    </div>
                    <div className="">
                        <ul className={`flex gap-15 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
                            }`}>
                            <li className="cursor-pointer hover:font-medium text-lg">Home</li>
                            <li className="cursor-pointer hover:font-medium text-lg">About</li>
                            <li className="cursor-pointer hover:font-medium text-lg flex gap-2 items-center "><span>Services</span> <img src="/dropdown.svg" alt="" /></li>
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