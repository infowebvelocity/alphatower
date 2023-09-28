import React from 'react'
import Fcard from "./Fcard"
import Pattern from "../images/Pattern.png"

const Features = () => {

    const data = [
        {
            title: 'Automated Functioning',
            para: 'Automated Buy And Sell Signal With Target.',
            num: '1',
        },

        {
            title: 'Markets & Instruments',
            para: 'Best indicators for market analysis',
            num: '2',
        },

        {
            title: 'Order Management and Execution Algos',
            para: 'Improving Order Entry Speed and Diversify Trading.',
            num: '3',
        },

        {
            title: 'Strategy Development',
            para: 'We develop your strategy with our code.',
            num: '4',
        }



    ]
    return (
        <section className="metrics features">

            <img className='fpat fpat1' src={Pattern} alt="pattern" />
            <img className='fpat fpat2' src={Pattern} alt="pattern" />

            <div className="featcontent">
                <h2>Why Choose Us ?</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Suspendisse suspendisse tempor et ipsum sit egestas nunc. Diam in cum a in.</p>

            </div>


            <div className="featcon">

                {data.map((item, index) => {
                    return <Fcard key={Math.random() * Math.random()} num={item.num} title={item.title} para={item.para} />
                })}



            </div>

        </section>
    )
}

export default Features