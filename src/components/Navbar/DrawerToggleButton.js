import React from 'react';
import { connect } from 'react-redux';

import { sideDrawerToggle } from '../../actions/side-drawer-actions';
import '../styles/DrawerToggleButton.css';

export function DrawerToggleButton(props) {
    return (
        <button
            onClick={() => {
                return props.dispatch(sideDrawerToggle())
            }}
            className="toggle-button"
        >
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
        </button>
    );
};


export default connect()(DrawerToggleButton);