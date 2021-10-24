function Avatar({ url, className }) {
    return (
        <img
            loading="lazy"
            src={url}
            alt="profile"
            className={`${className} h-11 w-11 rounded-full p-1 object-cover cursor-pointer border border-1 transition duration-150 transform  animate-pulse`}
        />
    );
}

export default Avatar;
