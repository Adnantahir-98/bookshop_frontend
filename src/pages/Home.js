import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import Product from "../components/Product"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineArrowDown } from 'react-icons/ai'
import HeadShake from 'react-reveal/HeadShake'
import Fade from 'react-reveal'
import axios from "axios"
import './style.css'



const Home = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [show, setShow] = useState(3)

  const loadMore = () => {
    setShow((prevValue) => prevValue + 3)
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
      } catch (err) {

      }
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


  return (
    <>
      <section>
        {/* Hero Section Home Page Header */}
        <Container fluid>
          <Row style={{ backgroundImage: "url(imgs/hero_section_bg.jpg)", height: "100vh", backgroundPosition: "center", backgroundSize: "cover" }}>
            <Col md={6} className="hero_column text-white">
              <Fade left>
                <h6 className="text-muted py-0 my-0">Indus Publishing House</h6>
                <h2 className="fw-bold text-white">Conquer Your Creativity With Our Fine Quality Paper Products</h2>
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


      {/* Header Section Background Image...  */}
      <section>
        <HeadShake>
          <Container className='rounded-3 mt-5'>
            <img src="imgs/pad_bg.jpg" className="rounded-3 img-fluid mt-5" />
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
        <Container>
          <Fade bottom>
            <Row>
              <h3 className='mt-5 text-center'>Our Latest Products</h3>
              <p className='text-center w-75' style={{ margin: "auto" }}>
                NoteBooks and Registers you can buy for the educational or office purposes! Experience fine quality &
                with an overwelmingly customer support from our team. The perfect book shop awaits for you.
              </p>
              {cat
                ? filteredProducts
                    .slice(0, show)
                    .map((item) => <Product item={item} show={show} setShow={setShow} key={item._id} />)
                : products
                    .slice(0, show)
                    .map((items) => <Product item={items} key={items._id} />)}
            </Row>
          </Fade>

          <button className="btn btn-outline-danger d-block m-auto" onClick={loadMore}>
            Load More
            <AiOutlineArrowDown className="mx-2" />
          </button>
        </Container>

      </section>


      <section>
        <Container className="mt-5">
          <Fade bottom>
            <Row className="text-center">
              <h2 className="text-center">Our Partners</h2>
              <Col md={3}>
                <Fade top>
                  <img src="imgs/ourpartners/beaconhouse_school.png" alt="beaconhouse_school.png" className="img-fluid rounded-circle shadow mt-3" style={{ height: "225px" }} />
                </Fade>
              </Col>
              <Col md={3}>
                <Fade bottom>
                  <img src="imgs/ourpartners/carrfour_store.png" alt="carrfour_store.png" className="img-fluid rounded-circle shadow mt-3" style={{ height: "225px" }} />
                </Fade>
              </Col>
              <Col md={3}>
                <Fade top>
                  <img src="imgs/ourpartners/csd_store.png" alt="csd_store.png" className="img-fluid rounded-circle shadow mt-3" style={{ height: "225px" }} />
                </Fade>
              </Col>
              <Col md={3}>
                <Fade bottom>
                  <img src="imgs/ourpartners/metro_store.png" alt="metro_store.png" className="img-fluid rounded-circle shadow mt-3" style={{ height: "225px" }} />
                </Fade>
              </Col>
            </Row>
          </Fade>
        </Container>
      </section>


      <section>
        <FloatingWhatsApp
          phoneNumber="+92309-0144943"
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

