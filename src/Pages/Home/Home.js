import React from 'react';
import AboutUs from './Components/AboutUs';
import Advertisement from './Components/Advertisement';
import Banner from './Components/Banner';
import Categories from './Components/Categories/Categories';


const Home = (props) => {
    return (
        <div className='lg:m-20 md:m-8'>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <Categories></Categories>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;