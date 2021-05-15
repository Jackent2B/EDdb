import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Jumbotron } from 'reactstrap';

function Home() {
  return (
    <Jumbotron className='bg-cover text-white main-jumbo'>
      <Container className='main-container'>
        <h1 class='display-4'>
          <b>Learn Without Limits!</b>
        </h1>
        <p class='lead'>ECDB, Your Go-To Platform to Learn from the BEST!</p>
        <hr class='my-4' />
        <h4>
          Take the next step toward your personal and professional goals with
          ECDB.
        </h4>
        <a
          class='btn btn-outline-info btn-lg'
          href='/recommendation'
          role='button'
        >
          &nbsp; Get Recommendation &nbsp;<i class='far fa-lightbulb'></i>
        </a>
      </Container>
    </Jumbotron>
  );
}

export default Home;
