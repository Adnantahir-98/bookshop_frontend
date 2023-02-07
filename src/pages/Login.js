import { useState } from "react"
import { login } from "../redux/apiCalls"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    if(currentUser === null){navigate('/viewCart')}
    if(username === 'admin'){navigate('/orderslist')}
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="m-auto">
            <Card className="bg-light rounded-3 mt-5 mb-3 p-4 border-0 shadow-sm">
              <center><h2 className="text-primary">Login</h2></center>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Enter Your Username" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleClick} disabled={isFetching}>
                  Sign In
                </Button>
              </Form>
            </Card>
            {error ? <p className="alert alert-danger p-2">Someting went wrong, Please wait and try again...</p>: null}
            <p className="text-left mt-3">Need an account? <Link to="/register">Register</Link></p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
