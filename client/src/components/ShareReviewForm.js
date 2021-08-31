import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useHistory } from "react-router-dom";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

function ShareReviewForm() {
  const history = useHistory();
  const [domain, setDomain] = useState("Data Structures and Algorithms");
  const [duration, setDuration] = useState("0-5");
  const [cost, setCost] = useState("0-500");
  const [assessments, setAssessments] = useState("0-10");
  const [rating, setRating] = useState(0);
  const [course, setCourse] = useState("");
  const [offeredBy, setOfferedBy] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        domain,
        duration,
        cost,
        assessments,
        rating,
        course,
        offeredBy,
      })
    }).then((res) => {
      if (res.ok) {
        res.json().then((result) => {
          console.log(result);
          history.push("/share-review");
        });
        return;
      }
      res.json().then((error) => setError(error));
    });
  };

  return (
    <div>
      <Container>
        {" "}
        <br />
        {error ? <div className="alert alert-warning" role="alert"> {error.message} </div> : null}
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label for="domain">Domain</Label>
            <Input
              type="select"
              name="domain"
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            >
              <option>Data Structures and Algorithms</option>
              <option>Machine Learning</option>
              <option>Cyber Security</option>
              <option>Web Development</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="coursename">Course Name</Label>
            <Input
              type="text"
              name="course"
              id="coursename"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="ofby">Offered By</Label>
            <Input
              type="text"
              name="offeredBy"
              id="ofby"
              value={offeredBy}
              onChange={(e) => setOfferedBy(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="duration">Duration (in hours)</Label>
            <Input
              type="select"
              id="duration"
              name="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option>0-5</option>
              <option>5-10</option>
              <option>10-15</option>
              <option>15-20</option>
              <option>20-40</option>
              <option>Greater than 40</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="cost">Cost (in Rupees)</Label>
            <Input
              type="select"
              name="cost"
              id="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            >
              <option>0-500</option>
              <option>500-1000</option>
              <option>1000-2000</option>
              <option>2000-5000</option>
              <option>Greater than 5000</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="assessments">Number of Assessments</Label>
            <Input
              type="select"
              name="assessments"
              id="assessments"
              value={assessments}
              onChange={(e) => setAssessments(e.target.value)}
            >
              <option>0-10</option>
              <option>10-25</option>
              <option>25-50</option>
              <option>50-100</option>
              <option>Greater than 100</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="rating">Rating</Label>
            <ReactStars
              id="rating"
              count={10}
              value={rating}
              onChange={(newRating) => setRating(newRating)}
              size={24}
              activeColor="#ffd700"
            />
          </FormGroup>
          <br />
          <Button>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default ShareReviewForm;
