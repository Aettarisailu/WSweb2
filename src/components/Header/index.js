import React, { useState } from 'react';
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
                    <a className="navbar-brand" href="https://www.google.com">
                        <img
                            src="https://res.cloudinary.com/drevfgyks/image/upload/v1712129337/1_ozrowa.png"
                            className="Borgani-logo"
                            alt='image9'
                        />
                    </a>
                    <button className="navbar-toggler" type="button" onClick={handleNavbarToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}>
                        <div className="navbar-nav ml-auto">
                            <a className="nav-link active" id="navItem1" href="#wcuSection">
                                Why Choose Us?
                                <span className="sr-only"></span>
                            </a>
                            <a className="nav-link" href="#exploreMenuSection" id="navItem2">Explore Menu</a>
                            <a className="nav-link" href="#deliveryPaymentSection" id="navItem3"></a>
                            <a className="nav-link" href="#followUsSection" id="navItem4"></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;