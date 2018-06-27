import React from 'react';
import { connect } from 'react-redux';
import { RiseLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <div className="loading-wrapper">
          <RiseLoader />
        </div>
      );
    }
    if (this.props.error) {
      return (
        <div className="results-info col-8">
          <h2>OOPS!</h2>
          <h3>Something Went Wrong:</h3>
          <h3><em> {this.props.error}</em></h3>
          <h4><strong>Please try searching again</strong></h4>
        </div>
      );
    }

          if (this.props.empty===true) {
              return(
              <div className="col-8">
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
                     containerElement={<div style={{ height: '375px' }} />}
                     mapElement={<div style={{ height: '100%' }} />}/>
          </div>
          <h1 className="search-results-title" id="concert-results-title">Concerts</h1>
          {this.props.concerts.map(obj => (
            // console.log(obj)
            <ConcertSearchItem
              {...obj}
              dispatch={this.props.dispatch}
              props={this.props}
              key={String(obj.id)}
            />
          ))}
          <div className="pagination">
            {this.props.currentPage === 0 ? '' : <a href='#concert-results-title'><button onClick={() => this.onPrevClick(this.props)} className="previous-button blue push_button"><i className="fas fa-arrow-left"></i> Previous</button></a>}
            <h3 className="page-number">Page {this.props.currentPage + 1}</h3>
            {this.props.isLastPage ? '' : <a href='#concert-results-title'><button onClick={() => this.onNextClick(this.props)} className="next-button blue push_button">Next <i className="fas fa-arrow-right"></i></button></a>}
          </div>
          <ToastContainer position="bottom-left" hideProgressBar />
        </section>
      );
    }


  }
}

const mapStateToProps = state => ({
  concerts: state.ticketmaster.concerts,
  loading: state.ticketmaster.concerts,
  error: state.ticketmaster.error,
  empty: state.ticketmaster.empty,
  favorite: state.favorite.favorite,
  currentPage: state.ticketmaster.currentPage,
  currentSearchResults: state.ticketmaster.currentSearchResults,
  isLastPage: state.ticketmaster.isLastPage,
  loggedIn: state.auth.currentUser !== null,
  mapCenter: state.ticketmaster.mapCenter,
  markers: state.ticketmaster.markers
});

export default connect(mapStateToProps)(ConcertSearchResults);
