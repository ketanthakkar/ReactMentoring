import React from 'react';

const MovieItem = (props) => {
    const movieitem = props.movieitem;

    return (
        <div className="movieitem-container">
            <div>
                <img className="movieitem-img" src={movieitem.poster_path} alt={movieitem.tagline}/>
                <div className="movieitem-detail">
                    <span>{movieitem.title}</span>
                    <span className="movieitem-year">{movieitem.release_date}</span>
                </div>
                <span className="movieitem-genres">{movieitem.genres.join(" & ")}</span>
            </div>
        </div>
    )
}

export default MovieItem;