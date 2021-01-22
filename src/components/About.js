import React from 'react';
import '../App.css';

function About() {
    return (
        <div className='about'>
            <h1 className='about-title'>Face Detection</h1>
            <p className='about-text'>Return probability scores on the likelihood that the image contains
                 human faces and coordinate locations of where those faces appear with a bounding box. 
                 This model is great for anyone building an app that monitors or detects human activity.</p>
            <p className='about-test'>Test login: <span className='about-span'>demo@gmail.com</span></p>
            <p className='about-test'>Test password: <span className='about-span'>demo</span></p>
            {/* <button className='about-btn'>Try it now</button> */}
        </div>
    );
}

export default About;