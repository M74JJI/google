function Footer() {
    return (
        <footer className=" w-full divide-y-[1px] overflow-y-hidden divide-gray-300 bg-gray-100 text-sm text-gray-500 ">
            <div className="px-8 py-[13px]">
                <p>Morocco</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center  h-20 md:h-12 space-y-4 py-3 ">
                <div className="flex space-x-8 justify-center  md:justify-self-start md:pl-8">
                    <p>About</p>
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search Works</p>
                </div>
                <div className="flex space-x-8 justify-center md:ml-auto md:pr-8 pb-4">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
