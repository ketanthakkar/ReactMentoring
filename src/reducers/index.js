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

const searchReducer = () => {
    switch(action.type) {
        case SORT_MOVIES:
            return { 
                ...state,
                sortby = action.sortby
             }
        default:
            return state;     
    }
}

const sortByReducer = () => {
    switch(action.type) {
        case FILTER_MOVIES:
            return { 
                ...state,
                searchStr = action.searchStr
             }
        default:
            return state;     
    }
}

export default combineReducers({
    moviesReducer, searchReducer, sortByReducer
});
