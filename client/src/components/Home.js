import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Jumbotron } from 'reactstrap';

function Home() {
  return (
    <div>
    <Jumbotron className='bg-cover text-white main-jumbo'>
      <Container className='main-container'>
        <h1 className='display-4'>
          <b>Learn Without Limits!</b>
        </h1>
        <p className='lead'>ECDB, Your Go-To Platform to Learn from the BEST!</p>
        <hr className='my-4' />
        <h4>
          Take the next step toward your personal and professional goals with
          ECDB.
        </h4>
        <a
          className='btn btn-outline-info btn-lg'
          href='/recommendation'
          role='button'
        >
          &nbsp; Get Recommendation &nbsp;<i className='far fa-lightbulb'></i>
        </a> {' '}
        <a
          className='btn btn-outline-info btn-lg'
          href='/share-review'
          role='button'
        >
          &nbsp; Share Review &nbsp;<i className='fa fa-marker'></i>
        </a>
      </Container>
    </Jumbotron>
    <section className="page-section mt-5 mb-5" id="services">
    <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-uppercase display-4 font-weight-bold mb-4">Services</h2>
        </div>
        <div className="row text-center">
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-share-alt"></i>
                </span>
                <h4 className="my-3">Share Review</h4>
                <p className="text-muted">As a user, you can add reviews and contribute to our dataset. Make sure you only put genuine reviews.</p>
            </div>
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-marker"></i>
                </span>
                <h4 className="my-3">Get Recommendation</h4>
                <p className="text-muted">You can get course recommendation in a few seconds by filling out a simple form.</p>
            </div>
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-user-graduate"></i>
                </span>
                <h4 className="my-3">Feature your Courses</h4>
                <p className="text-muted">You can feature courses on this platform with a minimal fee. These courses will be visible to users interested in the corresponding domains.</p>
            </div>
          </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
