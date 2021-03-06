import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import Input from '../../commons/LoginInput';
import { login } from '../../actions/auth';
import { required, nonEmpty } from '../../validators';

import '../styles/loginSignup.css'

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h1 className="page-title">Login</h1>
                {error}
                <label htmlFor="username" className="fields-and-labels">Username</label>
                <Field
                    placeholderText='hello'
                    className="fields-and-labels"
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password" className="fields-and-labels">Password</label>
                <Field
                    className="fields-and-labels"
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button className="login-form-button blue push_button" disabled={this.props.pristine || this.props.submitting}>
                    Login
                </button>
                <span className="login-signup-span">Need an account?   <Link to="/register" className="register-link">Signup</Link></span>
                <div className="demo-account">
                  {/* <span>Demo Account</span> */}
                  <span>Username: demouser</span>
                  <span>Password: password123</span>
                </div>
                
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
