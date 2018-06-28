import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import '../styles/AccountForms.css';
import { newContact } from '../../actions/contacts-actions';


export class SignupForm extends React.Component {
    _handleSubmit = (values, {bag, resetForm}) => {
       return this.props.dispatch(newContact(values))
           .catch(err => {
                bag.setSubmitting(false);
                this.setState({ error: true });
            });
    };

    render() {
        return (
            <div className="add-contact account-form-container">
                <Formik
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
                        isValid
                    }) => (
                            <div className="input-container">
                                <h3 className="contact-section-title">Add Contact</h3>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        className="single-input-contact-top"
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
                                        className="single-input-contact"
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
                                    <button className="submit-button blue push_button" disabled={!isValid}>Create</button>
                                </form>
                            </div>
                        )}
                />
            </div>
        );
    }
}

export default connect()(SignupForm);
