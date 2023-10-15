import React from 'react';
import { Link } from 'react-router-dom';

const Scard = ({ img, title, para }) => {

    function handleClick() {
        window.scroll(0, 0)
    }
    return (
        <div className="scard">
            <img src={img} alt={title} />

            <h4>{title}</h4>
            <p>{para}</p>
            <Link onClick={handleClick} to='/services'>Learn More</Link>

        </div>
    )
}

export default Scard