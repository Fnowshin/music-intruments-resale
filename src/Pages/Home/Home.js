import React from 'react';
import AboutUs from './Components/AboutUs';
import Banner from './Components/Banner';
import Categories from './Components/Categories/Categories';


const Home = (props) => {
    return (
        <div className='lg:m-12 md:m-10'>
            <Banner></Banner>
            <Categories></Categories>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;