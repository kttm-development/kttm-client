import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

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
        let accountButton;
        let loginButton;
        let registerButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
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
                    {/* <div className="logo-hamburger"> */}
                        <Link className="logo" to="/">CC</Link>

                        <label htmlFor="toggle" className="hamburger">&#9776;</label>
                        <input type="checkbox" id="toggle" />
                    {/* </div> */}
                    <div className="menu">
                        <ul className="nav-items">
                            <li><Link className="nav-item" to="/concerts">Concerts</Link></li>
                            {accountButton}
                            {loginButton}
                            {registerButton}
                        </ul>
                        {!this.props.loggedIn ? <Redirect to='/' /> : ''}
                        {logOutButton}
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
