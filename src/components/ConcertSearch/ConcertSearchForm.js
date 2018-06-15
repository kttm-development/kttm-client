import React from 'react';
import { Formik } from 'formik';
// import * as Yup from 'yup';
import { connect } from 'react-redux';

import { fetchTicketmasterConcerts } from '../../actions/ticketmaster-actions';
// import SearchInput from '../../commons/SearchInput';
import GenreSelect from '../../commons/GenreSelect'
import '../styles/ConcertSearchForm.css';
import { fetchGenres } from '../../actions/genre-actions';
import LocationSelect from '../../commons/LocationSelect';
import { fetchLocations } from '../../actions/location-actions';

const SELECT_GENRE = [
    {
        name: 'genre',
    },
]

const SELECT_LOCATION = [
    {
        name: 'location',
    }
]

export class ConcertSearchForm extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchGenres())
        this.props.dispatch(fetchLocations())
    }

    state = {
        error: false,
    };

    _handleSubmit = (values, bag) => {
        this.props.dispatch(fetchTicketmasterConcerts(values.location, values.genre))
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
                    initialValues={{
                        location: '',
                        genre: 'Alternative',
                    }}
                    onSubmit={this._handleSubmit}
                    render={({
                        handleSubmit,
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
                                    {SELECT_GENRE.map(el => (
                                        <GenreSelect
                                            dispatch={this.props.dispatch}
                                            genres={this.props.genres}
                                            {...el}
                                            key={el.name}
                                            handleChange={setFieldValue}
                                            className="dropdown"
                                            error={errors[el.name]}
                                            touched={touched[el.name]}
                                        />
                                    ))}
                                    {SELECT_LOCATION.map(el => (
                                        <LocationSelect
                                            dispatch={this.props.dispatch}
                                            locations={this.props.locations}
                                            {...el}
                                            key={el.name}
                                            handleChange={setFieldValue}
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

const mapStateToProps = state => ({
    genres: state.genre.genres,
    locations: state.location.locations
});

export default connect(mapStateToProps)(ConcertSearchForm);

// export default connect()(ConcertSearchForm);