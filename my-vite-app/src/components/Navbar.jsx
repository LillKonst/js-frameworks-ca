
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



export default function Navbar() {
    return (
    <nav className="">
        <ul className="flex">
            <li className="px-2">
                <Link to="/Home">Home</Link>
            </li>
            <li className="px-2">
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
    </nav>
    );
}
