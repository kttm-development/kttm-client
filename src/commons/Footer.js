import React from 'react';
import { Link } from 'react-router-dom';

import '../components/styles/Footer.css'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Link className="footer-logo" to="/">KTTM</Link>
                <ul className="footer-items">
                    <li><Link className="footer-item" to="/concerts">Concerts</Link></li>
                    <li><Link className="footer-item" to="/account">Account</Link></li>
                    <li><Link className="footer-item" to="/">Login</Link></li>
                    <li><Link className="footer-item" to="/register">Signup</Link></li>
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