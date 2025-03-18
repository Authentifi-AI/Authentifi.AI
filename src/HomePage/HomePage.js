import React from "react";
import Hero from './Hero';
import Feature from './Feature';
import Footer from '../Public/Footer';
import Navbar from '../Public/Navbar';
import Register from "./Register";


function HomePage() {
    return <>
        <Navbar />
        <Hero />
        <Register></Register>
        <Feature />
        <Footer />
    </>
}

export default HomePage;