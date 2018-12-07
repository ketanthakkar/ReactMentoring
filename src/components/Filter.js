import React from 'react';

const Filter = ({movieCount}) => (
    <div className="filter-container">
        <span className="results">{movieCount} movies found</span>
        <div className="sort-detail">
            <span>Sort by</span>
            <span>release date</span>
            <span>rating</span>
        </div>
    </div>
);
   

export default Filter;