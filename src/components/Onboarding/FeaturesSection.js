import React from 'react';

import '../styles/OnboardingPage.css'

export default class FeaturesSection extends React.Component {
    render() {
        return (
            <section className="features-section background-2" id="features">
                <h2 className="title">Features</h2>
                <div className="features-container row">
                    <div className="features-list">
                        <div className="feature-one col-4">
                            <div className="feature-image">
                                <i className="feature-icon fas fa-music fa-6x"></i>
                                <h3 className="feature-text">Find new artists to see</h3>
                            </div>
                        </div>
                        <div className="feature-two col-4">
                            <div className="feature-image">
                                <i className="feature-icon fas fa-map-marker-alt fa-6x"></i>
                                <h3 className="feature-text">Map out upcoming shows</h3>
                            </div>
                        </div>
                        <div className="feature-three col-4">
                            <div className="feature-image">
                                <i className="feature-icon fas fa-user-friends fa-6x"></i>
                                <h3 className="feature-text">Let your friends know</h3>
                            </div>
                        </div>
                    </div>
                    <div className="buttons-container row">
                        <a href="#about" className="about-button">About</a>
                    </div>
                </div>
            </section>
        );
    }
}