import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Logo1 from '../../image/logo1.png'
import './NavBar.css'
import { useSelector } from "react-redux";
import { userData } from '../../layout/userSlice';


export const NavBar = () => {

  const dataCredentialsRdx = useSelector(userData);

  useEffect(()=>{
    console.log(dataCredentialsRdx);
  })

  return (
    <Navbar className='NavBar' bg="primary" variant='dark' expand="lg" fixed="top">
      <Container fluid>
        <img
          src={ Logo1 }
          width="40"
          height="40"
          className="d-inline-block align-top logo1"
          alt="peLogo"
        />
        <Navbar.Brand href="#" className='navTitle'>
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
              <NavDropdown.Item eventKey="1"><Link as={Link} to='/doctors'>Doctors</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="2"><Link as={Link} to='/treatments'>
                Treatments</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="3"><Link as={Link} to='/aboutUs'>
                About Us</Link>
              </NavDropdown.Item>
            </NavDropdown>
            {dataCredentialsRdx.credentials.token ? (
              dataCredentialsRdx.credentials.userRole.includes('admin') ? (
                <NavDropdown title="Admin Area" id="navbarScrollingDropdown">
                  <NavDropdown.Item eventKey="7"><Link as={Link} to='/usersList'>
                    Users List</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="9"><Link as={Link} to='/appointments'>
                    Appointments</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              ):('')
            ) : ("")}
            {dataCredentialsRdx.credentials.token ? (
              dataCredentialsRdx.credentials.userRole.includes('doctor') ? (
                <NavDropdown title="Doctor Area" id="navbarScrollingDropdown">
                  <NavDropdown.Item eventKey="8"><Link as={Link} to='/usersList'>
                    Users List</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="10"><Link as={Link} to='/appointments'>
                    Appointments</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              ):('')
            ) : ("")}
          </Nav>
          <Nav>
            {dataCredentialsRdx.credentials.token ? (
              
              <DropdownButton
                align="end"
                title="User"
                id="dropdown-menu-align-end"
              >
                <Dropdown.Item eventKey="4"><Link as={Link} to='/profile'>Profile</Link></Dropdown.Item>
                <Dropdown.Item eventKey="5"><Link as={Link} to='/appointmentsUser'>Appointments</Link></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="6">Log Out</Dropdown.Item>
              </DropdownButton>
              
            ) : (
              <>
            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
