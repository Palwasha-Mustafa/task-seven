
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/banner.json'; // Adjust the path as necessary

const HeroBackground: React.FC = () => {



    const containerClasses = 'absolute top-0 left-0 w-full h-[400px] -z-10 pointer-events-none';

    // The style applied directly to the Lottie element ensures it fills the container
    const lottieStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
    };

    const options = {
        animationData: animationData,
        loop: true,
        autoplay: true,
    };

    return (
        <div className={containerClasses}>
            <Lottie
                animationData={options.animationData}
                loop={options.loop}
                autoplay={options.autoplay}
                style={lottieStyle}
            />
        </div>
    );
};

export default HeroBackground;