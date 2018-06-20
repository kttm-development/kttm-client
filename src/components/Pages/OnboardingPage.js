import React from 'react';
import { connect } from 'react-redux';

import AboutSection from '../Onboarding/AboutSection';
import FeaturesSection from '../Onboarding/FeaturesSection';
import WelcomeSection from '../Onboarding/WelcomeSection';

import '../styles/OnboardingPage.css'

export class OnboardingPage extends React.Component {
    render() {
        return (
            <div className="onboarding-page">
                <WelcomeSection />
                <FeaturesSection />
                <AboutSection />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(OnboardingPage);
