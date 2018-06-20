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
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="header-bar">
                <Link className="logo" to="/">CC</Link>
                <ul className="nav-items">
                    <li><Link className="nav-item" to="/concert-about">Concert About</Link></li>
                    <li><Link className="nav-item" to="/concerts">Concerts</Link></li>
                    <li><Link className="nav-item" to="/account">Account</Link></li>
                    <li><Link className="nav-item" to="/login">Login</Link></li>
                    <li><Link className="nav-item" to="/register">Signup</Link></li>
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
