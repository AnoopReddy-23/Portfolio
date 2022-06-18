import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './Home';
import Landing from './Landing';
import HostEvent from './HostEvent';
import Login from './Login';
import Event from './Event';
import Signup from './Signup';
import Template1 from './Template1'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import { clearLoginStatus } from '../Slices/userSlice'


function Header() {
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  )

  //get dispath function
  let dispath = useDispatch()

  //get navigate function
  let navigate = useNavigate()

  //logout user
  const userLogout = () => {
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/login");
  }


  return (
    <>

      <Navbar collapseOnSelect bg="dark" expand="sm" variant='dark'>
        <Container>
          <Navbar.Brand>
          
            LET'S MAKE THE PARTY!!!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto navbar">
              {isSuccess !== true ? (
                <>
                  {/* These links can be visible when no user logged in */}
                  <Nav.Item>
                    <Nav.Link eventKey={1} as={NavLink} to="/">
                      Home
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey={2} as={NavLink} to="/Signup">
                      Signup
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey={3} as={NavLink} to="/login">
                      Login
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  {/* This dropdown is visible only when a user is logged in */}
                  <NavDropdown title={userObj.username} id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                      <Nav.Link as={NavLink} to="/Home" className='text-dark'>
                        Home
                      </Nav.Link>
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={userLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HostEvent" element={<HostEvent />} />
        <Route path="/template1" element={<Template1 />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Signup" element={<Signup />} />

      </Routes>
    </>
  )
}

export default Header