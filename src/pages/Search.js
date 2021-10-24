import React from 'react';
import HeaderSearch from '../components/HeaderSearch';
import SearchResults from '../components/SearchResults';

function Search({ results }) {
    return (
        <div className=" w-full h-screen ">
            <HeaderSearch></HeaderSearch>
            <SearchResults results={results} />
        </div>
    );
}

export default Search;
