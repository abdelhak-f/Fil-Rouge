import React from 'react';
import '../../css/style.css';
import {Form, Container,Jumbotron, Button, Card} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
    <Form 
    // onSubmit={handleSubmit}
    >
      <Form.Group size="lg" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          autoFocus
          type="email"
        //   value={email}
        //   onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Card.Text>
      <NavLink to="/Register" >Not a member? Register here</NavLink> 
      </Card.Text>
      
      <Button className="mt-1" block size="lg" type="submit" 
    //   disabled={!validateForm()}
      >
        Login
      </Button>
    </Form>
  </div>
);
}
  

export default Login



// Create login page
// https://serverless-stack.com/chapters/create-a-login-page.html