import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import Map from '../images/map.png';

const Contact = () => {
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
    <section className="contact">
      <div className="formm">
        <h3>Get in Touch</h3>
        <p>
          Have questions or ready to explore the possibilities of automated trading with us? We're here to assist you. Contact us today for personalized guidance and solutions tailored to your trading needs
        </p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} value={formData.name} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
          <input type="tel" name="phoneNo" placeholder="Contact No" onChange={handleChange} value={formData.phoneNo} />
          <input className="sbtn" type="submit" value="Send" />
        </form>
      </div>

      <div className="map">
        <img src={Map} alt="map" />
      </div>
    </section>
  );
};

export default Contact;
