import React, { useEffect, useRef } from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';

function HeroSection() {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
            console.error("Error attempting to play", error);
        });
    };

    useEffect(() => {
        attemptPlay();
    }, []);
    return(
        <>
            <div className="hero-container">
                <h1>Discover new adventures</h1>
                <p>Join us today</p>
                <div className="hero-btns">
                    <Button
                        buttonStyle="btn--secondary"
                        buttonSize="btn--large"
                    >
                        GET STARTED
                    </Button>
                    <Button
                        buttonStyle="btn--secondary"
                        buttonSize="btn--large"
                    >
                        WATCH VIDEO <i className="far fa-play-circle" />
                    </Button>
                </div>
            </div>
        </>
    );
}

export default HeroSection;