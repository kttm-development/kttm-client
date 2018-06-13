import {
    SENDING_TICKETMASTER_INFO,
    TICKETMASTER_INFO_SUCCESS,
    TICKETMASTER_INFO_ERROR
} from '../actions/ticketmaster-actions';

const initialState = {
    loading: false,
    error: null,
    concerts:
    //dummy data (make null when no dummy data):
    [
        {
            name:'test1',
            id:5123647,
            image: 'https://images.unsplash.com/photo-1490810277975-e64342ceecf0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88e69bf894f334456f8ae269752556e1&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
            venue: 'your moms',
            date: '6/14/2018',
            time: '11:00pm Eastern',
            website: 'ticketmaster.com'
        },
        {
            name:'test2',
            id:51289807,
            image: 'https://images.unsplash.com/photo-1490810277975-e64342ceecf0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88e69bf894f334456f8ae269752556e1&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
            venue: 'the hideaway',
            date: '8/24/2018',
            time: '8:00pm Eastern',
            website: 'ticketmaster.com'
        },
    ]
};

export default function reducer(state=initialState, action) {
    if (action.type === SENDING_TICKETMASTER_INFO) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === TICKETMASTER_INFO_SUCCESS) {
        return Object.assign({}, state, {
            concerts: action.concerts,
            loading: false,
            error:null
        });
    }
    else if (action.type === TICKETMASTER_INFO_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    
    return state;
}
