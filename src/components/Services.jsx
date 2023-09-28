import React from 'react'
import Success from './Success'
import Imgs from "../images/success.png"

const Services = () => {
  return (
    <section className="about">

      <Success image={Imgs} title="Our Services" para1="Lorem ipsum dolor sit amet consectetur. Venenatis fringilla fringilla congue pellentesque tempus malesuada convallis. Lacus non egestas mattis orci. Interdum." />

      <Success image={Imgs} title="API Bridge" para1="API Bridge is a set of programming interface, pincode and Places is first programming interface. API Bridge permits you to algo trade with various stages like MT4." />

      <Success image={Imgs} title="Algo Trading" para1="We will provide you the best platform for doing Auto Trading with your own Intra day and positional based strategies which will save your money and time Controlling your" />

      <Success image={Imgs} title="MQL Developments" para1="We use MetaTrader Software to make automated trading softwares and financial market indicators." />

      <Success image={Imgs} title="IT Services" para1="IT services encompass a wide range of activities aimed at supporting and enhancing an organization's use of technology. They help ensure the smooth operation, security." />

    </section>
  )
}

export default Services