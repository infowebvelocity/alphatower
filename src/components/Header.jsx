import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { IoMdMenu, IoIosClose } from "react-icons/io";

const Header = () => {

    const [open, setOpen] = useState(false)

    console.log(open)

    return (
        <header className="header">

            <div className="logo">
                <Link to="/"><h1>ALPHATOWER</h1></Link>
            </div>

            <nav className={open ? "nav open" : "nav closee"}>
                <div className="close">
                    <IoIosClose onClick={() => setOpen(!open)} />
                </div>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <div className="menu">
                <IoMdMenu onClick={() => setOpen(!open)} />
            </div>

        </header>
    )
}

export default Header