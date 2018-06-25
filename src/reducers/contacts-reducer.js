import { GET_CONTACTS_SUCCESS, CLEAR_CONTACTS, ADD_CONTACTS_SUCCESS, GET_CONTACTS_ERROR, GET_CONTACT_REQUEST } from '../actions/contacts-actions';

const initialState = {
    loading: false,
    error:null,
    contacts:[{name:null, email:null}],
};

export default function reducer(state=initialState, action) {
    if (action.type === GET_CONTACTS_SUCCESS) {
        return Object.assign({}, state, {
            error: null,
            contacts: action.contacts
        });
    }
    else if (action.type === CLEAR_CONTACTS) {
        return Object.assign({}, state, {
            loading: false,
            error: null,
            contacts: [{name:null, email:null}]
        });
    }
    else if (action.type === ADD_CONTACTS_SUCCESS) {
        return Object.assign({}, state, {
            loading:false,
            error: null,
            contacts: [...state.contacts, action.contact]
        });
    }
    else if (action.type === GET_CONTACTS_ERROR) {
        return Object.assign({}, state, {
            loading:false,
            error: action.err,
            contacts: []
        });
    }
    else if (action.type === GET_CONTACT_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null,
            contacts: []
        });
    }
    return state;
}