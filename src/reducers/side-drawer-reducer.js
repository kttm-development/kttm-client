import {
    SIDE_DRAWER_TOGGLE,
} from '../actions/side-drawer-actions';

const initialState = {
    sideDrawerOpen: false,
};

export default function reducer(state = initialState, action) {
    if (action.type === SIDE_DRAWER_TOGGLE) {
        return Object.assign({}, state, {
            sideDrawerOpen: !state.sideDrawerOpen,
        });
    }
    return state;
}