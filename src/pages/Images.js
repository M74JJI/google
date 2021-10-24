import React from 'react';
import HeaderSearch from '../components/HeaderSearch';
import SearchResults from '../components/SearchResults';

function Images({ results }) {
    return (
        <div className=" w-full h-screen ">
            <HeaderSearch />
            <p className="text-gray-600 text-md mb-5 mt-3">
                About {results.total} {results.ts} seconds
            </p>
            <div className="flex flex-row flex-wrap justify-center">
                {results?.image_results?.map(
                    ({ image, link: { href, title } }, index) => (
                        <a
                            className="sm:p-3 p-5"
                            href={href}
                            key={index}
                            target="_bank"
                            rel="noreferrer"
                        >
                            <img
                                className="w-100 h-100 object-cover"
                                src={image.src}
                                alt={title}
                                laoding="lazy"
                            />
                            <p className="w-36 break-words text-sm mt-2">
                                {title}
                            </p>
                        </a>
                    )
                )}
            </div>
        </div>
    );
}

export default Images;
