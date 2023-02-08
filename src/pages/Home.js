import { useState, useEffect } from "react"
import Product from "../components/Product"
import { Link } from 'react-router-dom'

import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Container, Row, Col } from 'react-bootstrap'
import { Typewriter } from 'react-simple-typewriter'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Masonry from '@mui/lab/Masonry'
import { imageGallery } from '../data'
import Box from '@mui/material/Box'

import { AiOutlineArrowDown } from 'react-icons/ai'
import { BiDownArrowAlt } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'

import HeadShake from 'react-reveal/HeadShake'
import Fade from 'react-reveal'

import axios from "axios"
import './style.css'



const Home = ({ cat, filters, sort, data }) => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [instaReel, setInstaReel] = useState(9)
  const [show, setShow] = useState(13)

  const loadMoreProducts = () => {
    setShow((prevValue) => prevValue + 3)
  }
  const HandleInstaReal = () => {
    setInstaReel((prevValue) => prevValue + 6)
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
                
      } catch (err) { }
    }
    getProducts()
  }, [cat])

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          ))
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  // Masonry instagram Image Gallery
  const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  }));

  return (
    <>
      <section>
        {/* Hero Section Home Page Header */}
        <Container fluid>
          <Row loading="lazy" style={{ backgroundImage: "url(imgs/hero_section_bg.jpg)", height: "100vh", backgroundPosition: "center", backgroundSize: "cover" }}>
            <Col md={6} className="hero_column text-white">
              <Fade left>
                <h6 className="text-danger py-0 my-0">Indus Publishing House</h6>
                <h2 className="fw-bold text-white">
                  Conquer Your
                  <span>
                    <Typewriter
                      words={[' Creativity', ' Strengths', ' Imaginations', ' Potential']}
                      loop={0}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={45}
                      delaySpeed={1000}
                    />
                  </span>
                  With Our Fine Quality Paper Products
                </h2>
                <p>
                  We offer Exercise Notebook, Registers, Spiral Notebooks, Sketch Books, Scrap Books, File Covers, Writing Pads,
                  PreSchool Books, Story Books, Puzzle Books, Planners, Writing Books, Coloring Books, Account Books, Graph Books, Diaries, Answer Sheets,
                  Chart Paper, Color Paper, Glaze Paper, Gift Bags, Gift Boxes, Gift Wrapping Sheets, Evelops and many more...
                </p>
                <Link to="/shop" className="text-decoration-none btn btn-outline-danger">Shop Now</Link>
              </Fade>
            </Col>
            <Col md={6}>
              {/* Nothing Here Right Now, We can use Column Off-set too*/}
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <HeadShake>
          <Container className='rounded-3 mt-5'>
            <img src="imgs/pad_bg.jpg" className="rounded-3 img-fluid mt-5" alt="pad_bg.jpg indus bookshop" />
            <small className="text-white" style={{ position: 'absolute', right: "85px", bottom: "3px" }}>Indus Publishing House</small>
          </Container>
        </HeadShake>
      </section>


      <section>
        <div className="container mt-5">
          <div className="row shadow-sm text-center p-4 rounded">
            <div className="col-lg-3 col-md-6 col-sm-6 brdr-right mb-2">
              <div className="single-features">
                <Fade top>
                  <div className="f-icon mb-3">
                    <img src="imgs/features/f-icon1.png" alt="Indus Free Delivery" />
                  </div>
                  <h6>Free Delivery</h6>
                  <p>Free Shipping on all order</p>
                </Fade>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 brdr-right mb-2">
              <div className="single-features">
                <Fade bottom>
                  <div className="f-icon mb-3">
                    <img src="imgs/features/f-icon2.png" alt="" />
                  </div>
                  <h6>Return Policy</h6>
                  <p>Free Shipping on all order</p>
                </Fade>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 brdr-right mb-2">
              <div className="single-features">
                <Fade top>
                  <div className="f-icon mb-3">
                    <img src="imgs/features/f-icon3.png" alt="" />
                  </div>
                  <h6>24/7 Support</h6>
                  <p>Free Shipping on all order</p>
                </Fade>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
              <div className="single-features">
                <Fade bottom>
                  <div className="f-icon mb-3">
                    <img src="imgs/features/f-icon4.png" alt="" />
                  </div>
                  <h6>Secure Payment</h6>
                  <p>Free Shipping on all order</p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        {/* Latest Products Section... */}
        <Container>
          <Fade bottom>
            <Row>
              <h3 className='mt-5 text-center'>Our Latest Products</h3>
              <p className='text-center w-75' style={{ margin: "auto" }}>
                NoteBooks and Registers you can buy for the educational or office purposes! Experience fine quality &
                with an overwelmingly customer support from our team. The perfect book shop awaits for you.
              </p>
              {cat
                ? data && filteredProducts
                  .slice(0, show)
                  .map((item) => <Product item={item} show={show} setShow={setShow} key={item._id} />)
                : products
                  .slice(0, show)
                  .map((items) => <Product item={items} key={items._id} />)}
            </Row>
          </Fade>

          <button className="btn btn-outline-danger d-block m-auto" onClick={loadMoreProducts}>
            See More
            <AiOutlineArrowDown className="mx-2" />
          </button>
        </Container>
      </section>


      <section>
        <Container fluid>
          <Row>
            <Col md={6}>

            </Col>
            <Col md={6}>
              {/* Special Limited Time Deal */}
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        {/* Instagram Image Gallery Section */}
        <Container className='my-4'>
          <h1 style={{ fontFamily: 'Open Sans' }} className='display-5 mt-5 mb-3 text-center'>
            <a href="https://www.instagram.com/bookshopcompk/" target="_blank" className="text-decoration-none text-dark">
              #Stationeryshop
            </a>
          </h1>
          <Row>
            <Box sx={{ width: 1200, minHeight: 829 }} className='m-auto'>
              <Masonry columns={3} spacing={2}>
                {imageGallery.slice(0, instaReel).map((item, index) => (
                  <div key={index}>
                    <a href="https://www.instagram.com/bookshopcompk/" className='text-danger' target="_blank" rel="noreferrer">
                      <Label><FaInstagram className='text-danger' /></Label>

                      <img
                        src={`${item.img}?w=162&auto=format`}
                        srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        className='shadow-sm'
                        style={{
                          borderBottomLeftRadius: 4,
                          borderBottomRightRadius: 4,
                          display: 'block',
                          width: '100%',
                        }}
                      />

                    </a>
                  </div>
                ))}
              </Masonry>
            </Box>
            <button className="btn btn-outline-danger col-sm-3 m-auto" onClick={HandleInstaReal} disabled={instaReel === 18}>
              Load More
              <BiDownArrowAlt className="ml-1" />
            </button>
          </Row>
        </Container>
      </section>


      <section>
        <Container fluid className="bg-danger my-5 text-center text-white">
          <h1 className="text-white text-center p-5">3 reason to go with bookshop</h1>
          <Row className="pb-5 m-auto">
            <Col md={{ span: 3, offset: 1 }}>
              <h3>Boot customer loyalty</h3>
              <h6>Deliver highly relevant experiences to make sure your
                customer come back again and again.
              </h6>
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <h3>Grow your market</h3>
              <h6>
                create personalized paper products like registers and notebooks
                that speaks themselves at the exact moment.
              </h6>
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <h3>Build campaigns</h3>
              <h6>
                Pick and choose among pre-set promotions to increase sales
                and customer satisfaction.
              </h6>
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container className="mt-5">
          <Fade bottom>
            <Row className="text-center">
              <h2 className="text-center">Our Partners</h2>
              <Col md={2}>
                <Fade top>
                  <img src="imgs/ourpartners/beaconhouse_school.png" alt="beaconhouse_school.png" className="img-fluid rounded-circle shadow mt-3" style={{ height: "175px" }} />
                </Fade>
              </Col>
              <Col md={2}>
                <Fade bottom>
                  <img src="imgs/ourpartners/carrfour_store.png" alt="carrfour_store.png" className="img-fluid rounded-circle shadow mt-3" style={{ height: "175px" }} />
                </Fade>
              </Col>
              <Col md={2}>
                <Fade top>
                  <img src="imgs/ourpartners/csd_store.png" alt="csd_store.png" className="img-fluid rounded-circle shadow mt-3" style={{ height: "175px" }} />
                </Fade>
              </Col>
              <Col md={2}>
                <Fade bottom>
                  <img src="imgs/ourpartners/my-bagpack.jpg" alt="metro_store.png" className="img-fluid rounded-circle shadow mt-3" style={{ height: "175px" }} />
                </Fade>
              </Col>
              <Col md={2}>
                <Fade top>
                  <img src="imgs/ourpartners/metro_store.png" alt="metro_store.png" className="img-fluid rounded-circle shadow mt-3" style={{ height: "175px" }} />
                </Fade>
              </Col>

              <Col md={2}>
                <Fade bottom>
                  <img src="imgs/ourpartners/lums.svg.png" alt="metro_store.png" className="img-fluid rounded-circle shadow mt-3" style={{ height: "175px" }} />
                </Fade>
              </Col>
            </Row>
          </Fade>
        </Container>
      </section>


      <section>
        <FloatingWhatsApp
          phoneNumber="923061406329"
          accountName="Book Shop"
          avatar="imgs/logo192.jpg"
          statusMessage="Typically replies within 1 hour"
          placeholder="Type a message.."
          chatboxHeight="400px" />
      </section>
    </>
  );
};

export default Home;
