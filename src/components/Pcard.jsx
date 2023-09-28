import React from 'react'
import { BiCheck } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Pcard = ({ title, price, arr }) => {
    return (
        <div className="pcard">
            <p>{title}</p>
            <span>₹ {price}<small>/month</small></span>

            <ul>

                {arr.map((item, index) => {
                    return <li key={index}><BiCheck />{item}</li>
                })}


            </ul>

            <Link to="/">Buy Now</Link>
        </div>
    )
}

export default Pcard