import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import Image from 'next/image'
import Link from "next/link";
import logo from "../images/logo.png"
import {

    faXmark,
    faBars,
    faBell
} from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {

    useEffect(() => {
        const navMenu = document.getElementById("nav-menu")
        const toogleMenu = document.getElementById("toogle_menu")
        const closeMenu = document.getElementById("close_menu")
        toogleMenu.addEventListener('click', () => {
            navMenu.classList.toggle('show')
        })
        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('show')
        })

    }, [])

    return (
    
        <div>

            <header id="head">
                <div className="logo" id="log">
                    <Image src={logo} alt="logo" className="image" width={50} height={50} style={{ marginRight: 10 }} />
                    <Link href="" ><a className="header_logo">Blood Bank</a></Link>
                </div>
                <nav className="nav" id="nav-menu">
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="header_close show"
                        id="close_menu"
                    />
                    <ul className="nav_list">
                        <li className="nav_item"><Link href="/" ><a className="nav_link">Home</a></Link></li>
                        <li className="nav_item"><Link href="/createhos" ><a className="nav_link">Hospital Use</a></Link></li>
                        <li className="nav_item"><Link href="/Available" ><a className="nav_link">Availablity</a></Link></li>
                    </ul>
                </nav>
                <FontAwesomeIcon
                    icon={faBars}
                    className="header_toogle show"
                    id="toogle_menu"
                />
            </header>
        </div>
    );
};







export default Navbar;