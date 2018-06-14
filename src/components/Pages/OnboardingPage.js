import React from 'react';
import { connect } from 'react-redux';

import '../styles/OnboardingPage.css'

export class OnboardingPage extends React.Component {
    render() {
        return (
            <div className="onboarding-page">
                <div className="background-1">
                    <div className="welcome-section">
                        <div className="row">
                            <div className="title-container col-12">
                                <h1 className="title">KTTM</h1>
                                <h2 className="sub-title">Looking for shows to see?</h2>
                            </div>
                        </div>
                        <div className="row">

                            <div className="buttons-container col-12">
                                <button
                                    className="login-button col-6"
                                    onClick={() => {
                                        this.props.history.push('/login')
                                    }}
                                >Login</button>
                                <button
                                    className="learn-more-button col-6"
                                    onClick={() => {
                                        this.props.history.push('#about')
                                    }}
                                >Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-section" id="about">
                    <h1>Hello World!</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(OnboardingPage);
