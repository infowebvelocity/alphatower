import React from 'react';
import { Link } from 'react-router-dom'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagramAlt } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <header className="footer">

      <div className="top">

        <div className="flogo">
          <h1>ALPHATOWER</h1>

          <div>
            <h4>Email</h4>
            <p>hello@logoipsum.com</p>
          </div>

          <div>
            <h4>Address</h4>
            <p>26 A, Chandra Nagar, First Floor Indore M.P.- 452011</p>
          </div>

          <div>
            <h4>Phone</h4>
            <p>+91 9855759850</p>
          </div>

        </div>

        <div className="flink">
          <h3>Quick links</h3>


          <nav className="fnav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">FAQ</Link>



          </nav>
        </div>


        <div className="flink">
          <h3>Our Services</h3>


          <nav className="fnav">
            <Link to="/">API Bridge</Link>
            <Link to="/about">Algo Trading</Link>
            <Link to="/services">MQL Development</Link>

          </nav>
        </div>



        <div className="fbtn">
          <span><IoIosArrowUp /></span>
        </div>

      </div>

      <div className="bottom">

        <p>
          Copyright © 2023. Alphatower. All rights reserved.
        </p>

        <div className="icons">
          <BiLogoFacebook />
          <BiLogoTwitter />
          <BiLogoInstagramAlt />
        </div>

      </div>

    </header>
  )
}

export default Footer