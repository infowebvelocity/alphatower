import React from 'react'
// import Metrics from './Metrics'
import Callback from './Callback'
import Service from './Service'
import Features from './Features'
import Success from './Success'
import Imgs from "../images/success.png"


const Home = () => {

  function handleClick() {
    window.scroll(0, 0)
  }

  return (

    <>
      <section className="home">

        <h1>Empowering your trading journey.</h1>
        <p>Revolutionize your stock market experience with us.</p>

        <div className="btn">
          <a onClick={handleClick} href="/contact">Get a Quote</a>
          <a onClick={handleClick}  href="/services">Learn More</a>
        </div>

      </section>

      <section className="sec2">
        <Service />
      </section>

      <section className="sec3">
        <Features />
      </section>

      <section className="sec4">
        <Success classs={"success"} image={Imgs} title="Our Success Story" para1="One of our notable achievements was automating a strategy for a client that sends alerts on Telegram. This was a game-changer for the client, enabling them to receive timely trading signals directly on their preferred platform. The automation of this strategy not only streamlined their trading process but also allowed them to respond swiftly to market changes." para2="We successfully automated a strategy for a client, eliminating manual intervention and ensuring seamless trading. This strategy automatically places buy/sell orders, increasing accuracy and efficiency. Our success stories reflect our commitment to innovative and effective trading solutions." />
      </section>


      {/* <section className="sec2">
        <Metrics />
      </section> */}


      <section className="sec5">
        <Callback />
      </section>

    </>
  )
}

export default Home