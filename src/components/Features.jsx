import React from 'react'
import Fcard from "./Fcard"
import Pattern from "../images/Pattern.png"

const Features = () => {

    const data = [
        {
            title: 'Innovation and Technology',
            para: 'Advanced algorithms for efficient, effective trading tools.',
            num: '1',
        },

        {
            title: 'Customization and Flexibility',
            para: 'Customizable services for your unique trading style.',
            num: '2',
        },

        {
            title: 'Reliability and Accuracy',
            para: 'Reliable systems for timely alerts and precise backtesting.',
            num: '3',
        },

        {
            title: 'Support',
            para: 'Empowering users with dedicated support and tools.',
            num: '4',
        }



    ]
    return (
        <section className="metrics features">

            <img className='fpat fpat1' src={Pattern} alt="pattern" />
            <img className='fpat fpat2' src={Pattern} alt="pattern" />

            <div className="featcontent">
                <h2>Why Choose Us ?</h2>
                <p>Our cutting-edge technology transforms your strategy into action. <br /> <br />
                    We’re not just a service, we’re your ally in the stock market. Discover the power of smart trading with us.</p>

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