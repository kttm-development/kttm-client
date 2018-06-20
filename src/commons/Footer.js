import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../components/styles/Footer.css'

class Footer extends React.Component {
    render() {
        let accountButton;
        let loginButton;
        let registerButton;
        if (this.props.loggedIn) {
            accountButton = (
                <li><Link className="footer-item" to="/account">Account</Link></li>
            );
        } else {
            loginButton = (
                <li><Link className="footer-item" to="/login">Login</Link></li>
            );
            registerButton = (
                <li><Link className="footer-item" to="/register">Signup</Link></li>
            );
        }
        return (
            <div className="footer">
                <Link className="footer-logo" to="/">CC</Link>
                <ul className="footer-items">
                    <li><Link className="footer-item" to="/concerts">Concerts</Link></li>
                    {accountButton}
                    {loginButton}
                    {registerButton}
                </ul>
                <div className="authors">
                    <div className="authors-left">
                        <h3>Kevin Murphy</h3>
                        <h3>Trent Duncan</h3>
                    </div>
                    <div className="authors-right">
                        <h3>Tom Haborak</h3>
                        <h3>Megan Leonardo</h3>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Footer);