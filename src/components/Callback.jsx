import React, { useState } from 'react';
import Pattern from "../images/Pattern.png"
import axios from 'axios';

const Callback = () => {

  const [formData, setFormData] = useState({
    phoneNo: '',
    email: '',
    name: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = 'https://492nso75d3.execute-api.us-east-1.amazonaws.com/prod/storeContactDetails';

    const authToken = 'vpadd!@#';

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          Authorization: authToken,
        },
      });
      console.log('Data sent successfully:', response.data);
      // You can add logic here to handle the response or show a success message.
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code that falls out of the range of 2xx
        console.error('Server responded with an error:', error.response.data);
        console.error('Status Code:', error.response.status);
      } else if (error.request) {
        // The request was made, but no response was received (e.g., network error)
        console.error('No response received from the server:', error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error setting up the request:', error.message);
      }
      // You can add logic here to handle errors or show an error message.
    }
  };

  return (
    <section className="metrics">

      <img className='pat1' src={Pattern} alt="pattern" />
      <img className='pat2' src={Pattern} alt="pattern" />

      <h2>Request a Callback</h2>
      <p>Step into the future of trading with us. Enter your details and let our algorithms do the heavy lifting for you!</p>

      <form className='form' onSubmit={handleSubmit} >
        <label>
          Full Name
          <input type="text" name="name" onChange={handleChange} value={formData.name} />
        </label>

        <label>
          Email
          <input type="email" name="email" onChange={handleChange} value={formData.email} />
        </label>

        <label>
          Contact No
          <input type="tel" name="phoneNo" onChange={handleChange} value={formData.phoneNo} />
        </label>

        <input className='btn' type="submit" value='Send' />
      </form>



    </section>
  )
}

export default Callback