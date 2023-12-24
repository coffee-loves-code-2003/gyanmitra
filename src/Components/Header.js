import React from 'react';
import logo from '../Images/Gyanmitra_24_logo.png';
import '../Images/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../App.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate();

  return (
    <Navbar id="Navbar1" expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home"
        ><a className="navbar-brand" href="#">
          <img src={logo} width="225px" alt="Logo" />
        </a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" id="navbarSupportedContent">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#link" >About Us</Nav.Link>
            <Nav.Link href="#link" >Event</Nav.Link>
            <Nav.Link href="#link" >Workshop</Nav.Link>
            <Nav.Link href="#link" >Contact Us</Nav.Link>

            </Nav>
            <Nav className="ms-auto" id="navbarSupportedContent">
            <button className="btn p-2 my-lg-0 my-2 ms-auto" id="login" onClick={() => navigate('/login')} style={{fontfamily: 'Poppins'}}>
                login
            </button>
            <button className="btn" id="Register" onClick={() => navigate('/signup')}  style={{fontfamily: 'Poppins'}}>
                Register
            </button>
            </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
