import React from 'react';
import { connect } from 'react-redux';
import { RiseLoader } from 'react-spinners';

import '../styles/ConcertSearchResults.css';
import ConcertSearchItem from './ConcertSearchItem';

class ConcertSearchResults extends React.Component {
  componentDidMount(){
    console.log(this.props.concerts)
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
              <div>
                <h2>OOPS!</h2>
                <h3>Something Went Wrong:</h3>
                <h3><em> {this.props.error}</em></h3>
                <h4><strong>Please try searching again</strong></h4>
              </div>
            );
          }

          if(this.props.empty===true){
              return(
              <div className="col-8">
                <h3 className="search-results">Search for concerts near you to display shows...</h3>
              </div>)
          }
          else {
            return (
            <div className="section-container">
              <h1 className="page-title">Concerts</h1>
                {console.log(this.props.concerts)}
                {this.props.concerts.map(obj => (
                  <ConcertSearchItem {...obj} key={String(obj .id)} />
                ))}
            </div>
          );
        }
        
    }
}

const mapStateToProps = state => ({
    concerts: state.ticketmaster.concerts,
    loading: state.ticketmaster.concerts,
    error: state.ticketmaster.error,
    empty: state.ticketmaster.empty
  });
  
  export default connect(mapStateToProps)(ConcertSearchResults);