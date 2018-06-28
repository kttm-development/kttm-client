import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from '../Login/LoginForm';

export function LoginPage(props) {
    // If we are logged in redirect straight to the concert search page
    if (props.loggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div className="home">
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
