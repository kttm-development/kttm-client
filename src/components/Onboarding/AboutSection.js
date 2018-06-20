import React from 'react';

import '../styles/OnboardingPage.css'

export default class AboutSection extends React.Component {
    render() {
        return (
            <section className="about-section background-3" id="about">
                <h2 className="title">About</h2>
                <div className="text-container row">
                    <div className="about-left col-6">
                        <h3 className="about-text">This app is made for anyone who loves live music to find upcoming concerts of all genres anywhere in the United States.</h3>
                    </div>
                    <div className="about-right col-6">
                        <h3 className="about-text">To find concerts, just log in and fill out where you want to see a show and what kind of show you want, then let our app show you upcoming music.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="buttons-container">
                        <a href="#top" className="scroll-top-button">Scroll Top</a>
                    </div>
                </div>
            </section>
        );
    }
}