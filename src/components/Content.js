import React from 'react';
import MovieItem from './MovieItem';

const Content = (props) => {
    const movies = props.movies.data;
    
    if(movies == null || movies.length <= 0) {
        throw new Error('No Movies Found!');
    }

    return (
        <div className="moviedata-container"> {
            movies.map(movie => {
                return (<MovieItem movieitem={movie} />);
            })
        }
        </div>
        )
}

export default Content;