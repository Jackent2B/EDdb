import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home" id="header-navbar-brand"> ECDB </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#home" className="header-nav-link">Home</Nav.Link>
            <Nav.Link href="#services" className="header-nav-link">Services</Nav.Link>
            <Nav.Link href="#contact" className="header-nav-link">Contact us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
