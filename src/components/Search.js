import React, { Component } from 'react';
import { fetchMovies, filterMovies, filterMoviesBy } from '../actions/index';

const Search = () => {

    handleSearchClick = (event) => {
       const filterBy = event.target.id === "genre-btn" ? "genre" : "title"
       this.props.filterMoviesBy(filterBy);
    }

    handleChange = (event) => {
        this.props.filterMovies(event.target.value);
      }

        return (
            <section className="search-section">
                <h4 className="white-text">FIND YOUR MOVIE</h4>
                <input type="text" placeholder="Enter title" className="white-text search-title"
                        onChange={this.handleChange}></input>
                <div className="search-container">
                    <div className="search-selection">
                        <label className="white-text">SEARCH BY</label>
                        <button id="title-btn" className="white-text" onClick={this.handleSearchClick}>TITLE</button>
                        <button id="genre-btn" className="white-text" onClick={this.handleSearchClick}>GENRE</button>
                    </div>
                    <button className="white-text" onClick={this.props.fetchMovies}>SEARCH</button>
                </div>
            </section>
            )
        }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchMovies,
        filterMovies
    }, dispatch)
};

export default connect(null, mapDispatchToProps)(Search);