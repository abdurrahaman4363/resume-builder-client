import React from 'react';
import Banner from '../Home/Banner'
import Benefits from './Benefits';
import Contact from './Contact';
import About from './About';
import Faq from './Faq';
import Hired from './Hired';
import Review from './Review';
import Templates from './Templates';
import WhyUs from './WhyUs';







const Home = () => {



    return (

        < div className='m-5 dark:bg-gray-800 dark:text-white' >


            <Banner></Banner>
            <WhyUs></WhyUs>
            <Templates></Templates>
            <Benefits></Benefits>
            <Review></Review>
            <Hired></Hired>
            <Contact />

            <About />

            <Faq></Faq>

            {/* <About /> */}

        </div >
    );
};

export default Home;