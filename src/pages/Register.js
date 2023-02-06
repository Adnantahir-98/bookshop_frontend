import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import PasswordStrengthMeter from '../components/PwdStrengthMeter'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {register} from '../redux/apiCalls'
import { v4 as uuidv4 } from 'uuid'


const RegisterNewUser = () => {

    // const [passwordMeter, setPasswordMeter] = useState('')
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { regnewUser } = useSelector((state) => state.user);


    const SubmitHandler = (e) => {
        e.preventDefault()
        setValues({
            username: '',
            email: '',
            password: '',
        })
        dispatch(register({
            id: uuidv4(),
            username: values.username,
            email: values.email,
            password: values.password,
        }))

        if(regnewUser === null){ navigate('/')}
    }

    return (
        <>
            <Container>
                <Row>
                    <Col md={6} className="m-auto">
                        <Card className="bg-light rounded-3 mt-5 px-4 pb-2 pt-4 border-0 shadow-sm">
                            <center><h2 className='text-primary'>Register</h2></center>
                            <Form onSubmit={SubmitHandler}>
                                <Form.Group className="mb-3" controlId="formBasicUser">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        value={values.username}
                                        onChange={(e)=>setValues({...values, username: e.target.value})}
                                        min="3" max="65" 
                                        placeholder="Enter Full Name" 
                                        required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type="email"
                                        value={values.email}
                                        onChange={(e)=>setValues({...values, email: e.target.value})}
                                        placeholder="Enter Your Email" 
                                        required />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        value={values.password}
                                        onChange={(e)=>setValues({...values, password: e.target.value})}
                                        placeholder="Password" 
                                        required />
                                    {/* <PasswordStrengthMeter password={password} /> */}
                                </Form.Group>
                                <Button className='mb-3' variant="primary" type="submit">
                                    Sign Up
                                </Button>
                                {/* <button type='submit' className='button' disabled={loading}>
                                    {loading ? <Spinner /> : 'Sign Up'}
                                </button> */}
                            </Form>
                        </Card>
                        {/* {error ? <p className="alert alert-danger p-2 mt-2">Sorry, Couldn't create your account at this moment...</p> : null} */}
                        <p className='text-left mt-2'>Already have an account? <Link to="/login">Login</Link></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RegisterNewUser
