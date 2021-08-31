import React, { useState } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
              <NavLink href='/signup' className='header-navlink'>
                Sign up
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
