import React from 'react';
import aboutbg from '../../assets/images/aboutbg.png'

const AboutUs = (props) => {
    return (
        
        <div className='mt-10 bg-gradient-to-r from-primary to-secondary max-w-full'>
            <h1 className='pt-10 text-4xl font-semibold'> What Is MusEnts?</h1>
            <p className='text-2xl'>Know About Our Market </p>
                
                <div className='mt-10 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                    <div>
                        <div className="card-body items-center text-left">
                            <h2 className="card-title text-2xl font-bold">A community doing good</h2>
                            <p>Etsy is a global online marketplace, where people come together to make, sell, buy and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet.</p>

                        </div>
                    </div>
                    <div>
                        <div className="card-body items-center text-left">
                            <h2 className="card-title text-2xl font-bold">Support independent creators</h2>
                            <p>There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>

                        </div>
                    </div>
                    <div>
                        <div className="card-body items-center text-left">
                            <h2 className="card-title text-2xl font-bold">Peace of mind</h2>
                            <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>

                        </div>
                    </div>

                </div>
                <h1 className=' text-2xl font-semibold'> Have a question? Well, we’ve got some answers.</h1>
                <button className="mt-6 mb-20 btn btn-outline rounded-full"> Go To Help Centr </button>
            
        </div>
    );
};

export default AboutUs;