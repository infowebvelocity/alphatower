import React from 'react'
import Pattern from "../images/frame.png"

const Success = ({ image, title, para1, para2, classs, bhead, bpara }) => {
    return (
        <section className={classs} >


            <img className='pattern p1' src={Pattern} alt="Pattern img" />
            <img className='pattern p2' src={Pattern} alt="Pattern img" />

            <div className="img">
                <img src={image} alt="success img" />
            </div>

            <div className="content">
                <h2 className={bhead}>{title}</h2>
                <p className={bpara}>{para1}</p>
                <p className={bpara}>{para2}</p>

            </div>


        </section>
    )
}

export default Success