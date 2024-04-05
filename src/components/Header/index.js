import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'

const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container">
                    {/* <a className="navbar-brand" href="https://www.google.com"> */}
                        <Link to='/'><img
                            src="https://res.cloudinary.com/drevfgyks/image/upload/v1712129337/1_ozrowa.png"
                            className="Borgani-logo"
                            alt='image9'
                        /></Link>
                    {/* </a> */}
                    <button className="navbar-toggler" type="button" onClick={handleNavbarToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}>
                        <div className="navbar-nav ml-auto">                           
                            <Link to='whychooseus'><p className="nav-link"  id="navItem3">Why Choose Us?</p></Link>
                            <Link to='Menu'><p className="nav-link"  id="navItem3">Explore Menu</p></Link>                            
                            <Link to='About'><p className="nav-link"  id="navItem3">About</p></Link>
                            <a className="nav-link" href="#followUsSection" id="navItem4"></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;