import React from 'react';
import Filter from './Filter';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

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

Content.propTypes = {
    movieCount: PropTypes.number,
    movieItem: PropTypes.object
};

export default Content;