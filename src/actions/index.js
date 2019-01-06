export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const FILTER_MOVIES = 'FILTER_MOVIES'
export const FILTER_MOVIES_BY = 'FILTER_MOVIES_BY'
export const SORT_MOVIES = 'SORT_MOVIES'

export const requestMovies = () => ({
    type: REQUEST_MOVIES
})

export const receiveMovies = (json) => ({
    type: RECEIVE_MOVIES,
    movies: json.data
})

export const filterMovies = (searchStr) => ({
    type: FILTER_MOVIES,
    searchStr
})

export const filterMoviesBy = (searchby) => ({
    type: FILTER_MOVIES_BY,
    searchby
})

export const sortMovies = (sortby) => ({
    type: SORT_MOVIES,
    sortby
})

const requestUrl = (getState) => {
    const state = getState();
    const url = "http://react-cdp-api.herokuapp.com/movies";
    const searchStr = `?search=${state.search.search}`;
    const searchBy = `&searchBy=${state.search.searchby}`;
    const sortBy = `?sortBy=${state.sortby}`
    const order = "&sortOrder=desc";

    return `${url}${searchStr}${searchBy}${order}`;
}

const fetchMovies = () => (dispatch, getState) => {
    dispatch(requestMovies())
    const url = requestUrl(getState);

    return fetch(url)
    .then(response => response.json())
    .then(result => {
        dispatch(receiveMovies(result))
    })
}