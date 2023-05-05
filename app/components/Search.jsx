'use client'

import React from 'react';
import { useState } from 'react';

const Search = () => {

    const [query,setQuery] = useState('');

    console.log("Search available...");

    function handleSearch(e) {
        e.preventDefault();
        console.log("Suchbegriff:",query);
        setQuery('');
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input 
                    type="text"
                    placeholder="Stadt suchen" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                     />
                <button type="submit" className='search-btn'>🔎</button>
            </form>
        </div>
        
    )
}

export default Search