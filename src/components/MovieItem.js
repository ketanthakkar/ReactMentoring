import React from 'react';

const MovieItem = (props) => {
    const movieitem = props.movieitem;

    return (
        <div className="movieitem-container">
            <img className="movieImg" src={movieitem.poster_path} alt={movieitem.tagline}/>
            <div className="movieitem-detail">
                <span className="movie-name">{movieitem.title}</span>
                <span className="movie-year">{movieitem.release_date}</span>
            </div>
            <span className="movie-genres">{movieitem.genres}</span>
        </div>
    )
}

export default MovieItem;