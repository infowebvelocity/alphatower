import React from 'react'
import Pattern from "../images/Pattern.png"
const Callback = () => {
  return (
    <section className="metrics">

      <img className='pat1' src={Pattern} alt="pattern" />
      <img className='pat2' src={Pattern} alt="pattern" />

      <h2>Request a Callback</h2>
      <p>Step into the future of trading with us. Enter your details and let our algorithms do the heavy lifting for you!</p>

      <form className='form'>
        <label>
          Full Name
          <input type="text" />
        </label>

        <label>
          Email
          <input type="email" />
        </label>

        <label>
          Contact No
          <input type="tel" />
        </label>

        <input className='btn' type="submit" value='Send' />
      </form>



    </section>
  )
}

export default Callback