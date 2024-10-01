
import { useState  } from "react";
import { Link } from "react-router-dom"; 

export function Home() {
    return <div>Home</div>
}

export function Contact() {
    return <div>Contact</div>
}

export function RouteNotFound() {
    return <div>Page not found</div>
  }



export default function Navbar(className) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <nav className={`flex ${className}`}>
         <div className="block md:hidden">
                <button onClick={toggleMenu} className="text-lg bg-customBlue border-none text-bold">
                    MENU
                </button>
            </div>
        <ul className={`${
                    isMenuOpen ? "flex" : "hidden"
                } flex-col md:flex md:flex-row md:space-x-4 
                    absolute md:relative left-0 right-0 
                    md:left-auto md:right-auto 
                    bg-white md:bg-transparent w-full md:w-auto 
                    md:flex md:items-center md:justify-between`}>
            <li className="px-2">
                <Link to="/Home" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="px-2">
                <Link to="/Contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
        </ul>
    </nav>
    );
}
