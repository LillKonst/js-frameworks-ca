import React from "react";
import { Routes, Route } from "react-router-dom"; 
import "./Header.css"; // Optional for styles
import Logo from "./Logo";
import Navbar from "./NavBar";
import CartIcon from "./CartIcon";

function Header() {
    return <div className="d-flex">
    <Logo/>
    <Navbar/>
    <CartIcon />
    </div>
}

export default Header;
