import { Link } from 'react-router-dom'
import Pulse from 'react-reveal/Pulse'
import { Col, Card, Button, Badge } from 'react-bootstrap'


const Product = ({ item }) => {


    return (
        <>
            <Col sm={12} md={4} lg={4} className="mt-5 mb-5" key={item._id}>
                <Pulse>
                    <Card className='shadow-sm border-0'>
                        <Link to={`/product/${item._id}`} className="text-dark text-decoration-none">
                            <Card.Img variant="top" src={item.img} alt={item.title} loading="lazy" className="img-fluid shadow-sm rounded-3" style={{ height: "352px" }} />
                            <Card.ImgOverlay>
                                <Card.Title><Badge bg="danger">{item.inStock > 0 ? '' : 'Sold Out'}</Badge></Card.Title>
                            </Card.ImgOverlay>
                        </Link>
                        {/* <small className='ms-1 text-danger'><u>Price may vary based on size and Quality of the product</u></small> */}
                        <Card.Body>
                            <Link to={`/product/${item._id}`} className="text-dark text-decoration-none">
                                <Card.Title>{item.title}</Card.Title>
                            </Link>
                            <Card.Text className='text-truncate text-muted'>{item.desc}</Card.Text>
                            <h5 className="me-auto">Price: Rs. <span className='fw-bold'>{item.price}</span> </h5>
                            <Link to={`/product/${item._id}`} className="text-dark text-decoration-none">
                                <Button variant="outline-danger" outline>
                                    Add to Cart
                                </Button>
                            </Link>
                        </Card.Body>

                    </Card>
                </Pulse>
            </Col>
        </>
    )
}

export default Product
