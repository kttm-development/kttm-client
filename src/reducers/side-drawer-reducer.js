import {
    SIDE_DRAWER_TOGGLE, BACKDROP_CLICKED
} from '../actions/side-drawer-actions';

const initialState = {
    error: null,
    sideDrawerOpen: false,
};

export default function reducer(state = initialState, action) {
    if (action.type === SIDE_DRAWER_TOGGLE) {
        return Object.assign({}, state, {
            error: null,
            sideDrawerOpen: !state.sideDrawerOpen,
        });
    }
    console.log(state);
    return state;
}