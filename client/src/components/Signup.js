import React, { useState } from "react";
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

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((result) => {
          console.log(result);
          history.push("/login");
        });
        return;
      }
      res.json().then((error) => setError(error));
    },
    (error) => setError(error)
    );
  };
  return (
    <Container className="mt-5">
      {error ? (
        <div className="alert alert-warning" role="alert">
          {" "}
          {error.message}{" "}
        </div>
      ) : null}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label> Name </Label>
          <Input
            type="text"
            value={name}
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label> Email </Label>
          <Input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label> Password </Label>
          <Input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <Button type="Submit"> Submit </Button>
      </Form>
    </Container>
  );
}

export default Signup;
