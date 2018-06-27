import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { fetchTicketmasterConcerts, setPageNumber } from '../../actions/ticketmaster-actions';
import { fetchGenres } from '../../actions/genre-actions';
import { fetchLocations } from '../../actions/location-actions';

import '../styles/ConcertSearchForm.css';

export class ConcertSearchForm extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchGenres())
        this.props.dispatch(fetchLocations())
    }

    genres = this.props.genres;
    locations = this.props.locations;

    state = {
        selectedOptionGenre: '',
        selectedOptionLocation: '',
        error: false,
    };

    _handleSubmit = () => {
        this.props.dispatch(setPageNumber(0));
        this.props.dispatch(fetchTicketmasterConcerts(this.state.selectedOptionLocation.value, this.state.selectedOptionGenre.value, 0))
    };

    handleChangeGenre = (selectedOptionGenre) => {
        this.setState({ selectedOptionGenre });
    }

    handleChangeLocation = (selectedOptionLocation) => {
        this.setState({ selectedOptionLocation });
    }

    render() {
        const { selectedOptionGenre } = this.state;
        const { selectedOptionLocation } = this.state;
        const genreValue = selectedOptionGenre && selectedOptionGenre.value;
        const locationValue = selectedOptionLocation && selectedOptionLocation.value;

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
                    <h1 className='page-title'>Find Concerts</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this._handleSubmit();
                    }}>
                        <div className="genre">
                            <h4 className="form-label">Genre:</h4>
                            <Select
                                name="form-field-genre"
                                className="select-box"
                                value={genreValue}
                                onChange={this.handleChangeGenre}
                                options={this.genres.map(el => {
                                    return { value: el.genre, label: el.genre };
                                })}
                            />
                        </div>

                        <div className="location">
                            <h4 className="form-label">Location:</h4>
                            <Select
                                name="form-field-location"
                                className="select-box"
                                value={locationValue}
                                onChange={this.handleChangeLocation}
                                options={this.locations.map(el => {
                                    return { value: el.location, label: el.location };
                                })}
                            />
                        </div>

                        <button className="search-button blue push_button">Search</button>
                    </form>
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
