import { Container, Nav, Navbar, Offcanvas, Button } from 'react-bootstrap';
import logo from '../logo.svg';
import React, { useState, useEffect } from "react";


function Header() {  
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  
  // Update scroll state when the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);  // Add class when scrolling more than 50px
      } else {
        setScrolled(false); // Remove class when scrolled back to top
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav className={`navbar navbar-expand-lg sticky-top ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
        {/* Navbar toggle button - visible only on mobile */}
        <Button
            className="navbar-toggler d-block d-lg-none order-lg-1 order-3" // Mobile only
            type="button"
            onClick={handleShow}
            aria-controls="offcanvasNavbar"
            aria-expanded={showOffcanvas ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>

          {/* Offcanvas Sidebar - visible only on mobile */}
          <Offcanvas
            show={showOffcanvas}
            onHide={handleClose}
            placement="start"
            className="d-lg-none" // Mobile only
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>

          {/* Navbar links - visible on larger screens */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Nav>
  );
}

export default Header;  // Ensure the exported name matches the function name
