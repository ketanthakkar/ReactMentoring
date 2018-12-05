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
                <Filter moviecount={records} />
                <div className="moviedata-container"> {
                    movies.map(movie => {
                        return (<MovieItem movieitem={movie} />);
                    })
                }
                </div>
            </React.Fragment>
        )
}

export default Content;