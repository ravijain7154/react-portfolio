
import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import {Container, Nav, Navbar} from 'react-bootstrap';
import "./App.css";
import "./custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import axios from 'axios'; 


function App() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [data, setData] = useState([]);
  // const [error, setError] = useState('');

  //  // Handle file input change 
  //  const handleImageChange = (e) => {
  //   setSelectedImage(e.target.files[0]);
  // };

  // const handlesubmit = async (e) => {
  //   e.preventDefault();
  //   if (!selectedImage || !name || !email) {
  //     alert('Please fill out all fields and select an image.');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('image', selectedImage);  // Append the image file
  //   formData.append('name', name);
  //   formData.append('email', email);

  //   try {
  //     const response = await fetch('http://localhost:5000/api/submit', {
  //       method: 'POST',
  //       // headers: {
  //       //   'Content-Type': 'application/json',
  //       // },
  //       body: formData,
  //     });

  //     if (response.ok){
  //       setName('');
  //       setEmail('');
  //       setSelectedImage(null);
  //       setError('');
  //       fetchData();
  //     } else {
  //       console.error('Error submitting data');
  //       const errorData = await response.json(); // log the error response from backend
  //       if (errorData.message === 'Email already exists') {
  //         setError('Email already exists. Please use a different email.');
  //       } else {
  //       console.error('Backend error:', errorData);
  //       setError('Something went wrong. Please try again.');  
  //     }
  //   }
  //   } catch (error) {
  //     console.error('Error submitting data:', error);
  //     setError('Something went wrong. Please try again.');

  //   }
  // };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/data');
  //     const result =  await response.json();
  //     setData(result);
  //   } catch (error){
  //     console.error('Error fetching  data:', error);
  //   }
  // }

  // useEffect(() => {

  //   fetchData();
      
  // }, []);
  return (
    <div className="App">
      <Router>
      <Navbar />
      
      {/* React Router v6 uses `Routes` instead of `Switch` */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
     
      </Router>
{/* 
      <section className='app-section-form'>
        <h1>Data from send</h1>
       
            {error && <div className="error-message">{error}</div>}

        
        <form onSubmit={handlesubmit}> 
          <div className='form-group'>
            <label>Name</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className='form-group'>
            <label>Image</label>
            <input type="file"  onChange={handleImageChange}  />
          </div>
          <button type="submit">Submit</button>
        </form>
        
          <div className='Data_view'> 
           <h2>Submitted Data</h2>
            <div className='data'>
              {data.map((item) => (
                <div className='data_box' key={item.id}>
                  {item.name} - {item.email}
                  {item.image && (
                  <img 
                    src={`http://localhost:5000/uploads/${item.image}`} 
                    
                    alt="User Upload" 
                    style={{ width: '100px', height: '100px' }} 
                  />
                  )}  

                </div>
              ))}
            </div>
          </div>
        
      </section> */}
      
    </div>
  );
}

export default App;
