import React from 'react';

import RegistrationForm from './registration-form';

export default function RegistrationPage(props) {
    return (
        <div className="home">
            <h2>Welcome to Foo App</h2>
            <RegistrationForm />
            <a href="/">Already Have An Account?</a>
        </div>
    );
}
