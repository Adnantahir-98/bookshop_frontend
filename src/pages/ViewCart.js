import { useState, useEffect } from "react"

import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct, clearCart } from "../redux/cartSlice"
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from "../requestMethods"

import { BsTrash } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaCcMastercard, FaCcVisa, FaCcStripe } from 'react-icons/fa'
// import { IoMdAdd } from 'react-icons/io'

import styled from "styled-components"
// import { mobile } from '../responsive'


const ViewCart = ({ _id }) => {

    const [stripeToken, setStripeToken] = useState(null);
    const cart = useSelector((state) => state.cart);
    const history = useNavigate();
    const KEY = process.env.REACT_APP_STRIPE
    const dispatch = useDispatch()

    const onToken = (token) => {
        setStripeToken(token);
    };

    const handleRemoveCartItem = (id) => {
        dispatch(removeProduct(id))
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500,
                });
                history.push("/success", {
                    stripeData: res.data,
                    products: cart,
                });
            } catch { }
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, history]);

    return (
        <>
            <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">

                                    <div className="row">

                                        <div className="col-sm-12 col-md-8 col-lg-8">
                                            <h5 className="mb-3">
                                                <Link to="/shop" className="text-body">
                                                    <AiOutlineArrowLeft className="me-2" />
                                                    Continue shopping
                                                </Link>
                                            </h5>
                                            <hr />

                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <h2>Billing & Shipping</h2>
                                                    <p className="mb-0">You have ({cart.quantity}) items in your cart</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0 btn btn-outline-danger btn-sm" onClick={() => dispatch(clearCart())}>Clear Cart</p>
                                                </div>
                                            </div>
                                            {cart.products.map((product) => (
                                                <div className="card border-0 border-bottom mb-3" key={product._id}>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-flex">
                                                                <div>
                                                                    <img
                                                                        src={product.img} className="img-fluid rounded-3 product-img_dsply" alt={product.title} style={{ width: "65px" }} />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>{product.title}</h5>
                                                                    <p className="small mb-0">{product._id}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 d-flex">

                                                                <h5 className="py-0 my-0 rounded text-center mt-2">{product.quantity}</h5>

                                                                {/* <ProductAmountContainer>
                                                                    <AiOutlineMinus className="ms-auto me-2 mt-1" />
                                                                    <ProductAmount
                                                                        className="w-25 text-center border-muted"
                                                                        onChange={(e) => setQuantity(e.target.value)} 
                                                                        value={
                                                                            editQuantity.status && 
                                                                            editQuantity.id === product._id 
                                                                            ? quantity 
                                                                            : product.quantity}
                                                                        type="number"
                                                                        onClick={()=>handleEditQuantity(product._id)}
                                                                        onBlur={()=>handleQuantityBlur(product._id, 'updateQuantity')}
                                                                        onFocus={()=>setQuantity('')} />
                                                                    <IoMdAdd className=" mt-1" />
                                                                </ProductAmountContainer> */}
                                                                <h5 className="fw-normal mt-2 ms-auto text-primary">({product.size})</h5>
                                                                <ProductColor className="mx-auto" color={product.color} />
                                                                <div style={{ width: "80px" }} className="ms-auto mt-2">
                                                                    <h5>$ {product.price * product.quantity}</h5>
                                                                </div>
                                                                <BsTrash className="mt-2 position-relative right-0 h4" onClick={() => handleRemoveCartItem(product._id)} style={{ cursor: "pointer", color: 'darkred' }} />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4">

                                            <div className="card bg-primary text-white rounded-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <h5 className="mb-0">Cart Details</h5>
                                                    </div>

                                                    <span className="text-white h1 me-2"><FaCcMastercard /></span>
                                                    <span className="text-white h1 me-2"><FaCcVisa /></span>
                                                    <span className="text-white h1"><FaCcStripe /></span>

                                                    <hr className="my-3" />

                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Subtotal</p>
                                                        <p className="mb-2">$ {cart.total}.00</p>
                                                    </div>

                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Shipping Discount</p>
                                                        <p className="mb-2">$0.00</p>
                                                    </div>

                                                    <div className="d-flex justify-content-between mb-4">
                                                        <p className="mb-2">Total(Incl. taxes)</p>
                                                        <p className="mb-2">$ {cart.total}.00</p>
                                                    </div>

                                                    <StripeCheckout
                                                        name="Book Shop"
                                                        image="imgs/logo192.jpg"
                                                        billingAddress
                                                        shippingAddress
                                                        description={`Your total is $${cart.total}`}
                                                        amount={cart.total * 100}
                                                        token={onToken}
                                                        stripeKey={KEY}
                                                    >
                                                        <button className="btn btn-danger">CHECKOUT NOW</button>
                                                    </StripeCheckout>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ViewCart


const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: auto;
  margin-top: 12px;
  background-color: ${(props) => props.color};
`;

// const ProductAmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const ProductAmount = styled.input`
//   font-size: 24px;
//   margin: 5px;
//   ${mobile({ margin: "5px 15px" })}
// `;
