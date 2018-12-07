import React from 'react';

const Search = () => {
    return (
        <div className="search-section">
            <h4 className="white-text">FIND YOUR MOVIE</h4>
            <input type="text" placeholder="Enter title" className="white-text search-title"></input>
            <div className="search-container">
                <div className="search-selection">
                    <label className="white-text">SEARCH BY</label>
                    <button className="white-text">TITLE</button>
                    <button className="white-text">GENRE</button>
                </div>
                <button className="white-text">SEARCH</button>
            </div>
        </div>
    )
}

export default Search;