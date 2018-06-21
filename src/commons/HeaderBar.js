import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

import '../components/styles/HeaderBar.css'

// export for tests
export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        let accountButton;
        let loginButton;
        let registerButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <li><Link className="nav-item" onClick={() => this.logOut()} to="/">Log Out</Link></li>
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
            <React.Fragment>
                <div className="header-bar">

                    <div className="logo">
                        <Link className="logo" to="/">CC</Link>
                    </div>

                    <label htmlFor="toggle" className="hamburger">&#9776;</label>
                    <input type="checkbox" id="toggle" />

                    <div className="menu">
                        <ul className="nav-items">
                            <li><Link className="nav-item" to="/concerts">Search for Concerts</Link></li>
                            {accountButton}
                            {loginButton}
                            {registerButton}
                            {!this.props.loggedIn ? <Redirect to='/' /> : ''}
                            {logOutButton}
                        </ul>
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

// default export
export default connect(mapStateToProps)(HeaderBar);
