export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const FILTER_MOVIES = 'FILTER_MOVIES'
export const SORT_MOVIES = 'SORT_MOVIES'

export const requestMovies = () => ({
    type: REQUEST_MOVIES
})

export const receiveMovies = (json) => ({
    type: RECEIVE_MOVIES,
    movies: json.data.map(movie => movie)
})

export const filterMovies = () => ({
    type: FILTER_MOVIES
})

export const sortMovies = () => ({
    type: SORT_MOVIES
})

const fetchMovies = dispatch => {
    dispatch(requestMovies())
    return fetch(`http://react-cdp-api.herokuapp.com/movies`)
    .then(response => response.json())
    .then(result => {
        dispatch(receiveMovies(json))
    })
}