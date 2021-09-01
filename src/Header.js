import React from 'react';

import './Header.css';

const Header = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand mr-3" href="/home">Bollards.ch</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            <a className="nav-link active" href="/home">List</a>
                            <a className="nav-link disabled" href="/home">Map</a>
                            
                        </div>
                        <div className="navbar-nav">
                            <a className="nav-link disabled" href="/home" tabIndex="-1" aria-disabled="true">About</a>
                            <a className="nav-link disabled" href="/home" tabIndex="-1" aria-disabled="true">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
    );
}

export default Header;