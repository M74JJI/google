import React from 'react';
import HeaderSearch from '../components/HeaderSearch';
import SearchResults from '../components/SearchResults';

function News({ news }) {
    return (
        <div className=" w-full h-screen ">
            <HeaderSearch />
            <div className="mx-auto w-full px-3 sm:pl-[5%] ms:pl-[14%] lg:pl-52">
                <p className="text-gray-600 text-md mb-5 mt-3">
                    About 54545 0.01 seconds
                </p>
                {news?.map(({ links, id, source, title }, index) => (
                    <div key={id} className="max-w-xl mb-8">
                        <div className="group">
                            <a href={links?.[0].href} className="text-sm">
                                {links?.[0].href}
                            </a>
                            <a href={links?.[0].href}>
                                <h2 className="truncate text-xl text-[#1a0dab] font-medium group-hover:underline">
                                    {links?.[0].href}
                                </h2>
                            </a>
                        </div>
                        <p className="line-clamp-2">{title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
