
import React from 'react';
import { shallow } from 'enzyme';
import store from '../store';

import HeaderBar from '../commons/HeaderBar';

describe('<HeaderBar />', () => {
    it('Renders without crashing', () => {
        shallow(<HeaderBar store={store}/>);
    });
   
    // it('should logout to / after clicked', () => {
    //     const callback = jest.fn();
    //     const wrapper = shallow(<HeaderBar onClick={logOutButton} />);
    //     const link = wrapper.find('.new');
    //     link.simulate('click', {
    //         preventDefault() { }
    //     });
    //     expect(callback).toHaveBeenCalled();
    // });
});