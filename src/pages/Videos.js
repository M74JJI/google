import React from 'react';
import ReactPlayer from 'react-player';
import HeaderSearch from '../components/HeaderSearch';

function Videos({ results }) {
    console.log(results);
    return (
        <div className=" w-full h-screen ">
            <HeaderSearch />
            <div className="mx-auto w-full flex flex-wrap px-3 sm:pl-[5%] ms:pl-[14%] lg:pl-52">
                {results.map((video, index) => (
                    <div key={index} className="p-2">
                        <ReactPlayer
                            url={video.additional_links?.[0].href}
                            controls
                            width="355px"
                            height="200px"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Videos;
