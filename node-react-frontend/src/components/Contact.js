// src/components/Contact.js
import React, { useState } from 'react';
// import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const contactData = {
      name,
      email,
      message,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Ensure the Content-Type is set to JSON
        },
        body: JSON.stringify(contactData), // Send the contact data as JSON
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Handle the success response
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.message || errorData);
        setStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section className="contact py-50" id='contact'>
       <div className='container'>
        <div className='contact_box'>
          <div className='row mx-0'>
            <div className='col-md-4'></div>
            <div className='col-md-8'>
              <div className='conatct_content_box text-start'>
                <h2 className='conatct-title'>Let’s Get Started!</h2>
                <h4 className='contact_text'>
                  Feel free to reach out for any inquiries or to discuss your upcoming project.
                </h4>
              </div>
            </div>
          </div>
          <div className='row mx-0'>
            <div className='col-md-4'>
            <div className='img_box mb-3'>
              <img
                    src={`/Assets/about.png`}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "100%" }}
                  />
            </div>
            <div className='contact_info text-start'>
              <div className='contact_info_in'>
                <label>Email:</label>
                <a href='mailto:ravijain7154@gmail.com' className=''>ravijain7154@gmail.com</a>
              </div>
              <div className='contact_info_in'>
                <label>Phone:</label>
                <a href='tel:7073936166' className=''>+91 7073936166</a>
              </div>
              <div className='contact_info_in social'>
                <div className="social-icon">
                  <a className="facebook" href="/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="0.63em" height="1em" viewBox="0 0 320 512">
                    <path fill="currentColor" d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </a>
                  <a class="dribbble" href="/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="1em" height="1em" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248s248-111.252 248-248S392.748 8 256 8m163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955c-6.984-1.477-77.018-15.682-147.502-6.818c-5.752-14.041-11.181-26.393-18.617-41.614c78.321-31.977 113.818-77.482 118.284-83.523M396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519c-34.712-63.776-73.185-116.168-79.04-124.008c67.176-16.193 137.966 1.27 190.061 47.489m-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509c-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62M44.17 256.323c0-2.166.043-4.322.108-6.473c9.268.19 111.92 1.513 217.706-30.146c6.064 11.868 11.857 23.915 17.174 35.949c-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323m81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756c29.74 77.283 42.039 142.053 45.189 160.638c-68.112 29.013-150.015 21.053-212.768-27.882m248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033c66.38-10.626 124.7 6.768 131.947 9.055c-9.442 58.941-43.273 109.844-90.795 141.978"></path>
                    </svg>
                  </a>
                  <a class="linkedin" href="/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="0.88em" height="1em" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
              </div>
              </div>
            </div>
            </div>
            <div className='col-md-8'>
            
              <form className="custom_form" onSubmit={handleSubmit}>
                <div className='form-group'>
                      <label>Name</label>
                      <input type='text' value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className='form-group'>
                      <label>Email</label>
                      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className='form-group'>
                    <label>Message</label>
                    <textarea 
                      placeholder="Your Message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      className='textarea'
                      required
                    />
                  </div>
                <button className='custom_btn submit_btn' type="submit">Send Message</button>
              </form>
          {status && <p>{status}</p>}
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
