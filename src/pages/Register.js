import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Register = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={6} className="m-auto">
                        <Card className="bg-light rounded-3 mt-5 px-4 pb-2 pt-4 border-0 shadow-sm">
                            <center><h2 className='text-primary'>Register</h2></center>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicUser">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Full Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button className='mb-3' variant="primary" type="submit">
                                    Sign Up
                                </Button>
                            </Form>
                        </Card>
                        <p className='text-left mt-2'>Already have an account? <Link to="/login">Login</Link></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register