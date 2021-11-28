import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  function handleLogout(e){
    e.preventDefault();
    localStorage.removeItem("jwtToken");
    history.push('/home');
  }

  return (
    <Navbar
      collapseOnSelect
      expand='md'
      className='navbar navbar-dark bg-dark header-nav'
      fixed
    >
      <Container>
        <NavbarBrand href='/' className='header-navbrand'>
          {' '}
          ECDB{' '}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/login' className='header-navlink'>
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/home#services' className='header-navlink'>
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/courses/recommended' className='header-navlink'>
                Recommended Courses
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/signup' className='header-navlink'>
                Sign up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleLogout} className='header-navlink'>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
