import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const Signup = () => {
  // Form State
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/wave_suggester/auth/register", formState)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <Container className="sign " style={{ width: "40rem" }}>
      <h2>Sign Up</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="myemail@email.com"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="********"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};
export default Signup;
