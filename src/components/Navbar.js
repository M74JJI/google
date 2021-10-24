import Avatar from './Avatar';

function Navbar() {
    return (
        <header className="flex items-center justify-end p-3 w-full text-sm text-gray-900">
            <div className="flex space-x-4 items-center">
                <p className="link">Gmail</p>
                <p className="link">Images</p>
                <div className="hover:bg-gray-100 rounded-full p-[13px] cursor-pointer">
                    <img src="../view.png" alt="" className="w-4" />
                </div>
                <Avatar url="../images/img1.webp" />
            </div>
        </header>
    );
}

export default Navbar;
