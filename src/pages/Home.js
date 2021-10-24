import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../components/Navbar';
import { useResultContext } from '../contexts/ResultsContextProvider';
function Home() {
    const history = useHistory();
    const [input, setInput] = useState('');
    const { setSearchTerm } = useResultContext();
    const handleSearch = (e) => {
        e.preventDefault();
        if (input !== '') {
            setSearchTerm(input);
            history.push(`/search`);
        }
    };
    return (
        <>
            <Navbar />
            <form
                onSubmit={handleSearch}
                className="flex flex-col items-center  flex-grow w-4/5 mt-44 "
            >
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
                <div
                    className="flex items-center border border-1 border-[#dfe1e5] rounded-[24px] h-[44px] w-full mt-5 hover:shadow-md max-w-md focus-within:shadow-md py-3 px-4 sm:max-w-[584px] 
    "
                >
                    <svg
                        className="mr-3"
                        width="24"
                        height="24"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#d9dbdd"
                    >
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                    <input
                        value={input}
                        type="text"
                        className="focus:outline-none flex-grow "
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <svg
                        className=""
                        width="24"
                        height="24"
                        focusable="false"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#4285f4"
                            d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                        ></path>
                        <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                        <path
                            fill="#fbbc05"
                            d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                        ></path>
                        <path
                            fill="#ea4335"
                            d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                        ></path>
                    </svg>
                </div>{' '}
                <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:space-x-4 sm:flex-row">
                    <button className="btn" onClick={handleSearch}>
                        Google Search
                    </button>
                    <button className="btn" onClick={handleSearch}>
                        I'm Feeling Lucky
                    </button>
                </div>
            </form>
        </>
    );
}

export default Home;
