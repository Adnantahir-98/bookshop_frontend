import {useState} from 'react'
import { v4 as uuidv4  } from 'uuid'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addProduct} from '../../redux/apiCalls'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'


const AddProduct = () => {

    const [newProduct, setNewProduct] = useState({
        title: '', 
        img: '',
        category: '',
        size: '',
        color: '',
        price: '',
        stock: '',
        desc: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const handleChange = (e) => {
    //     setNewProduct(values => ({
    //         ...values,
    //         [e.target.name]: e.target.value
    //     }))
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addProduct({ 
            id: uuidv4(),
            title: newProduct.title, 
            img: newProduct.img, 
            category: newProduct.category, 
            size: newProduct.size, 
            color: newProduct.color, 
            price: newProduct.price, 
            stock: newProduct.stock, 
            desc: newProduct.desc
        }))
        setNewProduct('')
        navigate('/productslist')
    }
    return (
        <>
            <Container>
                <Row>
                    <Col md={8} className="m-auto">
                        <Card className="bg-light rounded-3 mt-5 px-4 pb-2 pt-4 border-0 shadow-sm">
                            <center><h2 className='text-primary'>Add New Product</h2></center>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicUser">
                                            <Form.Label>Product Title</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                value={newProduct.title} 
                                                placeholder="Enter Product Title" 
                                                onChange={(e)=>setNewProduct({...newProduct, title: e.target.value})}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicImage">
                                            <Form.Label>Image</Form.Label>
                                            <Form.Control 
                                                type="file" 
                                                onChange={(e)=>setNewProduct({...newProduct, img: e.target.value})}
                                                placeholder="Upload Product Image" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicCategory">
                                            <Form.Label>Categories</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                value={newProduct.category} 
                                                onChange={(e)=>setNewProduct({...newProduct, category: e.target.value})}
                                                placeholder="Product Category" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicSize">
                                            <Form.Label>Size</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                value={newProduct.size} 
                                                onChange={(e)=>setNewProduct({...newProduct, size: e.target.value})}
                                                placeholder="Product Size" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicColor">
                                            <Form.Label>Color</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                value={newProduct.color} 
                                                onChange={(e)=>setNewProduct({...newProduct, color: e.target.value})}
                                                placeholder="Product Color" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicPrice">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                onChange={(e)=>setNewProduct({...newProduct, price: e.target.value})}
                                                value={newProduct.price} 
                                                placeholder="Product Price" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group as={Col} controlId="formGridStock">
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Select 
                                        defaultValue="Yes" 
                                        name="stock"  
                                        value={newProduct.stock}
                                        onChange={(e)=>setNewProduct({...newProduct, stock: e.target.value})}>
                                        <option disabled>Choose...</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicDesc">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        value={newProduct.desc} 
                                        onChange={(e)=>setNewProduct({...newProduct, desc: e.target.value})}
                                        placeholder="Product Description" />
                                </Form.Group>
                                <Button 
                                    className='mb-3' 
                                    variant="outline-primary" 
                                    type="submit">
                                    Add Product
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddProduct
