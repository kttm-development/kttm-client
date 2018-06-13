import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { fetchTicketmasterConcerts } from '../actions/ticketmaster-actions';
import Input from '../commons/Input';
import Select from '../commons/Select'
import './styles/ConcertSearchForm.css';
import { fetchGenres } from '../actions/genre-actions';

const FORMS = [
    {
        name: 'zipcode',
        placeholder: 'Your Zipcode',
    },
    {
        name: 'radius',
        placeholder: 'Radius',
    },
];

const SELECT = [
    {
        name: 'genre',
    }
]

export class ConcertSearchForm extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchGenres())
    }
    
    state = {
        error: false,
    };

    _handleSubmit = (values, bag) => {
        console.log(values)
        this.props.dispatch(fetchTicketmasterConcerts(values))
            .catch(err => {
                bag.setSubmitting(false);
                this.setState({ error: true });
            });
    };

    render() {

        if (this.state.error) {
            return (
                <div>
                    <h1>Something went wrong</h1>
                </div>
            );
        }

        return (
            <div className="form-container">
                <Formik
                    validationSchema={Yup.object().shape({
                        zipcode: Yup.string()
                            .min(5)
                            .max(5)
                            .required('Zipcode is required'),
                        radius: Yup.string()
                            .required("Radius is required"),
                    })}
                    initialValues={{
                        zipcode: '',
                        radius: '',
                        genre: '',
                    }}
                    onSubmit={this._handleSubmit}
                    render={({
                        handleSubmit,
                        isSubmitting,
                        handleChange,
                        setFieldValue,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                    }) => (
                            <div className="input-container">
                                <h1 className='post-form-title'>Find Concerts</h1>
                                <form onSubmit={handleSubmit}>
                                    {FORMS.map(el => (
                                        <Input
                                            {...el}
                                            key={el.name}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            className="single-input"
                                            error={errors[el.name]}
                                            touched={touched[el.name]}
                                        />
                                    ))}
                                    {SELECT.map(el => (
                                        <Select
                                            {...el}
                                            handleChange={setFieldValue}
                                            handleBlur={handleBlur}
                                            className="dropdown"
                                            error={errors[el.name]}
                                            touched={touched[el.name]}
                                        />
                                    ))}
                                    <button className="submit" disabled={!isValid}>Search</button>
                                </form>
                            </div>
                        )}
                />
            </div>
        );
    }
}

export default connect()(ConcertSearchForm);