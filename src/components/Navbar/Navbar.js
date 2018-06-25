import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';

import DrawerToggleButton from './DrawerToggleButton';

import '../../components/styles/Navbar.css';
import { clearContacts } from '../../actions/contacts-actions';
import { clearFavorites } from '../../actions/favorite-actions';

export class Navbar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        this.props.dispatch(clearContacts());
        this.props.dispatch(clearFavorites());
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
                <button className="logout-button blue push_button" onClick={() => this.logOut()}>Log out</button>
            );
            accountButton = (
                <li><Link to="/account">Account</Link></li>
            );
        } else {
            loginButton = (
                <li><Link to="/login">Login</Link></li>
            );
            registerButton = (
                <li><Link to="/register">Signup</Link></li>
            );
        }

        return (
            <React.Fragment>
                <header className="navbar">
                    <nav className="navigation">
                        <div className="spacer-half"></div>
                        <div className="logo"><Link className="logo" to="/">CC</Link></div>
                        <div className="spacer"></div>
                        <div className="toggle-button">
                            <DrawerToggleButton />
                        </div>
                        <div className="spacer-half"></div>
                        <div className="navigation-items">
                            <ul>
                                <li><Link to="/concerts">Concerts</Link></li>
                                {accountButton}
                                {loginButton}
                                {registerButton}
                            </ul>
                            {!this.props.loggedIn ? <Redirect to='/' /> : ''}
                            {logOutButton}
                        </div>
                    </nav>
                </header>
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);
