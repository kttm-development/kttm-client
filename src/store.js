import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadCredentials, saveCredentials} from './local-storage';
import currentUserReducer from './reducer';
import {setCredentials} from './actions/user-actions';

const store = createStore(combineReducers({
    form: formReducer,
    currentUser: currentUserReducer,
}), applyMiddleware(thunk));

// Hydrate the credentials from localStorage if they exist
const credentials = loadCredentials();
if (credentials) {
    const {username, password} = credentials;
    store.dispatch(setCredentials(username, password));
}

store.subscribe(() => {
    const state = store.getState();
    if (state.currentUser.loggedIn) {
        saveCredentials(state.currentUser.username, state.currentUser.password);
    }
});

export default store;
