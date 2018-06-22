import React from 'react';
import { Formik } from 'formik';
// import * as Yup from 'yup';
import { connect } from 'react-redux';

import '../styles/AccountForms.css';
import { newContact } from '../../actions/contacts-actions';
// import { storeAuthInfo } from '../../actions/auth';
// import { AuthServices } from '../../services/api';

export class SignupForm extends React.Component {
    _handleSubmit = (values, bag) => {
        console.log(values)
       this.props.dispatch(newContact(values))
           .catch(err => {
                bag.setSubmitting(false);
                this.setState({ error: true });
            });
    };

    render() {
        return (
            <div className="form-container">
                <Formik
                    // validationSchema={Yup.object().shape({
                    //     password: Yup.string()
                    //         .min(6)
                    //         .required("Don't forget to enter a valid password"),
                    //     confirmPassword: Yup.string()
                    //         .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    //         .required("Don't forget to confirm your password"),
                    // })}
                    initialValues={{
                        name: '',
                        email: '',
                    }}
                    onSubmit={this._handleSubmit}
                    render={({
                        handleSubmit,
                        isSubmitting,
                        handleChange,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                    }) => (
                            <div className="input-container">
                                <h2>Add Contact</h2>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        className="single-input"
                                        onChange={handleChange}
                                        type="name"
                                        name="name"
                                        label="Name"
                                        placeholder="Name of Contact"
                                        onBlur={handleBlur}
                                    />
                                    {errors.password &&
                                        touched.password && (
                                            <div className="error-messages">{errors.password}</div>
                                        )}
                                    <input
                                        type="email"
                                        className="single-input"
                                        onChange={handleChange}
                                        name="email"
                                        label="Email"
                                        placeholder="Email for Contact"
                                        onBlur={handleBlur}
                                    />
                                    {errors.confirmPassword &&
                                        touched.confirmPassword && (
                                            <div className="error-messages">
                                                {errors.confirmPassword}
                                            </div>
                                        )}
                                    <button className="submit-button blue push_button" disabled={!isValid}>Submit</button>
                                </form>
                            </div>
                        )}
                />
            </div>
        );
    }
}

export default connect()(SignupForm);
