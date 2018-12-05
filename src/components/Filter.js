import React from 'react';

const Filter = () => {
    return (
        <div className="filter-container">
            <span className="results">10 movies found</span>
            <div className="sort-detail">
                <span>Sort by</span>
                <span>release date</span>
                <span>rating</span>
            </div>
        </div>
    )
}

export default Filter;