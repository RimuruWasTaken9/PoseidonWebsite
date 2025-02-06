import { useLocation, Link } from "react-router-dom";
import React from 'react';
import { headerPhotos } from "../assets/bakeryPhotos";

function Header() {
    const location = useLocation();

    return (
        <header>
            <div id="header">
                <nav className="navbar navbar-expand-md navbar bg">
                    <div className="container-fluid min-center">
                        <div className="col-md-3 mb-2 mb-md-0 justify-content-center">
                            <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none" >
                                <img src={headerPhotos.logo} className="logo" alt="Poseidon Bakery Logo" />
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05"
                            aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExample05">
                            <ul className="navbar-nav container-fluid justify-content-end me-auto mb-2 mb-md-0">
                                <li className="nav-item" id="nav-home">
                                    <Link to="/" className="nav-link px-5 text-body-emphasis" style={location.pathname === "/" ? { textDecoration: 'underline' } : { textDecoration: 'none' }}>HOME</Link>
                                </li>
                                <li className="nav-item" id="nav-menu">
                                    <Link to="/Menu" className="nav-link px-5 text-body-emphasis" style={location.pathname === "/Menu" ? { textDecoration: 'underline' } : { textDecoration: 'none' }}>MENU</Link>
                                </li>
                                <li className="nav-item" id="nav-about">
                                    <Link to="/About" className="nav-link px-5 text-body-emphasis" style={location.pathname === "/About" ? { textDecoration: 'underline' } : { textDecoration: 'none' }}>ABOUT US</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;