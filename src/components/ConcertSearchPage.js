import React from 'react';
import {connect} from 'react-redux';

import ConcertSearchForm from './ConcertSearchForm';
import ConcertSearchResults from './ConcertSearchResults';

export class ConcertSearchPage extends React.Component {
    render() {
        return (
            <div className="concert-search-page">
            <ConcertSearchResults className="col-8" />
                <ConcertSearchForm className="col-4" />
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps)(ConcertSearchPage);
