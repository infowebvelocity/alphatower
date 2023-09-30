import React from 'react'
import card from "../images/card1.png"
import card1 from "../images/card2.png"
import card2 from "../images/card3.png"
import card3 from "../images/card4.png"
import Frame from "../images/frame.png"
import Scard from "./Scard"

const Service = () => {
  return (
    <section className="service">


      <img className='frame frame1' src={Frame} alt="frame" />
      <img className='frame frame2' src={Frame} alt="frame" />

      {/* <span>Services</span> */}
      <h2>What We offer</h2>

      <div className="scon">
        <Scard title="API Bridge" img={card3} para="Lorem ipsum dolor sit amet consectetur. Velit diam bibendum ." />
        <Scard title="Algo Trading" img={card2} para="Lorem ipsum dolor sit amet consectetur. Velit diam bibendum ." />
        <Scard title="Auto Buy Sell Signal" img={card1} para="Lorem ipsum dolor sit amet consectetur. Velit diam bibendum ." />
        <Scard title="Auto Buy Sell Signal" img={card1} para="Lorem ipsum dolor sit amet consectetur. Velit diam bibendum ." />

      </div>

    </section>
  )
}

export default Service