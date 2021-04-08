import React, { useState } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

function RecommendForm() {
  const [domain, setDomain] = useState("Data Structures and Algorithms");
  const [duration, setDuration] = useState(NaN);
  const [cost, setCost] = useState(NaN);
  const [assessments, setAssessments] = useState(NaN);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(domain, duration, cost, assessments);
    //api call, get results here
  }

  return (
    <div>
      <Container>
        {" "}
        <br />
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label for="domain">Domain</Label>
            <Input type="select" name="domain" id="domain" defaultValue="Data Structures and Algorithms" onChange={(e) => setDomain(e.target.value)}>
              <option>Data Structures and Algorithms</option>
              <option>Machine Learning</option>
              <option>Cyber Security</option>
              <option>Web Development</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="duration">Duration (in hours)</Label>
            <Input type="number" id="duration" name="duration" onChange={(e) => setDuration(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Label for="cost">Cost (in Rupees)</Label>
            <Input type="number" name="cost" id="cost" onChange={(e) => setCost(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Label for="assessments">Number of Assessments</Label>
            <Input type="number" name="assessments" id="assessments" onChange={(e) => setAssessments(e.target.value)}/>
          </FormGroup>
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText><br/>
          <Button>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default RecommendForm;
