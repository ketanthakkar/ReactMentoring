import { REQUEST_MOVIES, RECEIVE_MOVIES, FILTER_MOVIES, SORT_MOVIES } from '../actions';

const moviesReducer = (state = {
    movieData: []
    }, action) => {

    switch(action.type) {
        case REQUEST_MOVIES:
            return { ...state }

        case RECEIVE_MOVIES:
            return {
                ...state,
                movieData: action.movies
            }
        default:
            return state;
    }
}

export default moviesReducer
