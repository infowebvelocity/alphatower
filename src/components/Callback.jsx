import React, { useState } from 'react';
import axios from 'axios';
import {  toast } from 'react-toastify';

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

      setFormData(
        {
          phoneNo: '',
          email: '',
          name: '',
        }
      )
      toast('Data sent successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: 'success'
      });

    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code that falls out of the range of 2xx

        toast(error.response.data, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: 'error'
        });

      } else if (error.request) {

        toast(error.request, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: 'error'
        });
      } else {
       
        toast(error.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: 'error'
        });
      }
      // You can add logic here to handle errors or show an error message.
    }
  };

  return (
    <section className="metrics">

    
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