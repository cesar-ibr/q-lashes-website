import React, { useState, useEffect } from 'react';
import './header.scss';
import video from '~/../assets/video/eye-close-up.mp4';
import videoPoster from '~/../assets/img/eye-close-up.jpg';

const words = ['Professional', 'Elegant', 'Glamorous', 'Fancy', 'Unique'];
const SECONDS = 1 * 1000;

export const Header = () => {
    let i = 0;
    let [fadeIn, setFadeIn] = useState(true);
    const [word, setWord] = useState(words[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Toggle fadeIn/fadeOut css classes
            fadeIn = !fadeIn;
            setFadeIn(fadeIn);
            if (!fadeIn) return;

            i = (i + 1) === words.length ? 0 : (i + 1);
            setWord(words[i]);
        }, SECONDS);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="video-header">
            <div className="video-overlay elegant">
                <p className={ fadeIn ? 'fadeIn' : 'fadeOut' }>{word}</p>
            </div>
            <video autoPlay loop poster={videoPoster} muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};
