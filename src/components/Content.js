import React from 'react';
import Filter from './Filter';
import MovieItem from './MovieItem';

const Content = (props) => {
    const movies = props.movies.data;
    const records = props.movies.limit;
    
    if(movies == null || movies.length <= 0) {
        throw new Error('No Movies Found!');
    }

    return (
        <React.Fragment>
            <Filter movieCount={records} />
            <main className="moviedata-container"> {
                movies.map(movie => <MovieItem movieItem={movie} />)
            }
            </main>
        </React.Fragment>
    )
}

export default Content;