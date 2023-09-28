import React from 'react'
import Success from './Success'
import Imgs from "../images/success.png"
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
      <Success image={Imgs} title="Our Services" para1="Lorem ipsum dolor sit amet consectetur. Venenatis fringilla fringilla congue pellentesque tempus malesuada convallis. Lacus non egestas mattis orci. Interdum." />

      <div className="pricingcon">
        <h3>Ready to get started?</h3>

        <div className="pcardcon">

          {data.map((item, index) => {
            return <Pcard key={index} title={item.title} price={item.price} arr={item.list} />
          })}



        </div>
      </div>
    </section>
  )
}

export default Pricing