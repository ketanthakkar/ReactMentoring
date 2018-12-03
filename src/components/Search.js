import React from 'react';

const Search = () => {
    return (
        <div>
            <h3>FIND YOUR MOVIE</h3>
            <input type="text" placeholder="Enter title"></input>
            <div>
                <label>SEARCH BY</label>
                <button>TITLE</button>
                <button>GENRE</button>
                <button>SEARCH</button>
            </div>
        </div>
    )
}

export default Search;