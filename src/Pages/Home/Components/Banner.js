import React from 'react';
import banner from '../../assets/images/banner.png';
import backgroundimg from '../../assets/images/bg.jpg';

const Banner = (props) => {
    return (
        <div className='max-w-full'>
        <div className="hero min-h-[540px]" style={{backgroundImage: `url(${backgroundimg})`}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div>
                    <h2 className="text-5xl font-bold">Instruments In Your Budget </h2>
                    <p className="py-6"></p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;