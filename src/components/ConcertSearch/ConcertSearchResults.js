import React from 'react';
import { connect } from 'react-redux';
import { RiseLoader } from 'react-spinners';

import '../styles/ConcertSearchResults.css';
import ConcertSearchItem from './ConcertSearchItem';
import {fetchTicketmasterConcerts, setPageNumber} from '../../actions/ticketmaster-actions';

class ConcertSearchResults extends React.Component {
  // componentDidMount(){
  //   console.log(this.props.concerts)
  // }

  onNextClick(props) {
    const {location, genre} = props.currentSearchResults;
    const page = props.currentPage + 1;
    props.dispatch(fetchTicketmasterConcerts(location, genre, page));
    props.dispatch(setPageNumber(page));
  }

  onPrevClick(props) {
    const {location, genre} = props.currentSearchResults;
    const page = props.currentPage - 1;
    props.dispatch(fetchTicketmasterConcerts(location, genre, page));
    props.dispatch(setPageNumber(page));
  }
  
    render() {

        if (this.props.loading===true) {
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
            <div className="section-container col-8">
              <h1 className="page-title">Concerts</h1>
                {console.log(this.props.concerts)}
                {this.props.concerts.map(obj => (
                  <ConcertSearchItem {...obj} dispatch={this.props.dispatch} key={String(obj.id)} />
                ))}
                {this.props.currentPage === 0 ? '' : <a href='#top'><button onClick={() => this.onPrevClick(this.props)}>Previous</button></a>}
                Page {this.props.currentPage + 1}
                {this.props.isLastPage ? '' : <a href='#top'><button onClick={() => this.onNextClick(this.props)}>Next</button></a>}
            </div>
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
  isLastPage: state.ticketmaster.isLastPage
});

export default connect(mapStateToProps)(ConcertSearchResults);