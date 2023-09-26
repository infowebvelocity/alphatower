import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">

            <div className="logo">
                <h1>ALPHATOWER</h1>

            </div>

            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">Contact</Link>
            </nav>



        </header>
    )
}

export default Header