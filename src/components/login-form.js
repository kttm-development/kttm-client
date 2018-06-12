import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom';
import Input from './input';
import {setCredentials, fetchCurrentUser, setLoggedIn} from '../actions/user-actions';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        this.props.dispatch(setCredentials(values.username, values.password));
        return this.props.dispatch(fetchCurrentUser()).then(() =>
            this.props.dispatch(setLoggedIn(true))
        );
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to='/dashboard' />
        }
        let error;
        if (this.props.error) {
            error = <div className="form-error">{this.props.error}</div>;
        }
        return (
            <form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                {error}
                <label htmlFor="username">Username</label>
                <Field component={Input} type="text" name="username" id="username"
                    validate={[required, nonEmpty]}/>
                <label htmlFor="password">Password</label>
                <Field component={Input} type="password" name="password" id="password"
                    validate={[required, nonEmpty]} />
                <button>Log in</button>
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
        form: 'login'
    })
)(LoginForm);
