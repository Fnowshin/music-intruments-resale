import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../assets/images/pageNotFound.png'
import Header from './Header';

const PageNotFound = (props) => {
    return (
        <>
        <Header></Header>

        <section className='lg:mx-8'>
            <div className="hero h-[700px] justify-center items-center" style={{ backgroundImage: `url(${notfound})` }}>
        </div>
        </section>
        </>
    );
};

export default PageNotFound;