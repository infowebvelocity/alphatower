import React from 'react'
import Success from './Success'
import Imgs from "../images/success.png"

const Services = () => {
  return (
    <section className="about">

      <Success image={Imgs} title="Our Services" para1="We offer a comprehensive suite of trading solutions. Our services are designed to empower your trading and fuel your success. Explore our offerings and find the perfect fit for your trading needs." />

      <Success image={Imgs} title="Buy/Sell Bots" para1="Welcome to the future of stock trading. Our company develops sophisticated bots that automate the buying and selling of stocks directly in your trading demat account. These bots operate based on intelligent signals, taking the guesswork out of trading. With our service, you can sit back and let the bots manage your demat account, making your trading experience seamless and efficient. Join us in revolutionizing the stock market." />

      <Success image={Imgs} title="Buy/Sell Alerts" para1="Stay ahead with our alert system. We provide personalized alerts on WhatsApp, Telegram, and our mobile app based on your unique stock market strategy. Never miss a trading opportunity with our timely alerts. Experience the convenience of having market updates at your fingertips. Join us in making trading more accessible and less stressful." />

      <Success image={Imgs} title="Backtesting" para1="Revolutionizing trading with our backtesting systems. We provide a robust platform for testing your trading strategies against historical data. Our service allows you to evaluate the effectiveness of your strategy before deploying it in the live market. Experience the confidence of tested strategies with us. Join us in making trading a science, not a gamble." />

      <Success image={Imgs} title="Strategy Development" para1="Transforming trading with automation. Our company specializes in automating stock market trading strategies for our clients. We take your strategy and turn it into an automated system that trades on your behalf, freeing you from the need to constantly monitor the markets. Experience the efficiency of automated trading with us. Join us in making stock market trading simpler and smarter." />

    </section>
  )
}

export default Services