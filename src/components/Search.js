import React from 'react';

const Search = () => {
    return (
        <div className="search-section">
            <h4 className="whiteText">FIND YOUR MOVIE</h4>
            <input type="text" placeholder="Enter title" className="whiteText"></input>
            <div className="search-container">
                <div className="search-selection">
                    <label className="whiteText">SEARCH BY</label>
                    <button className="whiteText">TITLE</button>
                    <button className="whiteText">GENRE</button>
                </div>
                <button className="whiteText">SEARCH</button>
                
            </div>
        </div>
    )
}

export default Search;