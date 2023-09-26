import React from 'react';
import { Link } from 'react-router-dom';

const Scard = ({ img, title, para }) => {
    return (
        <div className="scard">
            <img src={img} alt={title} />

            <h4>{title}</h4>
            <p>{para}</p>
            <Link to='/'>Learn More</Link>

        </div>
    )
}

export default Scard