import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { fetchTicketmasterConcerts, setSearchResults, setPageNumber } from '../../actions/ticketmaster-actions';
import { fetchGenres } from '../../actions/genre-actions';
import { fetchLocations } from '../../actions/location-actions';

import GenreSelect from '../../commons/GenreSelect'
import LocationSelect from '../../commons/LocationSelect';
import DMASelect from './DMASelect';

import '../styles/ConcertSearchForm.css';

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
        this.props.dispatch(setSearchResults({ location: values.location, genre: values.genre }))
        this.props.dispatch(setPageNumber(0));
        this.props.dispatch(fetchTicketmasterConcerts(values.location, values.genre, 0))
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
            <div className="col-4">
                <div className="form-container">
                    <Formik
                        initialValues={{
                            location: 'Abilene - Sweetwater',
                            genre: 'Alternative',
                        }}
                        onSubmit={this._handleSubmit}
                        render={({
                            handleSubmit,
                            handleChange,
                            setFieldValue,
                            errors,
                            touched,
                            isValid,
                        }) => (
                                <div className="input">
                                    <h1 className='page-title'>Find Concerts</h1>
                                    <form className="form" onSubmit={handleSubmit}>
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
                                        <DMASelect />
                                        <button className="search-button blue push_button">Search</button>
                                    </form>
                                </div>
                            )}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    genres: state.genre.genres,
    locations: state.location.locations
});

export default connect(mapStateToProps)(ConcertSearchForm);
