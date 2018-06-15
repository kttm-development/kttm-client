import React from 'react';
import { connect } from 'react-redux';

import '../styles/ConcertAboutPage.css'
export class ConcertAboutPage extends React.Component {
    render() {
        return (
            <div className="concert-about-page">

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps)(ConcertAboutPage);