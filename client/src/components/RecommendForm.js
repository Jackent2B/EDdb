import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
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
  let history = useHistory();
  const [domain, setDomain] = useState('Data Structures and Algorithms');
  const [duration, setDuration] = useState("None");
  const [cost, setCost] = useState("None");
  const [assessments, setAssessments] = useState("None");

  function handleInputs(ipfilter){
    const arr = ipfilter.split("-");
    if(arr.length == 1){
      const strnum = ipfilter.replace( /^\D+/g, '');
      const num = parseInt(strnum);
      return (num+1);
    }
    const lb = parseInt(arr[0]);
    const ub = parseInt(arr[1]);
    return parseInt((lb+ub)/2);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const arg_domain = domain.toLowerCase();
    const arg_time = handleInputs(duration);
    const arg_budget = handleInputs(cost);
    const arg_assignment = handleInputs(assessments);
    console.log(arg_domain, arg_budget, arg_time, arg_assignment);
    fetch('http://localhost:3000/course/test/script', {
      method: "POST",
      headers: { "Content-Type": "application/json" ,
                  "Authorization": "Bearer " + localStorage.getItem('jwtToken'),              
    },
      body: JSON.stringify({ arg_domain, arg_budget, arg_time, arg_assignment }),
    }).then((res) => {
      if(res.ok){
        res.json().then((result) => {
          console.log(result)
          if(result.no_of_recommendations == 0){
            alert("Sorry! Could not recommend any course! Try with some different constraints!");
            return;
          }
          alert("Course recommended!");
          history.push("/courses/recommended");
        });
        return;
      }
      alert("Something went wrong!");
    })

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
