
import logo from "../../../images/logo.svg";
import Navbar from "../Header/NavBar/Navbar";
import CartIcon from "../Header/CartIcon/CartIcon";
import Searchbar from "../Header/Searchbar/Searchbar";


function Header() {
    return <div className="fixed top-0 left-0 bg-white/50 w-full h-[110px] md:h-[70px] flex flex-col md:flex-row items-center justify-start px-4 z-50">
    <div className="flex w-full justify-center items-center">
        <img src={logo} alt="Logo" className="p-5 order-1 md:order-1"/>
        <Navbar className="order-3 md:order-2"/>
        <CartIcon className="order-2 mx-2 md:order-3" />
    </div>
    <Searchbar className="w-full"/>
    </div>
}

export default Header;
