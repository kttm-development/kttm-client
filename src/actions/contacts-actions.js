import {API_BASE_URL} from '../config';

export const GET_CONTACT_REQUEST = 'GET_CONTACT_REQUEST';
export const getContactRequest = () => {
  return {
    type: GET_CONTACT_REQUEST
  };
};
export const CLEAR_CONTACTS = 'CLEAR_CONTACTS';
export const clearContacts = () => {
  return {
    type: CLEAR_CONTACTS
  };
};
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const getContactsSuccess = (contacts) => {
  return {
    type: GET_CONTACTS_SUCCESS,
    contacts
  };
};
export const GET_CONTACTS_ERROR = 'GET_CONTACTS_ERROR';
export const getContactsError = (err) => {
  return {
    type: GET_CONTACTS_ERROR,
    err
  };
};
export const ADD_CONTACTS_SUCCESS = 'ADD_CONTACTS_SUCCESS';
export const addContactsSuccess = (contact) => {
  return {
    type: ADD_CONTACTS_SUCCESS,
    contact
  };
};

export const getContacts = () => (dispatch, getState) => {
  dispatch(getContactRequest)
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/contacts`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => {
    return res.json();
  })
    .then(contacts => {
      dispatch(clearContacts())
      return dispatch(getContactsSuccess(contacts));
    })
    .catch(err => dispatch(getContactsError(err.message)));
};

export const newContact = (newContactObj) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(newContactObj)
  }).then(res => {
    return res.json();
  })
    .then(contact => {
      return dispatch(addContactsSuccess(contact));
    })
    .catch(err => dispatch(getContactsError(err.message)));
};


export const deleteContact = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(() => {
      return dispatch(getContacts());
    })
    .catch(err => dispatch(getContactsError(err.message)));
};

