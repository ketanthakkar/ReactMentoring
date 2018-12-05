import React from 'react';
import Title from './Title';
import Footer from './Footer';
import Content from './Content';

const Movie = (props) => {
    const movie = props.movies.data;
    return (
        <div className="movie-container">
            <div className="header-section">
                <Title />
            </div>
            <div className="movie-poster">
                <img className="movie-img" src={movie[0].poster_path} alt={movie[0].tagline} />
                <div className="movie-detail">
                    <span className="movie-title">{movie[0].title}</span>
                    <span className="movie-genres">{movie[0].genres.join(" & ")}</span>
                    <div>
                        <span className="movie-year">{movie[0].release_date}</span>
                        <span className="movie-length">{`${movie[0].runtime} min`}</span>
                    </div>
                    <p className="movie-description">{movie[0].overview}</p>
                </div>    
            </div>
            <Content movies={ props.movies } />
            <Footer />
        </div>
    )
}

export default Movie;