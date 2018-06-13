import React from 'react';
import { connect } from 'react-redux';

import ConcertSearchForm from './ConcertSearchForm';
import ConcertSearchResults from './ScratchConcertSearchResults2';
import './styles/ConcertSearchPage.css'
export class ConcertSearchPage extends React.Component {
    render() {
        return (
            <div className="concert-search-page">
                <div className="search-and-results">
                    <ConcertSearchForm />
                    <ConcertSearchResults />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps)(ConcertSearchPage);
