import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ErrorBoundary from './error/ErrorBoundary';
import Movie from './components/Movie';
import PropTypes from 'prop-types';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            movieData: [], 
        }
    }
    
    componentDidMount() {
        fetch(`http://react-cdp-api.herokuapp.com/movies`)
        .then(response => response.json())
        .then(result => this.setState({ movieData: result }));
    }

    render() {
        const {movieData} = this.state;
        
        return ( 
            <div className="main"> 
                <Header />  
                { movieData.data && 
                    <ErrorBoundary>
                        <Content movies={ movieData } />
                    </ErrorBoundary> 
                }
                <Footer />
                {/* Movie Detail page <Movie movies={ movieData } /> */}
            </div>
        );
    }
}

Main.propTypes = {
    movies: PropTypes.object
};

export default Main;