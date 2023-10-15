import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";

const Fcard = ({ num, title, para }) => {
    function handleClick() {
        window.scroll(0, 0)
      }
    return (
        <div className="fcard">
            <span>{num}</span>
            <h3>{title}</h3>
            <p>{para}</p>
            <Link onClick={handleClick} to='/services'>Learn More <BsArrowRight/> </Link>

        </div>
    )
}

export default Fcard