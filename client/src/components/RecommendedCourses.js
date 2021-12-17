import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Jumbotron,
  Button,
  Card,
  CardTitle,
  CardText,
  CardBody,
  Input
} from "reactstrap";

function RenderCourse({ course }) {

  const [toggle, setToggle] = useState(false);
  const [actualRating, setActualRating] = useState(undefined);
  const [accuracy, setAccuracy] = useState(undefined);

  function handleButton(e){
    e.preventDefault();
    if(toggle){
      let x = 100 - Math.abs(course.predicted_rating - actualRating)*100/course.predicted_rating;
      let y = x.toFixed(2);
      setAccuracy(y);
    }
    else{
      setToggle(1);
    }
  }
  return (
    <Card className="mb-2">
      <CardBody>
        <CardTitle className="text-capitalize">
          <h5>Course Name: </h5>
          {course.name}
        </CardTitle>
        <CardText className="text-capitalize">
          <h5>Rating: </h5>
          {course.predicted_rating.toFixed(2)}
        </CardText>
        <CardText className="text-capitalize">
          <h5>Domain: </h5>
          {course.domain}
        </CardText>
        <CardText className="text-capitalize">
          <h5>Offered By: </h5>
          {course.offered_by}
        </CardText>
        {toggle ? 
          <><Input type="number" step="0.01" value={actualRating} onChange={(e) => setActualRating(e.target.value)} />
          {accuracy ? 
          <CardText>Accuracy: {accuracy}%</CardText>
          : null }
          </>
        : null }
        <Button onClick={handleButton} > Enter actual rating </Button>
      </CardBody>
    </Card>
  );
}

function RecommendedCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/course/recommendations/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  if (courses.length) {
    return courses.map((course) => {
      return (
        <Container>
          <br />
          <RenderCourse course={course} />
        </Container>
      );
    });
  } else return <Container> <br /> No courses! </Container>;
}

export default RecommendedCourses;
