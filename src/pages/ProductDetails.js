import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import { publicRequest } from '../requestMethods'
import { addProduct } from "../redux/cartSlice"
import { useDispatch } from "react-redux"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { AiOutlineMinus } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import styled from 'styled-components'


const ProductDetails = () => {

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")

    const dispatch = useDispatch()

    const location = useLocation()
    const id = location.pathname.split("/")[2]


    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch { }
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        // Update Cart
        dispatch(
            addProduct({ ...product, quantity, color, size })
        )
    }

    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <img src={product.img} className="img-fluid p-1 border rounded-3 shadow" alt={product.title} />
                </Col>
                <Col md={6}>
                    <Card className="border-0">
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted font-monospace">Category</Card.Subtitle>
                            <Card.Title>
                                <h1 className="fw-bold mt-0 pt-0">{product.title}</h1>
                            </Card.Title>
                            {/* <h6>Rating 3.8, 18 reviews</h6> */}
                            <Card.Text>
                                {product.desc}
                            </Card.Text>

                            <h3 className="fw-bolder"> ${product.price}</h3>

                            <div className="d-flex my-2">
                                <h5 className="me-3 mt-1">Size: </h5>
                                <select className="form-select w-25">
                                    {product.size?.map((s) => (
                                        <option key={s}>{s}</option>
                                    ))}
                                </select>
                            </div>
                            <FilterContainer>
                                <Filter>
                                    <h5>Color: </h5>
                                    {product.color?.map((c) => (
                                        <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                                    ))}
                                </Filter>
                            </FilterContainer>
                            <div className="d-flex">
                                <h5 className="mt-1 me-3">Quantity: </h5>
                                <AiOutlineMinus onClick={() => handleQuantity("dec")} className="me-2 h3 mt-1" />
                                <h4 className="border border-primary rounded px-2 mt-1">{quantity}</h4>
                                <IoMdAdd onClick={() => handleQuantity("inc")} className="ms-2 h3 mt-1" />
                            </div>
                            <div className="d-flex">
                                <h5 className="me-3">Stock: </h5>
                                <h6 className={product.inStock > 0 ? 'text-dark mt-1' : 'text-danger mt-1'}>"{product.inStock > 0 ? 'Stock Available' : 'Out of Stock'}"</h6>
                            </div>

                            <Button
                                variant="outline-primary"
                                disabled={product.inStock === 0}
                                onClick={handleClick}
                                className="mt-2">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;

// Styled Components for Color Display...
const FilterContainer = styled.div`
  width: 50%;
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
