import React from 'react';
import { Link } from 'react-router-dom'
import { BiLogoLinkedinSquare, BiLogoInstagramAlt } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {

  function handleClick() {
    window.scroll(0, 0)
  }


  return (
    <header className="footer">

      <div className="top">

        <div className="flogo">
          <h1>ALPHATOWER</h1>

          <div>
            <h4>Email</h4>
            <a className='btntel' href="mailto:contact@alphatower.in"><p>contact@alphatower.in</p></a>
          </div>

          <div>
            <h4>Address</h4>
            <p>1st Floor, Office No - 116, <br />
              RR Reality, Near Axis Bank,
              Lbs Marg, Bhandup (W)</p>
          </div>

          <div>
            <h4>Phone</h4>
            <a className='btntel' href="tel:+9193216 09211"><p>+91 93216 09211</p></a>
          </div>

        </div>

        <div className="flink">
          <h3>Quick links</h3>


          <nav className="fnav">
            <Link onClick={handleClick} to="/">Home</Link>
            <Link onClick={handleClick} to="/about">About Us</Link>
            <Link onClick={handleClick} to="/services">Services</Link>
            <Link onClick={handleClick} to="/project">Projects</Link>
            <Link onClick={handleClick} to="/pricing">Pricing</Link>
            <Link onClick={handleClick} to="/contact">Contact</Link>


          </nav>
        </div>


        <div className="flink">
          <h3>Our Services</h3>


          <nav className="fnav">
            <Link onClick={handleClick} to="/services">Buy/Sell Bots</Link>
            <Link onClick={handleClick} to="/services">Buy/Sell Alerts</Link>
            <Link onClick={handleClick} to="/services">Backtesting</Link>
            <Link onClick={handleClick} to="/services">Strategy Development</Link>

          </nav>
        </div>



        <div className="fbtn">
          <span onClick={handleClick} ><IoIosArrowUp /></span>
        </div>

      </div>

      <div className="bottom">

        <p>
          Copyright © 2023. Alphatower. All rights reserved.
        </p>

        <div className="icons">
          <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/company/alphatowerofficial/"><BiLogoLinkedinSquare /></a>
          <a target='_blank' rel="noreferrer" href="https://www.instagram.com/alphatowerofficial/?igshid=MzRlODBiNWFlZA%3D%3D"><BiLogoInstagramAlt /></a>
        </div>

      </div>

    </header>
  )
}

export default Footer