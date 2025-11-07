import React from 'react';

interface GliderItem {
    id: number;
    text: string;
}

const GLIDER_CONTENT: GliderItem[] = [
    { id: 1, text: 'WEBSITE DEVELOPMENT' },
    { id: 2, text: 'APP DEVELOPMENT' },
    { id: 3, text: 'CLOUD COMPUTING' },
    { id: 4, text: 'UI/UX DESIGN' },
];

const INFINITE_CONTENT = [...GLIDER_CONTENT, ...GLIDER_CONTENT, ...GLIDER_CONTENT, ...GLIDER_CONTENT];

export const GlidSlider: React.FC = () => {
    return (
        <div className="w-full bg-black py-9 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-black z-10 pointer-events-none"></div>

            <div className="flex gap-40 w-max animate-glider group-hover:animation-pause">
                {INFINITE_CONTENT.map((item, index) => (
                    <div
                        key={index}
                        className="flex shrink-0 px-8 text-[20px] font-bold leading-[127%] text-white tracking-widest"
                    >
                        <span className="mr-4">
                            <img src="/slider-style.svg" alt="" />
                        </span>
                        <span>
                            {item.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};