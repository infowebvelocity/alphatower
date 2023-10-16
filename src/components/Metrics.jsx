import React from 'react'
import Stats from "./Stats"

const Metrics = () => {

    const data = [
        {
            title: '235.000',
            para: 'projects completed'
        },

        {
            title: '19,895',
            para: 'Customers'
        },

        {
            title: '7485962',
            para: 'Website Visitors'
        },

        {
            title: '384569',
            para: 'Call Back Requests'
        }



    ]
    return (
        <section className="metrics">

           
            <h2>Our Metrics Tell Our Story</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Elit massa morbi eget velit in mauris. Porta risus placerat nunc nullam felis. Est in vitae velit eu lectus elit risus ac magna a.</p>

            <div className="statscon">

                {data.map((item, index) => {
                    return <Stats key={Math.random() * Math.random()} title={item.title} para={item.para} />
                })}



            </div>

        </section>
    )
}

export default Metrics