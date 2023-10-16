import React from 'react'


const Success = ({ image, title, para1, para2, classs, bhead, bpara }) => {
    return (
        <section className={classs} >



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