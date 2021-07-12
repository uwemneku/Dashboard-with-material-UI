import React from 'react'
import AboutUs from './components/Home/AboutUs.js';
import FeedBack from './components/Home/FeedBack.js';
import Footer from './components/Home/Footer.js';
import HeroSection from './components/Home/HeroSection.js';
import Pricing from './components/Home/Pricing.js';
import WhyUs from './components/Home/WhyUs.js';
import NavBar from './Navigation/NavBar';

const LoggedOutComponent = () => {
    
    return (
        <div>
            <NavBar />
            <HeroSection />
            <WhyUs />
            <AboutUs />
            <Pricing />
            <FeedBack />
            <Footer />
        </div>
    )
}

export default LoggedOutComponent;