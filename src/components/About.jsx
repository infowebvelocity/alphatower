import React from 'react'
import Success from './Success'
import Imgs from "../images/success.png"

const About = () => {
  return (
    <section className="about">

      <Success classs="success pricingbg" bpara={'bpara'} bhead={'bhead'} image={Imgs} title="Who Are We?" para1="Driven by a commitment to excellence, we specialize in automated trading solutions. Join us in navigating the markets with precision and confidence"  />

      <Success classs="success" image={Imgs} title="Our Success Story" para1="Being Strategic, Our developer is sufficiently skilled to trick the software and have the necessary programming and well back testing capacity." para2="We aimed to furnish consistent access to market participants with secure and straight forward innovation solutions. We are capable with the trading software and programming of strategies. We execute our work with professional staff who have an incredible information on trading principles, have a good understanding of financial calculations,basic statistics and computing trading execution measurements." />

      <Success classs="success" image={Imgs} title="Our Mission" para1="To identify industry's trading needs and provide low latency, high frequency, algo trading software." />

      <Success classs="success" image={Imgs} title="Our VISION" para1="Our vision is to reshape the future of trading. We aspire to create a world where traders of all backgrounds can harness the full potential of automation and data analytics to achieve financial success in the ever-evolving markets." />

      <Success classs="success" image={Imgs} title="Our Goal" para1="Our goal is to empower traders to navigate the stock market confidently.
" />

    </section>
  )
}

export default About