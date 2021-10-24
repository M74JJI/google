function SearchResults({ results }) {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] ms:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-md mb-5 mt-3">
                About {results.total} {results.ts} seconds
            </p>
            {results?.results?.map((result) => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a href={result.link} className="text-sm">
                            {result.link}
                        </a>
                        <a href={result.link}>
                            <h2 className="truncate text-xl text-[#1a0dab] font-medium group-hover:underline">
                                {result.title}
                            </h2>
                        </a>
                    </div>
                    <p className="line-clamp-2">{result.description}</p>
                </div>
            ))}
        </div>
    );
}

export default SearchResults;
