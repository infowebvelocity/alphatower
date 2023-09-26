import React from 'react'
import Metrics from './Metrics'

const Home = () => {
  return (

    <>
      <section className="home">
        <div className="content">
          <h1>100% Automated Trading Platform</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Aliquet faucibus .</p>

          <div className="btn">
            <a href="">Get a Quote</a>
            <a href="">Learn More</a>
          </div>
        </div>
      </section>

      <section className="sec2">
        <Metrics />
      </section>
    </>
  )
}

export default Home