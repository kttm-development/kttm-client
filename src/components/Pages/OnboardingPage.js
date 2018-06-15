import React from 'react';
import { connect } from 'react-redux';

import '../styles/OnboardingPage.css'

export class OnboardingPage extends React.Component {
    render() {
        return (
            <div className="onboarding-page">

                {/* ===WELCOME SECTION=== */}

                <div className="background-1">
                    <section className="welcome-section" id="top">
                        <div className="row">
                            <div className="title-container col-12">
                                {/* <h1 className="title">KTTM</h1> */}
                                <h2 className="sub-title">Looking for shows to see?</h2>
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
                                <a href="#about" className="learn-more-button">Learn More</a>
                            </div>
                        </div>
                    </section>
                </div>

                {/* ===ABOUT SECTION=== */}

                <section className="about-section background-2" id="about">
                    <div className="text-container row">
                        <div className="about-left">
                            <h3>This app is made for anyone who loves live music. You can easily find concerts of all genres anywhere in the United States.</h3>
                        </div>
                        <div className="about-right">
                            <h3>To find concerts, just log in and fill out where you want to see a show and what kind of show you want, then let our app show you upcoming music.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="buttons-container">
                            <a href="#features" className="features-button">Features</a>
                        </div>
                    </div>

                </section>

                {/* ===FEATURES SECTION=== */}

                <section className="features-section background-3" id="features">
                    <div className="row">
                                    <div className="features-container"></div>
                        <div className="buttons-container">
                            <a href="#top" className="scroll-top-button">Scroll Top</a>
                        </div>
                    </div>

                </section>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(OnboardingPage);
