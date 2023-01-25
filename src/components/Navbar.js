
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import {logoutSuccess} from '../redux/userSlice'

// import SearchBox from './SearchBox'
import { Navbar, NavDropdown, Nav, Container, Row, Col } from 'react-bootstrap'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { BsEnvelopeFill } from 'react-icons/bs'
import { GiRotaryPhone } from 'react-icons/gi'
import { BiUserCircle } from 'react-icons/bi'
import { GoGlobe } from 'react-icons/go'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import './style.css'


const NavbarMenu = () => {

    // const [navbar, setNavbar] = useState(false)

    const quantity = useSelector(state => state.cart.quantity)
    const { currentUser } = useSelector((state) => state.user);
    const history = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutSuccess())
        history('/login')
    }


    // const changeBackground = () => {
    //     if (window.scrollY >= 50) {
    //         setNavbar(true);
    //     } else {
    //         setNavbar(false);
    //     }
    // }

    // window.addEventListener('scroll', changeBackground)

    return (
        <>
            <Fade top>
                <div className="top-bar bg-danger">
                    <Container fluid>
                        <Row>
                            <Col md={3} className="mt-1">
                                <div className='d-flex'>
                                    <BsEnvelopeFill className='text-white mt-1 text-start me-1' />
                                    <a href="mailto:info@bookshop.com.pk" type="email" className="text-white text-decoration-none">
                                        info@bookshop.com.pk
                                    </a>
                                </div>
                            </Col>

                            <Col md={6} className="mt-1">
                                <h6 className='text-center text-white'>See Our Exclusive Discount Offers:<Link to="/shop" className='text-white ms-1'>Show Now</Link></h6>
                            </Col>
                            <Col md={3} className="mt-1 text-end">
                                <GiRotaryPhone className='me-1 text-white' />
                                <a href="tel:+924237120108" type="phone" className="text-white text-decoration-none">
                                    +92423-7120108
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fade>


            <Navbar bg="light" variant="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/">
                            <Bounce left>
                                <img src="indus_logo.png" className="img-fluid" style={{ height: "40px", width: "225px" }} alt="bookshop indus" />
                            </Bounce>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Fade top>
                            <div className='col-sm-6 col-md-6 col-lg-6'>
                                <form className="d-flex ms-4 me-auto" id="main-search">
                                    <input className="form-control border-end-0" type="search" placeholder="Search..." aria-label="Search" style={{ borderTopRightRadius: "0%", borderBottomRightRadius: "0%" }} />
                                    <button className="btn btn-danger border-left-0" type="submit" style={{ borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%", }}><AiOutlineSearch /></button>
                                </form>
                            </div>
                        </Fade>
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Link to="/shop" className='text-decoration-none text-muted'>
                                    Shop
                                </Link>
                            </Nav.Link>

                            <NavDropdown title={<GoGlobe />} id="basic-nav-dropdown">
                                <NavDropdown.Item>española</NavDropdown.Item>
                                <NavDropdown.Item disabled>française</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">italiano</NavDropdown.Item>
                            </NavDropdown>

                            {currentUser ? (
                                <NavDropdown title={currentUser.username} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (

                                <Nav.Link>
                                    <Link to="/login" className='text-decoration-none text-muted'>
                                        <BiUserCircle className='me-1' />
                                        Login & Register
                                    </Link>
                                </Nav.Link>
                            )}
                            {currentUser && currentUser.isAdmin && (
                                <NavDropdown title="History" id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <Link to="/productslist" className='text-decoration-none'>
                                            Products List
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/orderslist" className='text-decoration-none'>
                                            Orders List
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            )}

                        </Nav>
                        <Nav.Link className='nav-item mx-1' style={{ fontSize: "25px" }}>
                            <Link to="/viewcart" className='text-decoration-none'>
                                <AiOutlineShoppingCart className="text-dark" />
                                <span
                                    className='bg-danger text-white px-1'
                                    style={{ position: "relative", top: "-8px", left: "-6px", fontSize: "15px", borderRadius: "50%" }}>
                                    {quantity}
                                </span>
                            </Link>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar >


            {/* <nav className={navbar ? 'navbar fixed-top navbar-expand-lg navbar-dark p-md-2 mb-3 scrollBg' : 'navbar fixed-top navbar-expand-lg navbar-dark p-md-2 mb-3'}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="indus_logo.png" className="img-fluid" style={{ height: "40px", width: "225px" }} alt="bookshop indus" />
                    </Link>
                    <Fade top>
                        <div className='col-sm-6 col-md-6 col-lg-6'>
                            <form className="d-flex ms-4 me-auto" id="main-search">
                                <input className="form-control border-end-0 border-top-0 border-start-0 text-white bg-transparent" type="search" placeholder="Search..." aria-label="Search" style={{ borderTopRightRadius: "0%", borderBottomRightRadius: "0%" }} />
                                <button className="btn btn-danger border-left-0" type="submit" style={{ borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%", }}><AiOutlineSearch /></button>
                            </form>
                        </div>
                    </Fade>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/"><GoGlobe /> </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" target="_blank" href="https://wa.me/message/LHY42BD1" data-toggle="tooltip" data-placement="bottom" title="+92313 2340293409">
                                    Login & Register
                                </a>
                            </li>
                            <li className="nav-item mt-2 ms-1">
                                <Link to="/viewcart" className='text-decoration-none'>
                                    <AiOutlineShoppingCart className="text-white" style={{fontSize: "22px"}} />
                                    <span
                                        className='bg-danger text-white px-1'
                                        style={{ position: "relative", top: "-8px", left: "-6px", fontSize: "15px", borderRadius: "50%" }}>
                                        {quantity}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}


        </>
    )
}

export default NavbarMenu
