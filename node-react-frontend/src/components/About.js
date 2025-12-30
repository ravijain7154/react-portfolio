// src/components/About.js
import React from 'react';

function About() {
  return (
    <section className="about py-5" id='about'>
      <div className='container'>
        <div className='row mx-0 align-items-center'>
          <div className='col-md-6'>
            <div className='img_box'>
              <img
                    src={`/Assets/about.png`}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                  />
            </div>
          </div>
          <div className='col-md-6'>
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
              <div className='contact_info_in social pb-3'>
                <div className="social-icon">
                  <a className="facebook" href="/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="0.63em" height="1em" viewBox="0 0 320 512">
                    <path fill="currentColor" d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </a>
                  <a className="linkedin" href="/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="0.88em" height="1em" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                  <a className="git" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.7859 39.7133C15.7861 39.7304 15.7862 39.7474 15.7864 39.7643L15.7859 39.7133Z" fill="#C4C4C4"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M42 21.5315C42 26.6683 40.2456 31.3849 37.3176 35.0859C37.253 35.1675 37.1879 35.2486 37.1222 35.3292C37.0571 35.4092 36.9914 35.4886 36.9251 35.5675C34.4677 38.4959 31.2551 40.7389 27.5973 41.979L27.5447 41.9788C27.5791 41.9737 27.6143 41.9676 27.6502 41.9605L26.9434 41.9607C26.4108 41.823 26.2063 41.3482 26.2063 40.9242C26.2063 40.6911 26.2091 40.2817 26.2129 39.7341L26.2129 39.7309L26.2129 39.7294C26.2206 38.619 26.2321 36.9429 26.2321 35.0184C26.2321 33.0093 25.5604 31.6954 24.8063 31.0306C29.4847 30.4979 34.3952 28.6778 34.3952 20.4059C34.3952 18.0558 33.5817 16.1339 32.2358 14.6284C32.4524 14.0838 33.173 11.8949 32.0269 8.93008C32.0269 8.93008 30.2672 8.35113 26.2579 11.1375C24.5807 10.6603 22.7836 10.4211 21.0006 10.4131C19.2151 10.4211 17.418 10.6603 15.7434 11.1375C11.7315 8.35113 9.96789 8.93008 9.96789 8.93008C8.82568 11.8949 9.54633 14.0838 9.76291 14.6284C8.41959 16.1339 7.60097 18.0558 7.60097 20.4059C7.60097 28.6566 12.5037 30.5045 17.1666 31.0477C16.5659 31.5857 16.0244 32.5348 15.8336 33.9266C14.6373 34.4765 11.5948 35.4269 9.72166 32.1369C9.72166 32.1369 8.61297 30.0709 6.50517 29.9176C6.50517 29.9176 4.45409 29.8912 6.36078 31.2275C6.36078 31.2275 7.73762 31.8897 8.6929 34.376C8.6929 34.376 9.92535 38.5635 15.7666 37.2629C15.7714 38.1063 15.778 38.8525 15.7836 39.4596L15.7859 39.7111L15.7859 39.7133L15.7864 39.7643C15.7913 40.2966 15.795 40.6954 15.795 40.9242C15.795 41.3512 15.5809 41.8307 15.0336 41.963L14.3614 41.9632C14.4138 41.973 14.4646 41.9807 14.5138 41.9863H14.4246C9.96436 40.4799 6.16468 37.4827 3.58647 33.5699C3.40957 33.3014 3.23842 33.0286 3.0732 32.7517C3.04016 32.6964 3.00735 32.6408 2.97479 32.5851C1.08587 29.3539 0 25.5727 0 21.5315C0 9.63996 9.40202 0 21 0C32.598 0 42 9.63996 42 21.5315Z" fill="#79C043"/>
                    </svg>
                  </a>
                </div>
              </div>
                <p>
                  I love coding and always eager to learn new technologies.
                </p>
            </div>
          </div>
    </div>
    </div>
    </section>
  );
}

export default About;
