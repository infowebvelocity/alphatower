import React, { useState } from 'react';
import axios from 'axios';
import Success from './Success'
import contactimg from "../images/contact.png"
import { BiLogoInstagramAlt, BiLogoGmail, BiSolidPhone, BiSolidMap, BiSolidGrid, BiLogoLinkedinSquare } from "react-icons/bi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <section className="contact">
      <Success classs="success contactbg" bpara={'bpara'} bhead={'bhead'} image={contactimg} title="Contact Us" para1="Have questions or ready to explore the possibilities of automated trading with us? We're here to assist you. Contact us today for personalized guidance and solutions tailored to your trading needs." />

      <div className="concon">
        <div className="formm">
          <h3>Get in Touch</h3>
          <p>
            We would love to hear from you! Reach out to us with any questions, inquiries, or feedback you may have.
          </p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} value={formData.name} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
            <input type="tel" name="phoneNo" placeholder="Contact No" onChange={handleChange} value={formData.phoneNo} />
            <input className="sbtn" type="submit" value="Send" />
          </form>
        </div>

        <div className="map">
          <div className="cdata">
            <BiLogoGmail />
            <h3>Email</h3>
            <p>contact@alphatower.in</p>
          </div>

          <div className="cdata">
            <BiSolidPhone />
            <h3>Phone</h3>
            <p>+91 9321609211</p>
          </div>

          <div className="cdata">
            <BiSolidMap />
            <h3>Office</h3>
            <p>1st Floor, Office No - 116,
              RR Reality, Near Axis Bank, Lbs Marg, Bhandup (W)</p>
          </div>

          <div className="cdata">
            <BiSolidGrid />
            <h3>Socials</h3>
            <div>
              <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/company/alphatowerofficial/"><BiLogoLinkedinSquare /></a>
              <a target='_blank' rel="noreferrer" href="https://www.instagram.com/alphatowerofficial/?igshid=MzRlODBiNWFlZA%3D%3D"><BiLogoInstagramAlt /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
