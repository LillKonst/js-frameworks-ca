import React from "react";
import { Routes, Route, Link } from "react-router-dom"; 

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
    <nav className="nav">
        <ul className="d-flex">
            <li className="nav-link">
                <Link to="/Home">Home</Link>
            </li>
            <li className="nav-link">
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
    </nav>
    );
}
