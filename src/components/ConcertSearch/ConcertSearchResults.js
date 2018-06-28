import React from 'react';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import googleMap from '../../images/googlemaps.jpg'

import ConcertSearchItem from './ConcertSearchItem';
import ConcertSearchMap from './ConcertSearchMap';
import { GOOGLE_MAPS_URL } from '../../config';
import { fetchTicketmasterConcerts, setPageNumber } from '../../actions/ticketmaster-actions';

import '../styles/ConcertSearchResults.css';

export class ConcertSearchResults extends React.Component {

  onNextClick(props) {
    const { location, genre } = props.currentSearchResults;
    const page = props.currentPage + 1;
    props.dispatch(fetchTicketmasterConcerts(location, genre, page));
    props.dispatch(setPageNumber(page));
  }

  onPrevClick(props) {
    const { location, genre } = props.currentSearchResults;
    const page = props.currentPage - 1;
    props.dispatch(fetchTicketmasterConcerts(location, genre, page));
    props.dispatch(setPageNumber(page));
  }

  render() {

    if (this.props.loading === true) {
      return (
        <div className='sweet-loading'>
          <PulseLoader
            color={'#48a6f5'}
            loading={this.props.loading}
          />
        </div>
      )
    };

    if (this.props.error) {
      return (
        <div className="results-info col-8">
          <img alt="google map" className="google-map-img" src={googleMap}></img>
          <h2><em> {this.props.error}.</em></h2>
          <h3><strong>Please try searching again</strong></h3>
        </div>
      );
    }

    if (this.props.empty === true) {
      return (
        <div className="col-8">
          <img alt="google map" className="google-map-img" src={googleMap}></img>
          <h3 className="results-info">Search for concerts near you to display shows...</h3>
        </div>)
    }


    else {
      return (
        <section className="section-container col-8">
          <div className="map">
            <ConcertSearchMap
              isMarkerShown
              mapCenter={this.props.mapCenter}
              concerts={this.props.concerts}
              markers={this.props.markers}
              dispatch={this.props.dispatch}
              googleMapURL={GOOGLE_MAPS_URL}
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '350px' }} />}
              mapElement={<div style={{ height: '100%' }} />} />
          </div>
          <h1 className="search-results-title" id="concert-results-title">Concerts</h1>
          {this.props.concerts.map(obj => (
            <ConcertSearchItem
              {...obj}
              dispatch={this.props.dispatch}
              props={this.props}
              key={String(obj.id)}
            />
          ))}
          <div className="pagination">
            {this.props.currentPage === 0 ? '' : <a href='#concert-results-title'><a onClick={() => this.onPrevClick(this.props)} className="previous-button blue push_button"><i className="fas fa-arrow-left"></i> Previous</a></a>}
            <h3 className="page-number">Page {this.props.currentPage + 1}</h3>
            {this.props.isLastPage ? '' : <a href='#concert-results-title'><a onClick={() => this.onNextClick(this.props)} className="next-button blue push_button">Next <i className="fas fa-arrow-right"></i></a></a>}
          </div>
          <ToastContainer position="bottom-left" hideProgressBar />
        </section>
      );
    }


  }
}

const mapStateToProps = state => ({
  concerts: state.ticketmaster.concerts,
  loading: state.ticketmaster.loading,
  error: state.ticketmaster.error,
  empty: state.ticketmaster.empty,
  favorite: state.favorite.favorite,
  currentPage: state.ticketmaster.currentPage,
  currentSearchResults: state.ticketmaster.currentSearchResults,
  isLastPage: state.ticketmaster.isLastPage,
  loggedIn: state.auth.currentUser !== null,
  mapCenter: state.ticketmaster.mapCenter,
  markers: state.ticketmaster.markers,
  contacts: state.contact.contacts
});

export default connect(mapStateToProps)(ConcertSearchResults);
