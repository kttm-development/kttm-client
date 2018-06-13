import React from 'react';
import { connect } from 'react-redux';
import { RiseLoader } from 'react-spinners';

import './styles/ConcertSearchResults.css';
import ConcertSearchItem from './ConcertSearchItem';
// import { fetchConcerts } from '../actions/ticketmaster-actions';

class ConcertSearchResults extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchConcerts());
    // }

    render() {
        // const { loading, error, concerts } = this.props.postsState;
        // if (loading) {
        //     return (
        //       <div className="loading-wrapper">
        //         <RiseLoader />
        //       </div>
        //     );
        //   }
      
        //   if (error) {
        //     return (
        //       <div>
        //         <h1>something wrong: {error.message}</h1>
        //       </div>
        //     );
        //   }
        //   return (
        //     <div className="section-container">
        //       <h1 className="page-title">Concerts</h1>
        //       {posts.map(element => (
        //         <ConcertSearchItem {...element} key={String(element.id)} />
        //       ))}
        //     </div>
        //   );
        return (
            <div className="col-8">
                <span className="search-results">Placeholder for search results</span>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    concertsState: state.concert,
  });
  
  export default connect(mapStateToProps)(ConcertSearchResults);