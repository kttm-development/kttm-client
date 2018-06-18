import React from 'react';
import { connect } from 'react-redux';
import { RiseLoader } from 'react-spinners';

import '../styles/ConcertAbout.css'
export class ConcertAboutPage extends React.Component {
    componentDidMount() {
        // console.log(this.props.currentConcert)
    }
    render() {

        let airBNBCity= this.props.city.replace(' ', '-')

        let airBNBLink=`https://www.airbnb.com/s/${airBNBCity}--${this.props.state}--United-States/homes?refinement_paths%5B%5D=%2Fhomes&checkin=${this.props.date}`


        if (this.props.loading === true) {
            return (
                <div className="loading-wrapper">
                    <RiseLoader />
                </div>
            );
        }

        if (this.props.error) {
            return (
                <div>
                    <h2>OOPS!</h2>
                    <h3>Something Went Wrong:</h3>
                    <h3><em> {this.props.error}</em></h3>
                    <h4><strong>Please try searching again</strong></h4>
                </div>
            );
        }

        return (
            <div className="concert-about-page">
                <h1 className="concert-title">[Concert Title]</h1>
                <div className="concert-about row">
                    <div className="row">
                        <div className="concert-info-left col-4">
                            <h3>Concert details</h3>
                            <span>Placeholder text</span>
                        </div>
                        <div className="concert-info-right col-4">
                            <h3>Concert details</h3>
                            <span>Placeholder text</span>
                        </div>
                        <div className="concert-image col-4">
                            <h1>Placeholder for concert image</h1>
                        </div>
                    </div>
                    <div className="buttons-container row">
                        <div className="col-6">
                            <button className="tickets-button">Buy Tickets</button>
                        </div>
                        <div className="col-6">
                            <a href={airBNBLink} target="_blank"><button className="hotels-button">Find Hotels</button></a>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => ({
    concerts: state.ticketmaster.concerts,
    loading: state.ticketmaster.concerts,
    error: state.ticketmaster.error,
    empty: state.ticketmaster.empty,
    city: state.ticketmaster.currentConcert.city,
    state: state.ticketmaster.currentConcert.state,
    date: state.ticketmaster.currentConcert.date,
    currentConcert: state.ticketmaster.currentConcert
});

export default connect(mapStateToProps)(ConcertAboutPage);