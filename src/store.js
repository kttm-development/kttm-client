import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import genreReducer from './reducers/genre-reducer'
import locationReducer from './reducers/location-reducer';
import protectedDataReducer from './reducers/protected-data';
import ticketmasterReducer from './reducers/ticketmaster-reducer';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        ticketmaster: ticketmasterReducer,
        genre: genreReducer,
        location: locationReducer
    }),
    composeWithDevTools(),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
