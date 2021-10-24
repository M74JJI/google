import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultsContextProvider';
import Loading from '../components/Loading';
import Home from './Home';
import HeaderSearch from '../components/HeaderSearch';
import SearchResults from '../components/SearchResults';
import Search from './Search';
import Navbar from '../components/Navbar';
import Images from './Images';
import News from './News';
import Videos from './Videos';
function Results() {
    const { results, isLoading, getResults, searchTerm, setSearchTerm } =
        useResultContext();
    const { entries: news } = results;
    const location = useLocation();
    useEffect(() => {
        if (searchTerm) {
            if (location.pathname === '/videoss') {
                getResults(`/search/q=${searchTerm} videos`);
            } else {
                getResults(`${location.pathname}/q=${searchTerm}&num=100`);
            }
        }
    }, [searchTerm, location.pathname]);
    console.log(results);
    if (isLoading) return <Loading />;
    switch (location.pathname) {
        case '/search':
            return <Search results={results} />;
        case '/images':
            return <Images results={results} />;
        case '/news':
            return <News news={news} />;
        case '/videos':
            return <Videos results={results} />;

        default:
            return 'ERROR';
    }
}

export default Results;
