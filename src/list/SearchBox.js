import React from 'react';

import './SearchBox.css'

const SearchBox = ({onSearchInput}) => {
    return (
        <div className='search-box-div'>
            <input 
                type='search' 
                placeholder='Search Bollards'
                onChange={onSearchInput}
            />
        </div>
    )
}

export default SearchBox;