import React from 'react'
import AboutUs from './components/Home/AboutUs.js';
import HeroSection from './components/Home/HeroSection.js';
import WhyUs from './components/Home/WhyUs.js';
import NavBar from './Navigation/NavBar';

const LoggedOutComponent = () => {
    
    return (
        <div>
            <NavBar />
            <HeroSection />
            <WhyUs />
            <AboutUs />
        </div>
    )
}

export default LoggedOutComponent;