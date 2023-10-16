import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { IoMdMenu, IoIosClose } from "react-icons/io";

const Header = () => {

    const [open, setOpen] = useState(false)

    console.log(open)

    function handleClick() {
        setOpen(!open);
       window.scroll(0,0)
    }

    function handlelogoClick() {
       window.scroll(0,0)
    }


    
    return (
        <header className="header">

            <div className="logo">
                <Link onClick={handlelogoClick} to="/"><h1>ALPHATOWER</h1></Link>
            </div>

            <nav className={open ? "nav open" : "nav closee"}>
                <div className="close">
                    <IoIosClose onClick={() => setOpen(!open)} />
                </div>
                <Link onClick={handleClick} to="/">Home</Link>
                <Link onClick={handleClick} to="/about">About Us</Link>
                <Link onClick={handleClick} to="/services">Services</Link>
                <Link onClick={handleClick} to="/pricing">Pricing</Link>
                <Link onClick={handleClick} to="/contact">Contact</Link>
            </nav>

            <div className="menu">
                <IoMdMenu onClick={() => setOpen(!open)} />
            </div>

        </header>
    )
}

export default Header