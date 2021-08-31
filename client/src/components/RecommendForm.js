import React, { useState } from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';

function RecommendForm() {
  const [domain, setDomain] = useState('Data Structures and Algorithms');
  const [duration, setDuration] = useState("None");
  const [cost, setCost] = useState("None");
  const [assessments, setAssessments] = useState("None");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(domain, duration, cost, assessments);
    //api call, get results here
  };

  return (
    <div>
      <Container>
        {' '}
        <br />
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label for='domain'>Domain</Label>
            <Input
              type='select'
              name='domain'
              id='domain'
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
            <Label for='duration'>Duration (in hours)</Label>
            <Input
              type='select'
              id='duration'
              name='duration'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option>None</option>
              <option>0-5</option>
              <option>5-10</option>
              <option>10-15</option>
              <option>15-20</option>
              <option>20-40</option>
              <option>Greater than 40</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='cost'>Cost (in Rupees)</Label>
            <Input
              type='select'
              name='cost'
              id='cost'
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            >
              <option>None</option>
              <option>0-500</option>
              <option>500-1000</option>
              <option>1000-2000</option>
              <option>2000-5000</option>
              <option>Greater than 5000</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='assessments'>Number of Assessments</Label>
            <Input
              type='select'
              name='assessments'
              id='assessments'
              value={assessments}
              onChange={(e) => setAssessments(e.target.value)}
            >
              <option>None</option>
              <option>0-10</option>
              <option>10-25</option>
              <option>25-50</option>
              <option>50-100</option>
              <option>Greater than 100</option>
            </Input>
          </FormGroup>
          <FormText color='muted'>
            Based on user reviews and matching requirements, top courses will be recommended.
          </FormText>
          <br />
          <Button>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default RecommendForm;
