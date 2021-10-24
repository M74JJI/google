import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';
import { useResultContext } from '../contexts/ResultsContextProvider';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
function HeaderSearch() {
    const { searchTerm, setSearchTerm } = useResultContext();
    const history = useHistory();
    const [input, setInput] = useState(searchTerm);

    const handleSearch = (e) => {
        e.preventDefault();
        if (input !== '') {
            setSearchTerm(input);
            history.push(`/search`);
        }
    };
    return (
        <header className="sticky top-0 bg-white ">
            <div className="flex w-full p-6 items-center">
                <img
                    onClick={() => history.push(`/`)}
                    className="cursor-pointer"
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    height={30}
                    width={92}
                />
                <form
                    onSubmit={handleSearch}
                    className="flex  flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5"
                >
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="text"
                        className="flex-grow w-full focus:outline-none "
                    />
                    <svg
                        className="cursor-pointer transition duration-100 transform hover:scale-125 "
                        focusable="false"
                        height="24"
                        width="24"
                        fill="#70757a"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                    <div className="h-6 w-[1px] bg-[#dfe1e5] mx-3"></div>
                    <svg
                        className="cursor-pointer mr-3"
                        height="27"
                        width="27"
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
                    <button type="submit" className="hidden"></button>
                    <svg
                        onClick={handleSearch}
                        className="cursor-pointer"
                        height="27"
                        width="27"
                        fill="#5a94f5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                </form>
            </div>
            <HeaderOptions />
        </header>
    );
}

export default HeaderSearch;
