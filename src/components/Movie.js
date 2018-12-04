import React from 'react';
import Title from './Title';
import Footer from './Footer';
import Content from './Content';

const Movie = () => {
    return (
        <div className="movie-container">
            <Title />
            <div className="movie-poster">
                <img />
                <div className="movie-detail">
                    <span className="movie-title"></span>
                    <span className="movie-genres"></span>
                    <div>
                        <span className="movie-year"></span>
                        <span className="movie-length"></span>
                    </div>
                    <p className="movie-description"></p>
                </div>    
            </div>
            <Content />
            <Footer />
        </div>
    )
}

export default Movie;