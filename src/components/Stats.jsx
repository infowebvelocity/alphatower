import React from 'react'

const Stats = ({ title, para }) => {
    return (
        <div className="stats">
            <h3>{title}</h3>
            <p>{para}</p>
        </div>
    )
}

export default Stats