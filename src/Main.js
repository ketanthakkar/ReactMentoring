import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Filter from './components/Filter';
import jsonResponse from './data/MovieData.js';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Filter />
                <Content movies={ jsonResponse } />
                <Footer />
            </div>
        );
    }
}

export default Main;