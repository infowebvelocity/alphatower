import React from 'react'
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
        <Scard title="Buy/Sell Bots" img={card3} para="Smart bots executing orders seamlessly in your demat account." />
        <Scard title="Buy/Sell Alerts" img={card2} para="Personalized stock alerts on WhatsApp, Telegram, Mobile app , etc." />
        <Scard title="Backtesting" img={card1} para="Backtesting trading strategies with precision." />
        <Scard title="Strategy Development" img={card1} para="Automating your stock market trading strategies." />

      </div>

    </section>
  )
}

export default Service