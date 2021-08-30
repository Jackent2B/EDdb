import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
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
  const [domain, setDomain] = useState("Data Structures and Algorithms");
  const [duration, setDuration] = useState(NaN);
  const [cost, setCost] = useState(NaN);
  const [assessments, setAssessments] = useState(NaN);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(domain, duration, cost, assessments, rating);
    //api call, get results here
  };

  return (
    <div>
      <Container>
        {" "}
        <br />
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label for="domain">Domain</Label>
            <Input
              type="select"
              name="domain"
              id="domain"
              defaultValue="Data Structures and Algorithms"
              onChange={(e) => setDomain(e.target.value)}
            >
              <option>Data Structures and Algorithms</option>
              <option>Machine Learning</option>
              <option>Cyber Security</option>
              <option>Web Development</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="duration">Duration (in hours)</Label>
            <Input
              type="select"
              id="duration"
              name="duration"
              defaultValue="0-5"
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
              default="0-500"
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
              default="0-10"
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
