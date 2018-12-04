import React from 'react';
import MovieItem from './MovieItem';

const Content = (props) => {
    const movies = props.movies.data;

    return movies.length > 0 ? (
        movies.map(movie => {
            return (
                <MovieItem movieitem={movie} />
            );
        })
        ) : ( <h2>No films found</h2> )
}

export default Content;