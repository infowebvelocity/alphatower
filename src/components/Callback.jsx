import React from 'react'
import Pattern from "../images/Pattern.png"
const Callback = () => {
  return (
    <section className="metrics">

      <img className='pat1' src={Pattern} alt="pattern" />
      <img className='pat2' src={Pattern} alt="pattern" />

      <h2>Request a Callback</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Elit massa morbi eget velit in mauris. Porta risus placerat nunc nullam felis. Est in vitae velit eu lectus elit risus ac magna a.</p>

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