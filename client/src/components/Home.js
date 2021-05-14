import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Jumbotron } from "reactstrap";

function Home() {
  return (
    <Jumbotron className="bg-cover text-white main-jumbo">
      <Container className="main-container">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-outline-info btn-lg" href="/recommendation" role="button">&nbsp; Get Recommendation &nbsp;<i class="far fa-lightbulb"></i></a>
      </Container>
    </Jumbotron>
  );
}

export default Home;
