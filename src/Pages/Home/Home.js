import React from 'react';
import AboutUs from './Components/AboutUs';
import Advertisement from './Components/Advertisement';
import Banner from './Components/Banner';
import Category from './Components/Category';

const Home = (props) => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <Category></Category>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;