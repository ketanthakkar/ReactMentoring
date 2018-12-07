import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ErrorBoundary from './error/ErrorBoundary';
import jsonResponse from './data/MovieData.js';
import Movie from './components/Movie';
import PropTypes from 'prop-types';

class Main extends Component {
    state = { movieData: jsonResponse, }

    render() {
        return (
            <div className="main">
                <Header />
                <ErrorBoundary>
                    <Content movies={ this.state.movieData } />
                </ErrorBoundary>
                <Footer />

                {/* Movie Detail page <Movie movies={ jsonResponse } /> */}
            </div>
        );
    }
}

Main.propTypes = {
    movies: PropTypes.object
};

export default Main;