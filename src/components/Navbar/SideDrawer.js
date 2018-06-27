import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';

import '../styles/SideDrawer.css';

export class SideDrawer extends React.Component {
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
                <li><a className="logout-button-mobile blue push_button" onClick={() => this.logOut()}>Log out</a></li>
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

        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }

        return (
            <nav className={drawerClasses}>
                <ul className="mobile-navigation-items">
                    <li><Link to="/concerts">Concerts</Link></li>
                    {accountButton}
                    {loginButton}
                    {registerButton}
                    {logOutButton}
                </ul>
                {!this.props.loggedIn ? <Redirect to='/' /> : ''}
                
            </nav>
        )
    }
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SideDrawer);