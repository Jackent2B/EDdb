import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Jumbotron,
  Button,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";

function RenderCourse({ course }) {
  return (
    <div style={{ color: "rgb(44, 40, 40)" }}>
      <Card Body style={{ backgroundColor: "#dbdbdb" }}>
        <CardText>
          <h5>Course Name: </h5>
          {course.name}
        </CardText>
        <CardText>
          <h5>Rating: </h5>
          {course.predicted_rating}
        </CardText>
        <CardText>
          <h5>Domain: </h5>
          {course.domain}
        </CardText>
        <CardText>
          <h5>Offered By: </h5>
          {course.offered_by}
        </CardText>
      </Card>
    </div>
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
        <div>
          <RenderCourse course={course} />
        </div>
      );
    });
  } else return <div></div>;
}

export default RecommendedCourses;
