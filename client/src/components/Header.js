import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './Main';
import { useHistory } from 'react-router-dom';
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
  const { state, dispatch } = useContext(UserContext);
  console.log(state);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const renderList = () => {
    if (state) {
      return (
        <>
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
            <NavLink onClick={handleLogout} className='header-navlink'>
              Logout
            </NavLink>
          </NavItem>
        </>
      );
    } else {
      return (
        <>
          <NavItem>
            <NavLink href='/login' className='header-navlink'>
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/signup' className='header-navlink'>
              Sign up
            </NavLink>
          </NavItem>
        </>
      );
    }
  };

  function handleLogout(e) {
    e.preventDefault();
    //    localStorage.removeItem('jwtToken');
    localStorage.clear();
    dispatch({ type: 'CLEAR' });
    history.push('/login');
  }

  return (
    <Navbar
      collapseOnSelect
      expand='md'
      className='navbar navbar-dark bg-dark header-nav'
      fixed
    >
      <Container>
        <NavbarBrand href='/home' className='header-navbrand'>
          {' '}
          ECDB{' '}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            {renderList()}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
