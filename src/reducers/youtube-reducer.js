import {SHOW_VIDEO_SUCCESS} from '../actions/youtube-actions';

const initialState = {
    videos: [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === SHOW_VIDEO_SUCCESS) {
        return action.videos;
    }
    return state;
}


