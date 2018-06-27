import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import '../styles/OnboardingPage.css'

export class WelcomeSection extends React.Component {
    render() {
        let buttons=(
                <div className="buttons-container">
                    <Link className="nav-item" to="/login">
                        <button className="login-button">Login</button>
                    </Link>
                    <a href="#features" className="learn-more-button">Learn More</a>
                </div>
            )
        if(this.props.loggedIn){
            buttons=(
                <div className="buttons-container">
                    <Link className="nav-item" to="/account">
                        <button className="login-button">Contacts</button>
                    </Link>
                    <Link className="nav-item" to="/account">
                        <button className="login-button">Favorites</button>
                    </Link>
                    <Link className="nav-item" to="/concerts">
                        <button className="login-button">Concerts</button>
                    </Link>
                    <a href="#features" className="learn-more-button">Learn More</a>
                </div>
            )
        }

        let dialog='Looking for shows to see?'
        if(this.props.loggedIn){
            dialog='Update your friends, view your favorite concerts, or find a new show!'
        }

        return (
            <div className="background-1">
                    <section className="welcome-section" id='top'>
                        <div className="row">
                            <div className="title-container col-12">
                                <h1 className="title">ConcertConnect</h1>
                                <h3 className="sub-title">{dialog}</h3>
                            </div>
                        </div>
                        <div className="row">
                            {buttons}
                        </div>
                    </section>

            </div>
        );
    }
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(WelcomeSection);
