import React from "react";
import styles from "../styles/Header.module.css";
import Logo from "./Logo";
import Navbar from "./Navbar";
import CartIcon from "./CartIcon";
import "../styles/styles.scss";


function Header() {
    return <div className={`${styles.background} ${styles.layout}`}>
    <Logo/>
    <Navbar/>
    <CartIcon />
    </div>
}

export default Header;
