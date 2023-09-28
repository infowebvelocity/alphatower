import React from 'react'
import Metrics from './Metrics'
import Callback from './Callback'
import Service from './Service'
import Features from './Features'
import Success from './Success'
import Imgs from "../images/success.png"

const Home = () => {
  return (

    <>
      <section className="home">

        <h1>100% Automated Trading Platform</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Aliquet faucibus .</p>

        <div className="btn">
          <a href="">Get a Quote</a>
          <a href="">Learn More</a>
        </div>

      </section>


      <section className="sec3">
        <Features />
      </section>

      <section className="sec2">
        <Success image={Imgs} title="Our Success Story" para1=" Being Strategic, Our developer is sufficiently skilled to trick the software and have the necessary programming and well back testing capacity." para2=" We aimed to furnish consistent access to market participants with secure and straight forward innovation solutions. We are capable with the trading software and programming of strategies. We execute our work with professional staff who have an incredible information on trading principles, have a good understanding of financial calculations,basic statistics and computing trading execution measurements."/>
      </section>

      <section className="sec2">
        <Metrics />
      </section>




      <section className="sec3">
        <Service />
      </section>

      <section className="sec3">
        <Callback />
      </section>

    </>
  )
}

export default Home