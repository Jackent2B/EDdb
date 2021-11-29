import React from 'react';
import { Container, Row } from 'reactstrap';

function Footer() {
  return (
    <>
    <br /> <br />
    <div className="footer-maindiv">
      <Container>
        <Row className="footer-row">
          <i className="fas fa-envelope"></i> 
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram-square"></i>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default Footer;
