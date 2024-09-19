
import logo from "../images/logo.svg";
import Navbar from "./Navbar";
import CartIcon from "./CartIcon";
import Searchbar from "./Searchbar";


function Header() {
    return <div className="fixed top-0 left-0 bg-white/50 w-full h-[70px] flex items-center justify-start px-4 z-50">
        <img src={logo} alt="Logo" className="p-5"/>
    <Navbar/>
    <CartIcon />
    <Searchbar />
    </div>
}

export default Header;
