import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <div className="nameLogo"><span className="lname"><Link to="/danny-suazo-portfolio">Suazo<span className="fname">.</span></Link></span></div>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio">Work</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-contact" href="mailto:dannysuazor@yahoo.com"><span>Contact</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
)

export default Navigation;