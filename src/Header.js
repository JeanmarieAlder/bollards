import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    const [collapseClass, setCollapseClass] = useState(false) //collapse or show
    const hideHeader = () => {
        setCollapseClass(!collapseClass);
    };
    const hideHeaderBrand = () => {
        setCollapseClass(false);
    }
    
    return (
            <header className='site-header'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand mr-3" to="/home" onClick={hideHeaderBrand}>Bollards.ch</Link>
                        <button className="navbar-toggler" type="button" onClick={hideHeader} data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={collapseClass} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`navbar-collapse collapse ${collapseClass ? 'show' : ''}`} id="navbarNavAltMarkup" onClick={hideHeader}>
                            <div className="navbar-nav mx-auto" >
                                <Link className="nav-link active" aria-current="page" to="/list">List</Link>
                                <Link className="nav-link active" to="/map">Map</Link>
                                <Link className="nav-link active" to="/news">News</Link>
                                
                            </div>
                            <div className="navbar-nav">
                                <a className="nav-link disabled" href="/home" tabIndex="-1" aria-disabled="true">About</a>
                                <a className="nav-link disabled" href="/home" tabIndex="-1" aria-disabled="true">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            
    );
}

export default Header;