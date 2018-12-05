import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Filter from './components/Filter';
import ErrorBoundary from './error/ErrorBoundary';
import jsonResponse from './data/MovieData.js';
import Movie from './components/Movie';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Filter />
                <ErrorBoundary>
                    <Content movies={ jsonResponse } />
                </ErrorBoundary>
               
                <Footer />

                {/* Movie Detail page <Movie movies={ jsonResponse } /> */}
            </div>
        );
    }
}

export default Main;