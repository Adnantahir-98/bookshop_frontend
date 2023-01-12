import { useState } from "react";
import { Link } from 'react-router-dom'
import { login } from "../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="m-auto">
            <Card className="bg-light rounded-3 mt-5 p-4 border-0 shadow-sm">
              <center><h2 className="text-primary">Login</h2></center>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" onChange={(e) => setUsername(e.target.value)} placeholder="Enter Your Email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick} disabled={isFetching}>
                  Sign In
                </Button>
              </Form>
            </Card>
            <p className="text-left mt-3">Need an account? <Link to="/register">Register</Link></p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login