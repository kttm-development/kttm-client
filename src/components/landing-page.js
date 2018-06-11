import React from 'react';

import LoginForm from './login-form';

export default function LandingPage(props) {
    return (
        <div className="home">
            <h2>Welcome to Foo App</h2>
            <LoginForm />
            <a href="/register">Register</a>
        </div>
    );
}
