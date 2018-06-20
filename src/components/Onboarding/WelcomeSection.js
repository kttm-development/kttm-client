import React from 'react';

import '../styles/OnboardingPage.css'

export default class WelcomeSection extends React.Component {
    render() {
        return (
            <div className="background-1">
                <section className="welcome-section" id="top">
                    <div className="row">
                        <div className="title-container col-12">
                            <h1 className="title">ConcertConnect</h1>
                            <h3 className="sub-title">Looking for shows to see?</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="buttons-container">
                            <button
                                className="login-button"
                                onClick={() => {
                                    this.props.history.push('/login')
                                }}
                            >Login</button>
                            <a href="#features" className="learn-more-button">Learn More</a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}