import React from 'react'
import Metrics from './Metrics'
import Callback from './Callback'
import Service from './Service'

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