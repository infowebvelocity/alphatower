import React from 'react'
import Success from './Success'
import Imgs from "../images/success.png"

const About = () => {
  return (
    <section className="about">

      <Success image={Imgs} title="Who Are We?" para1="Start Algo has been a pioneer in providing algorithmic trading solutions in India, Start Algo is a significant and well-known company in the Indian algorithmic solutions market." para2="At Start Algo, we recognise the value of speed, accuracy, and precision in transaction execution. The best trade executions and order management are guaranteed by our low latency front end in combination with unique and capable algorithmic algorithms." />

      <Success image={Imgs} title="Our Success Story" para1=" Being Strategic, Our developer is sufficiently skilled to trick the software and have the necessary programming and well back testing capacity." para2=" We aimed to furnish consistent access to market participants with secure and straight forward innovation solutions. We are capable with the trading software and programming of strategies. We execute our work with professional staff who have an incredible information on trading principles, have a good understanding of financial calculations,basic statistics and computing trading execution measurements." />

      <Success image={Imgs} title="Our Mission" para1="To identify industry's trading needs and provide low latency, high frequency, algo trading software, and other front end solutions." />

      <Success image={Imgs} title="Our VISION" para1="Customer Relationship - Our customers are Start Algo most important business partner. They do not depend on us, we depend on them. They are not an interruption of our work; they are the purpose of it. They are not an outsider in our business, they are part of it. We do them no favours: they are doing us a favour by giving us the opportunity to work for them." />

      <Success image={Imgs} title="Our Goal" para1="To service and support our customers with the utmost level of professionalism." />

    </section>
  )
}

export default About