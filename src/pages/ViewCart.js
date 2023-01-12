import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { userRequest } from "../requestMethods";
import StripeCheckout from 'react-stripe-checkout'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { FaCcMastercard, FaCcVisa, FaCcStripe } from 'react-icons/fa'


const ViewCart = () => {

    const [stripeToken, setStripeToken] = useState(null);
    const cart = useSelector((state) => state.cart);
    const history = useNavigate();
    const KEY = process.env.REACT_APP_STRIPE

    const onToken = (token) => {
        setStripeToken(token);
    };

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
        <div>
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
                                                {/* <div>
                                                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                                                        className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                                                </div> */}
                                            </div>
                                            {cart.products.map((product) => (
                                                <div className="card mb-3" key={product._id}>
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src={product.img} className="img-fluid rounded-3" alt={product.title} style={{ width: "65px" }} />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>{product.title}</h5>
                                                                    <p className="small mb-0">{product._id}</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: "50px" }}>
                                                                    <h5 className="fw-normal mb-0">{product.quantity}</h5>
                                                                </div>
                                                                <div className="d-flex" style={{ width: "50px" }}>
                                                                    <h5 className="fw-normal mb-0"> {product.size}</h5>
                                                                </div>  
                                                                <div style={{ width: "80px" }}>
                                                                    <h5 className="mb-0">$ {product.price * product.quantity}</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}><BsTrash /></a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                        <div className="col-lg-4">

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
                                                        <p className="mb-2">$ {cart.total}</p>
                                                    </div>

                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Shipping Discount</p>
                                                        <p className="mb-2">$15.00</p>
                                                    </div>

                                                    <div className="d-flex justify-content-between mb-4">
                                                        <p className="mb-2">Total(Incl. taxes)</p>
                                                        <p className="mb-2">$ {cart.total}</p>
                                                    </div>

                                                    <StripeCheckout
                                                        name="Book Shop"
                                                        image="imgs/cropped-fav1-180x180.jpg"
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
        </div>
    )
}

export default ViewCart