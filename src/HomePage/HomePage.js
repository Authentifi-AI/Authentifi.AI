import React from "react";
import Hero from './Hero';
import Feature from './Feature';
import Footer from '../Public/Footer';
import Navbar from '../Public/Navbar';

function HomePage() {
    return <>
        <Navbar />
        <Hero />
        <Feature />
        <Footer />
    </>
}

export default HomePage;