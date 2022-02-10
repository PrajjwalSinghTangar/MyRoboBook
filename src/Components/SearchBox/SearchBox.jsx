import React from "react";

// Making a SearchBox.

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2 tc">
            <div>
                <h1>{'RoboBook'}</h1>
            </div>
            <div>
                <input 
                className="bg-lightest-blue ba br2 pa2 ma3"
                type='search' 
                placeholder = 'Search Robots!!' 
                onChange = {searchChange}
            />
            </div>
        </div>
    );
}


export default SearchBox;