import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron } from 'reactstrap';

function Home() {
  return (
    <div>
      <Container>
        <br />
        <Jumbotron>
          <h1 className='display-3'>Hello, world!</h1>
          <p className='lead'>
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className='my-2' />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className='lead'>
            <Link to='/recommendation' className='btn btn-primary'>
              Get Recommendation
            </Link>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Home;
