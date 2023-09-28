import React from 'react'

const Contact = () => {
  return (
    <section className="contact">
      <div className="formm">

        <h3>Get in Touch</h3>
        <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
        <form >
          <input type="text" placeholder='Full Name' />
          <input type="email" placeholder='Email' />
          <input type="tel" placeholder='Contact No' />
          <input className='sbtn' type="submit" value="send" />
        </form>
      </div>


      <div className="map">
        hello
      </div>
    </section>
  )
}

export default Contact