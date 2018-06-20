import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import '../components/styles/HeaderBar.css'

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        let concertsButton;
        let accountButton;
        let loginButton;
        let registerButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <a href="/"><button onClick={() => this.logOut()}>Log out</button></a>
            );
            accountButton = (
                <li><Link className="nav-item" to="/account">Account</Link></li>
            );
        } else {
            loginButton = (
                <li><Link className="nav-item" to="/login">Login</Link></li>
            );
            registerButton = (
                <li><Link className="nav-item" to="/register">Signup</Link></li>
            );
        }
        return (
            <div className="header-bar">
                <Link className="logo" to="/">KTTM</Link>
                <ul className="nav-items">
                    <li><Link className="nav-item" to="/concerts">Concerts</Link></li>
                    {accountButton}
                    {loginButton}
                    {registerButton}
                </ul>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
