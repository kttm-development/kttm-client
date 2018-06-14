import React from 'react';
import { connect } from 'react-redux';
import { RiseLoader } from 'react-spinners';
import './styles/ConcertSearchResults.css';
import ConcertSearchItem from './ConcertSearchItem';

class ConcertSearchResults extends React.Component {
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
              <div>
                <h1>Something Went Wrong: {this.props.error}</h1>
              </div>
            );
          }

          if(!this.props.concerts){
              return(
              <div className="col-8">
                <span className="search-results">Search For Concerts Near You</span>
              </div>)
          }
          return (
            <div className="section-container">
              <h1 className="page-title">Concerts</h1>
              {this.props.concerts.map(obj => (
                <ConcertSearchItem {...obj} key={String(obj .id)} />
              ))}
            </div>
          );
        
    }
}

const mapStateToProps = state => ({
    concerts: state.ticketmaster.concerts,
    loading: state.ticketmaster.concerts,
    error: state.ticketmaster.error
  });
  
  export default connect(mapStateToProps)(ConcertSearchResults);