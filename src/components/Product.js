import { Link } from 'react-router-dom'
import Pulse from 'react-reveal/Pulse'
import { Col, Card, Button } from 'react-bootstrap'


const Product = ({ item }) => {

    return (
        <>
            <Col sm={12} md={4} lg={4} className="mt-5 mb-5" key={item._id}>
                <Pulse>
                    <Card className='shadow-sm border-0'>
                        <Link to={`/product/${item._id}`} className="text-dark text-decoration-none">
                            <Card.Img variant="top" src={item.img} alt={item.title} loading="lazy" className="img-fluid shadow-sm rounded-3" style={{ height: "352px" }} />
                            {/* <small className='ms-2 text-danger'><u>Price may vary based on size and Quality of the product</u></small> */}
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text className='text-truncate'>{item.desc}</Card.Text>
                                <h5 className="me-auto">Price: ${item.price} </h5>
                                <Button variant="outline-dark" outline>
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Pulse>
            </Col>
        </>
    )
}

export default Product
