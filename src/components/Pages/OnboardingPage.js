import React from 'react';
import { connect } from 'react-redux';

import '../styles/OnboardingPage.css'

export class OnboardingPage extends React.Component {
    render() {
        return (
            <div className="onboarding-page">

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps)(OnboardingPage);
