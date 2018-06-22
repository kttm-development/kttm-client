
import React from 'react';
import { shallow } from 'enzyme';

import {ConcertSearchResults} from '../components/ConcertSearch/ConcertSearchResults';

describe('<ConcertSearchResults />', () => {
  it('Renders without crashing', () => {
    shallow(<ConcertSearchResults />);
  });
});