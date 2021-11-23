import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {adaptData} from './utils/utils';
import {Offer} from './types/offer';
// import {comments} from './mocks/comments';

const adaptedOffers: Offer[] = offers.map(adaptData);

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={adaptedOffers}
      // comments={comments}
    />
  </React.StrictMode>,
  document.getElementById('root'));
