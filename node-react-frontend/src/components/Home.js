// src/components/Home.js
import React, { useState }  from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import {Carousel, Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
// import Typical from 'react-typical'; // Importing the Typical library
import Typewriter from 'typewriter-effect';

const BannerCarousel = () => {
  const images = ['home-bg.jpg'];

  // Typewriter hook


  return (
    <section id='home_carousel'>
       <Carousel data-bs-theme="dark">
      
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel_banner"
            src={`/images/${image}`}  // Path to the images in the public folder
            alt={`Slide ${index + 1}`}
            height={830}
          
          />
         
          <Carousel.Caption className='text-left'>
            {/* Static text */}
            <h1>Welcome to My Portfolio</h1>

           <div className="Container"> 
            <Row className='align-items-center mx-0'>
              <Col md={6} className="home-header">
               < div className = "caption_text text-start" > 
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> RAVI JAIN</strong>
                </h1>

                <div style={{ padding:`15px 0px`, textAlign: "left", fontSize: 32 }}>
                <Typewriter
                  options={{
                    strings: [
                      "A Shopify Developer",
                      "Frontend Developer",
                      "Backend Developer",
                      "CMS Developer",
                      "Freelancer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}  // Type once
                />
                </div>
                <a href={`/Assets/Soumyajit_Behera-BIT_MESRA.pdf`} download className="btn btn-primary custom_btn mt-3 download-btn"><span>Download CV </span> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                   <path d="M12 16V4M12 16L9 13M12 16L15 13M7 9H6.2C5.0799 9 4.51984 9 4.09202 9.21799C3.71569 9.40973 3.40973 9.71569 3.21799 10.092C3 10.5198 3 11.0799 3 12.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V12.2C21 11.0799 21 10.5198 20.782 10.092C20.5903 9.71569 20.2843 9.40973 19.908 9.21799C19.4802 9 18.9201 9 17.8 9H17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                </div>
              </Col>

              <Col md={6} style={{ paddingBottom: 20 }}>
                <img src={`/Assets/home-main.svg`}
                  alt="home pic"
                  className="img-fluid"
                  // style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
           </div>

            
          </Carousel.Caption>
         
        </Carousel.Item>
      ))}
    </Carousel>
 
   
    </section>
  );
};

const BannerHome = () => {
  // const images = ['home-bg.jpg'];

  // Typewriter hook
  return (
    <section id='home_carousel'>
          <Container>
           <h1>Welcome to My Portfolio</h1>
            <Row className='align-items-center mx-0'>
              <Col md={6} className="home-header">
               <div className = "caption_text text-start" > 
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> RAVI JAIN</strong>
                </h1>

                <div style={{ padding:`15px 0px`, textAlign: "left", fontSize: 32 }}>
                  <Typewriter
                    options={{
                      strings: [
                        "A Shopify Developer",
                        "Frontend Developer",
                        "Backend Developer",
                        "CMS Developer",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                    }}  // Type once
                  />
                </div>
                <a href={`/Assets/Soumyajit_Behera-BIT_MESRA.pdf`}  download className="btn btn-primary custom_btn mt-3 download-btn"><span>Download CV </span> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                   <path d="M12 16V4M12 16L9 13M12 16L15 13M7 9H6.2C5.0799 9 4.51984 9 4.09202 9.21799C3.71569 9.40973 3.40973 9.71569 3.21799 10.092C3 10.5198 3 11.0799 3 12.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V12.2C21 11.0799 21 10.5198 20.782 10.092C20.5903 9.71569 20.2843 9.40973 19.908 9.21799C19.4802 9 18.9201 9 17.8 9H17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                </div>
              </Col>

              <Col md={6} style={{ paddingBottom: 20 }} className='img_box'>
                <img
                  src={`/Assets/home-main.svg`}
                  alt="home pic"
                  className="img-fluid home_img"
                  // style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
    </section>
  );
};

const AboutSection = () => {

  return (
    <section className="about py-50" id='about'>
      <div className='container'>
        <div className='row mx-0 align-items-center'>
          <div className='col-md-6'>
            <ScrollAnimation animateIn="fadeInLeft">
              <div className='img_box'>
                <img src={`/Assets/about.png`}
                      alt="home pic"
                      className="img-fluid"
                      style={{ maxHeight: "100%" }}
                    />
              </div>
            </ScrollAnimation>
          </div>
          <div className='col-md-6'>
            <ScrollAnimation animateIn="fadeInRight">
              <div className='text_box text-start'>
                  <span className='text_box_heading'>About Me</span>
                  <h2> Hi, I'm <strong>Ravi Jain,</strong> </h2>
                  <p>
                    A passionate web developer specializing in building modern, responsive websites and web applications. As a freelancer,
                    I’m dedicated to delivering high-quality solutions with clean, user-friendly designs. 
                    I’m always eager to learn new technologies and take on exciting projects that push my skills further.
                  </p>
                  <h2>Contact Information:</h2>
                    <ul className='info_list'>
                      <li className='info_item'><span className='label'><strong>Email : </strong></span> <a href='mailto:ravijain7154@gmail.com' className='mail'>ravijain7154@gmail.com</a></li>
                      <li className='info_item'><span className='label'><strong>Phone : </strong></span> <a href='tel:+917073936166' className='mail'>+917073936166</a></li>
                      <li className='info_item'><span className='label'><strong>Date of Birth : </strong></span><span className=''>March 25, 1999</span> </li>
                      <li className='info_item'><span className='label'><strong>Role : </strong></span><span className=''>Freelancer & Web Developer</span></li>
                    </ul>
                  <p>
                    I love coding and always eager to learn new technologies.
                  </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceSection = () => {

  return (
    <section className="service py-50" id='service'>
      
      <div className='container'>
        <ScrollAnimation animateIn="fadeIn" delay={0.1}>
          <span className='text_box_heading'>Services</span>
          <h2>Crafting Impactful Web Experiences.</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' delay={0.25}>
        <div className='row mx-0 align-items-center mt-5'>
          <div className='col-md-3'>
            <div className='card pt-3 custom_card'>
              <div className='img_box'>
                <img
                      src={`/Assets/about.png`}
                      alt="home pic"
                      className="img-fluid"
                      style={{ maxHeight: "100%" }}
                    />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary custom_btn">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card pt-3 custom_card'>
              <div className='img_box'>
                <img
                      src={`/Assets/about.png`}
                      alt="home pic"
                      className="img-fluid"
                      style={{ maxHeight: "100%" }}
                    />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary custom_btn">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card pt-3 custom_card'>
              <div className='img_box'>
                <img
                      src={`/Assets/about.png`}
                      alt="home pic"
                      className="img-fluid"
                      style={{ maxHeight: "100%" }}
                    />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary custom_btn">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card pt-3 custom_card'>
              <div className='img_box'>
                <img
                      src={`/Assets/about.png`}
                      alt="home pic"
                      className="img-fluid"
                      style={{ maxHeight: "100%" }}
                    />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary custom_btn">Go somewhere</a>
              </div>
            </div>
          </div>
          
          
        </div>
        </ScrollAnimation>
        <a href="#" className="btn btn-primary custom_btn mt-5 exp-btn">Explore</a>
      </div>
     
    </section>
  );
};

const ProjectsSection = () => {

  const [key, setKey] = useState('0'); // Default to the first tab

  // Sample data for dynamic tabs
  const projectData = [
    {
      title: 'All',
      projects: [
        { 
          title: 'Web Project 1',
          description: 'Description for Web Project 1. Focuses on web development.',
          imgSrc: '/Assets/about.png', // Replace with actual image
          link: '#',
        },
        {
          title: 'Web Project 2',
          description: 'Description for Web Project 2. A full-stack application.',
          imgSrc: '/Assets/about.png', // Replace with actual image
          link: '#',
        },
        {
          title: 'Web Project 3',
          description: 'Description for Web Project 3. E-commerce website.',
          imgSrc: '/Assets/about.png', // Replace with actual image
          link: '#',
        },
        {
          title: 'Web Project 4',
          description: 'Description for Web Project 4. Blog platform with React.',
          imgSrc: '/Assets/about.png', // Replace with actual image
          link: '#',
        },
        {
          title: 'Web Project 5',
          description: 'Description for Web Project 5. Personal portfolio website.',
          imgSrc: '/Assets/about.png', // Replace with actual image
          link: '#',
        },
      ]
    },
    {
      title: 'Project 2',
      projects: [
        { 
          title: 'Mobile Project 1',
          description: 'Description for Web Project 1. Focuses on modern web development.',
          imgSrc: '/Assets/about.png', // Replace with actual image
          link: '#',
        },
        { 
          title: 'Mobile Project 2',
          description: 'Description for Web Project 1. Focuses on modern web development.',
          imgSrc: '/Assets/about.png', // Replace with actual image
          link: '#',
        },
        { 
          title: 'Mobile Project 3',
          description: 'Description for Web Project 1. Focuses on modern web development.',
          imgSrc: '/Assets/about.png', // Replace with actual image
          link: '#',
        }
      ]
    },
    {
      title: 'Project 3',
      projects: [
        { 
          title: 'Web Project 1',
          description: 'Description for Web Project 1. Focuses on modern web development.',
          imgSrc: '/Assets/about.png', // Replace with actual image
          link: '#',
        }
      ]
    },
    {
      title: 'Project 4',
      projects: [
        { 
          title: 'Web Project 1',
          description: 'Description for Web Project 1. Focuses on modern web development.',
          imgSrc: '/Assets/about.png', // Replace with actual image
          link: '#',
        }
      ]
    },
    // Add more projects as necessary
  ];

  return (
    <section className="project py-50" id='myproject'>
      <div className='container'>
        <ScrollAnimation animateIn='fadeIn' delay={0.1}>
         <span className='text_box_heading mx-auto'>Projects</span>
         <h2 className='subtitle mb-5'>Crafting Impactful Web Experiences.</h2>
        </ScrollAnimation>
        <Tabs
          id="ProjectTab"
          className="custom_tab justify-content-center border-0 gap-5"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          variant = 'pills'
        >
          {projectData.map((project, index) => (
            <Tab eventKey={index.toString()} title={project.title} key={index}>
              <div className="row mx-0 align-items-center mt-2">
                {project.projects.map((projectCard, projectCardIndex) => (
                  <div className="col-md-3 mt-3" key={projectCardIndex}>
                    <div className="card pt-3 custom_card">
                      <div className="img_box">
                        <img
                          src={projectCard.imgSrc}
                          alt={projectCard.title}
                          className="img-fluid"
                          style={{ maxHeight: '100%' }}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{projectCard.title}</h5>
                        <p className="card-text">{projectCard.description}</p>
                        <a href={projectCard.link} className="btn btn-primary custom_btn">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
            </Tab>
          ))}
        </Tabs>
        <a href="#" className="btn btn-primary custom_btn mt-5 exp-btn">Explore</a>
      </div>
    </section>
  );
};

const ContactSection = () => {
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
        setStatus('Message sent successfully !');
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
                <ScrollAnimation animateIn='fadeInRight' delay={0.25}>
                  <h2 className='conatct-title'>Let’s Get Started!</h2>
                  <h4 className='contact_text'>
                    Feel free to reach out for any inquiries or to discuss your upcoming project.
                  </h4>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className='row mx-0'>
            <div className='col-md-4'>
              <ScrollAnimation animateIn='fadeInLeft' delay={0.25}>
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
                      <a className="dribbble" href="/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="1em" height="1em" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248s248-111.252 248-248S392.748 8 256 8m163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955c-6.984-1.477-77.018-15.682-147.502-6.818c-5.752-14.041-11.181-26.393-18.617-41.614c78.321-31.977 113.818-77.482 118.284-83.523M396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519c-34.712-63.776-73.185-116.168-79.04-124.008c67.176-16.193 137.966 1.27 190.061 47.489m-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509c-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62M44.17 256.323c0-2.166.043-4.322.108-6.473c9.268.19 111.92 1.513 217.706-30.146c6.064 11.868 11.857 23.915 17.174 35.949c-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323m81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756c29.74 77.283 42.039 142.053 45.189 160.638c-68.112 29.013-150.015 21.053-212.768-27.882m248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033c66.38-10.626 124.7 6.768 131.947 9.055c-9.442 58.941-43.273 109.844-90.795 141.978"></path>
                        </svg>
                      </a>
                      <a className="linkedin" href="/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="0.88em" height="1em" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>
                      </a>
                  </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className='col-md-8'>
              <ScrollAnimation animateIn='fadeInDown' delay={0.25}>
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
                </ScrollAnimation>
                {status && <p>{status}</p>}
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

function Home() {
  return (
    <div className="home">
      {/* <BannerCarousel /> */}
      <BannerHome />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <ContactSection />
      
    </div>
  );
}

export default Home;
