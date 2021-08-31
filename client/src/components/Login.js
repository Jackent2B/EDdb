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

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then(
      (res) => {
        if (res.ok) {
          res.json().then((result) => {
            console.log("Logged in user", result.user);
            localStorage.setItem("jwtToken", result.token);
            history.push("/home");
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

export default Login;
