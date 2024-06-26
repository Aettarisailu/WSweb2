import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'

const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };
    return (
        <>
            <nav className="navbar container-nav navbar-expand-lg navbar-light fixed-top">
                <div className="container d-flex justify-content-between align-items-center">                    
                    <div className='heading-container'>
                        <Link to='/' className='heading-container'>
                            <img
                                src="https://res.cloudinary.com/drevfgyks/image/upload/v1712129337/1_ozrowa.png"
                                className="Borgani-logo"
                                alt='image9'
                            />
                            <h1 className='borgnanics-heading'>B Organics</h1>                 
                        </Link>                            
                    </div>
                    <div className='topleft-nav-container'>
                    <button className="navbar-toggler" type="button" onClick={handleNavbarToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                    <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}>                        
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to='whychooseus' className="nav-link">Why Choose Us?</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='Menu' className="nav-link">Explore Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='About' className="nav-link">About</Link>
                            </li>
                            {/* Add your other navigation items here */}
                        </ul>                        
                    </div>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
