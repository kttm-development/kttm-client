
import React from 'react';
import { shallow } from 'enzyme';
import store from '../store';

import Navbar from '../commons/Navbar';

describe('<Navbar />', () => {
    it('Renders without crashing', () => {
        shallow(<Navbar store={store}/>);
    });
   
    // it('should logout to / after clicked', () => {
    //     const callback = jest.fn();
    //     const wrapper = shallow(<Navbar onClick={logOutButton} />);
    //     const link = wrapper.find('.new');
    //     link.simulate('click', {
    //         preventDefault() { }
    //     });
    //     expect(callback).toHaveBeenCalled();
    // });
});