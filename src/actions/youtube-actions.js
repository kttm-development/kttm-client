import { normalizeResponseErrors } from './utils';

export const SHOW_VIDEO_SUCCESS = 'SHOW_VIDEO_SUCCESS';
export const showVideosSuccess = (videos) => {
    return {
        type: SHOW_VIDEO_SUCCESS,
        videos
    };
};



const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';


export const showVideos = (artist) => dispatch => {
    return fetch(`${YOUTUBE_URL}/?part=snippet&type=video&q=${artist}&key=AIzaSyDXQ1H2iW0GC1wlN5X_U55Lhv2VX3QSjc4`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res =>
        normalizeResponseErrors(res)
    ).then(res => {
        return res.json();
    })
        .then(videos => {
                return dispatch(showVideosSuccess(videos));
        })
};





