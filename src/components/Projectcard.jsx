import React from 'react'

const Projectcard = ({ img, title, para }) => {
    return (
        <div className="projectcard">
            <div className="imgsec">
                <img src={img} alt="" />
            </div>

            <div className="content">
                <h2>{title}</h2>
                <p>{para}</p>
            </div>
        </div>
    )
}

export default Projectcard