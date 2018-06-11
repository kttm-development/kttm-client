import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom';
import {registerUser, setCredentials, setLoggedIn, setUser} from '../actions';
import Input from './input';
import {required, nonEmpty, matches} from '../validators'

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props.dispatch(registerUser(user)).then(user => {
            this.props.dispatch(setCredentials(username, password));
        });
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }
        return (
            <form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <label htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" />
                <label htmlFor="username">Username</label>
                <Field component={Input} type="text" name="username"
                    validate={[required, nonEmpty]}/>
                <label htmlFor="password">Password</label>
                <Field component={Input} type="password" name="password"
                    validate={[required, nonEmpty]} />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field component={Input} type="password" name="passwordConfirm"
                    validate={[required, nonEmpty, matches('password')]} />
                <button>Register</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.currentUser.loggedIn
});

export default compose(
    connect(mapStateToProps),
    reduxForm({
        form: 'registration'
    })
)(RegistrationForm);
