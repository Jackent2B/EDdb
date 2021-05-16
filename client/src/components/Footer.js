import React from 'react';
import { Container, Row } from 'reactstrap';

function Footer() {
  return (
    <div className="footer-maindiv">
      <Container>
        <Row className="footer-row">
          <i class="fas fa-envelope"></i> 
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram-square"></i>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
