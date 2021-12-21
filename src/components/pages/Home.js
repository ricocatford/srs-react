import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../HeroSection';
import HeroSection from '../HeroSection';
import UserCards from '../UserCards';

export default function Home() {
    return(
        <>
            <HeroSection />
            <UserCards />
            <Footer />
        </>
    );
}