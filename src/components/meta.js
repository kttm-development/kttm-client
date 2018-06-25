import React from 'react';
import MetaTags from 'react-meta-tags';
import concertImg from '../images/concert-bg4.jpg'

export default class Meta extends React.Component {
  render() {
    return (
          <MetaTags>
            <title>ConcertConnect</title>
            <meta property="fb:app_id" content="1792747887435029"/>
            <meta name="description" content="ConcertConnect is an application designed to help users find concerts happening near them while also providing links to tickets and housing.  CC also has the ability to generate concert emails to friends and the ability to add your favorite concerts to a list for easier access.." />
            <meta property="og:title" content="ConcertConnect" />
            <meta property="og:image" content={concertImg} />
          </MetaTags>
      )
  }
}