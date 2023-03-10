import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo1 from '../image/logo1.png'
import './Components.css'


export const NavBar = () => {
  return (
    <Navbar bg="primary" variant='dark' expand="lg">
      <Container fluid>
        <img
          src={ Logo1 }
          width="40"
          height="40"
          className="d-inline-block align-top logo1"
          alt="peLogo"
        />
        <Navbar.Brand href="#">
            Planet Express Dental Clinic</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/newAppointment'>Book Appointment</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><Link as={Link} to='/doctors'>Doctors</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action4"><Link as={Link} to='/tratments'>
                Treatments</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                About Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
