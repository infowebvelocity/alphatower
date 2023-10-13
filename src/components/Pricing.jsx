import React from 'react'
import Success from './Success'
import pricingimg from "../images/pricing.png"
import Pcard from './Pcard'
const Pricing = () => {

  const data = [
    {
      title: 'Monthly',
      price: '15000',
      list: ["Automated", "TradeIndices", "Whatsapp Support", "Remote Support", "1 Strategy", "1000 rs Maintenance"]
    },

    {
      title: 'Quaterly',
      price: '50000',
      list: ["Automated", "TradeIndices", "Whatsapp Support", "Remote Support", "1 Strategy", "1000 rs Maintenance"]
    },

    {
      title: 'Yearly',
      price: '150000',
      list: ["Automated", "TradeIndices", "Whatsapp Support", "Remote Support", "1 Strategy", "1000 rs Maintenance"]
    },
  ]
  return (
    <section className="pricing">
      <Success classs="success pricingbg " bpara={'bpara'} bhead={'bhead'} image={pricingimg} title="Our Pricings" para1="Our pricing strategy is designed to align with your success. We believe in transparency and offer affordable rates to capitalize on market opportunities and boost your trading strategies" />

      <div className="pricingcon">
        <h3>Prices Starting from Rs. 15,000 Onwards</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Tortor vitae senectus nunc ut volutpat facilisis consequat nullam. Orci posuere in quis ut. Nunc id faucibus eu nisl integer netus nibh. Viverra nibh ipsum etiam sit in.</p>

        <div className="btn">
          <a href="">Get a Quote</a>
          <a href="">Learn More</a>
        </div>

        {/* <div className="pcardcon">

          {data.map((item, index) => {
            return <Pcard key={index} title={item.title} price={item.price} arr={item.list} />
          })}



        </div> */}
      </div>
    </section>
  )
}

export default Pricing