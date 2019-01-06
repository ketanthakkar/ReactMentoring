import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from './actions/index';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ErrorBoundary from './error/ErrorBoundary';
import Movie from './components/Movie';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {        
        return ( 
            <div className="main">
                <Header />  
                { movieData.data && 
                    <ErrorBoundary>
                        <Content movies={ this.props.movies } records={ this.props.movies.length } />
                    </ErrorBoundary> 
                }
                <Footer />
                {/* Movie Detail page <Movie movie={ movieData.data } /> */}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      fetchMovies
    }, dispatch);
  }
  
  const mapStateToProps = (state) => {
    return {
      movies: state.movies.data,
      searchby: state.search.searchby,
      sortby: state.sortby
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(Main);