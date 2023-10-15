import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";

const Fcard = ({ num, title, para }) => {
    return (
        <div className="fcard">
            <span>{num}</span>
            <h3>{title}</h3>
            <p>{para}</p>
            <Link to='/services'>Learn More <BsArrowRight/> </Link>

        </div>
    )
}

export default Fcard