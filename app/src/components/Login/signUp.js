import React, { useState } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const SignUp = () => {
  // Form State
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <Container className="sign " style={{ width: "40rem", marginTop:"10rem" }}>
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
        <Col>
        <FormGroup>
            <Label>Confirm Password</Label>
            <Input
              type="confirmPassword"
              name="confirmPassword"
              placeholder="********"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Button style={{position: 'absolute', left: '50%'}}>Submit</Button>
      </Form>
    </Container>
  );
};


export default SignUp;