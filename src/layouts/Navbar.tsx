import React from 'react';
import Leadz from "../assets/leadz.png"

function Navbar() {
    return (
        <nav className='bg-[#27348a] text-white flex items-center justify-between p-3'>
            <div className="brand-logo">
                <img src={Leadz} alt="leadz"/>
            </div>
            <ul className='nav-items'>
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="#">Our Products</a>
                </li>
                <li>
                    <a href="#">Our Clients</a>
                </li>
                <li>
                    <a href="#">Press & Podcast</a>
                </li>
                <li>
                    <a href="#">Reach us</a>
                </li>
                <li>
                    <a href="#">Contact us</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;