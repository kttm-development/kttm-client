import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import { registerUser } from '../../actions/users';
import { login } from '../../actions/auth';
import LoginInput from '../../commons/LoginInput';
import { required, nonEmpty, matches, length, isTrimmed } from '../../validators';

import '../styles/loginSignup.css'

const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const { username, password, firstName, lastName } = values;
        const user = { username, password, firstName, lastName };
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="signup-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h1 className="page-title">Signup</h1>
                <label className="fields-and-labels" htmlFor="firstName">First name</label>
                <Field className="fields-and-labels" component={LoginInput} type="text" name="firstName" />
                <label className="fields-and-labels" htmlFor="lastName">Last name</label>
                <Field className="fields-and-labels" component={LoginInput} type="text" name="lastName" />
                <label className="fields-and-labels" htmlFor="username">Username</label>
                <Field
                    className="fields-and-labels"
                    component={LoginInput}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label className="fields-and-labels" htmlFor="password">Password</label>
                <Field
                    className="fields-and-labels"
                    component={LoginInput}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label className="fields-and-labels" htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    className="fields-and-labels"
                    component={LoginInput}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button className="signup-form-button blue push_button" type="submit" disabled={this.props.pristine || this.props.submitting}>Register</button>
                <span className="login-signup-span">Already have an account?   <Link to="/login" className="register-link">Login</Link></span>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
