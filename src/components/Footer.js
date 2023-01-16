import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './style.css'


const Footer = () => {

    return (
        <>
            <section>
                <footer className=" mt-5 bg-light">
                    {/* Footers Main menu */}
                    <section className="mt-3 pt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <h5 className='text-primary'>BookShop.</h5>
                                    <p>Indus Stationer(SMC) pvt. Ltd. is serving by providing quality paper products & superior stationery articles to our customers.</p>
                                    {/* <p>BookShop is a project of <em>Indus Stationers/Publishing House</em>, we are working in this field since 1956. Our Team will be delighted to have you onboard with us.</p> */}
                                    {/* <h6>Follow us</h6> */}
                                    <div className="row mb-2">
                                        <div className='d-flex'>
                                            <a href="https://www.facebook.com/stationeryatbookshop/" target="blank"><h2 className='text-secondary'><FaFacebookF /></h2></a>
                                            <a href="https://www.instagram.com/bookshopcompk/" target="blank"><h2 className='px-2 text-dark'><FaInstagram /></h2></a>
                                            <a href="https://twitter.com/" target="blank"><h2 className='px-2'><FaTwitter /></h2></a>
                                            <a href="https://www.youtube.com/" target="blank"><h2 className='px-2 text-danger'><FaYoutube /></h2></a>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-3">
                                    <h6 className="font-weight-bold mb-3">Information</h6>
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><Link to="/faq" className="text-muted">FAQs</Link></li>
                                        <li className="nav-item"><Link to="/" className="text-muted">Our Partners</Link></li>
                                        <li className="nav-item"><Link to="/privacypolicy" className="text-muted">Privacy Policy</Link></li>
                                        <li className="nav-item"><Link to="/shippingpolicy" className="text-muted">Shipping Policy</Link></li>
                                        <li className="nav-item"><Link to="/cancellationpolicy" className="text-muted">Exchange Policy</Link></li>
                                        <li className="nav-item"><Link to="/termsconditions" className="text-muted">Terms and Conditions</Link></li>
                                    </ul>
                                </div>

                                <div className="col-md-3">
                                    <h6 className="font-weight-bold mb-3">Trending</h6>
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><Link to="/" className="text-muted">Subject NoteBooks</Link></li>
                                        <li className="nav-item"><Link to="#" className="text-muted">Shopping Bags</Link></li>
                                        <li className="nav-item"><Link to="/" className="text-muted">Spiral Registers</Link></li>
                                        <li className="nav-item"><Link to="/" className="text-muted">Coloring Books</Link></li>
                                        <li className="nav-item"><Link to="/" className="text-muted">Learning Books</Link></li>
                                        <li className="nav-item"><Link to="/" className="text-muted">Chart/Glaze Paper</Link></li>
                                    </ul>
                                </div>

                                <div className="col-md-3">
                                    <h6 className="font-weight-bold mb-3">About us</h6>
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><Link to="/about" className="text-muted">About us</Link></li>
                                        <li className="nav-item"><Link to="/" className="text-muted">Our Factory</Link></li>
                                        <li className="nav-item"><Link to="/" className="text-muted">Pdf Brochure</Link></li>
                                        <li className="nav-item"><Link to="/shop" className="text-muted">Products Shop</Link></li>
                                        <li className="nav-item"><Link to="/" className="text-muted">Cash on Delivery</Link></li>
                                        <li className="nav-item"><Link to="/contact" className="text-muted">Contact us</Link></li>
                                    </ul>
                                </div>

                                <div className="payment-method-footer-imgs text-center m-auto pb-5 pt-5">
                                    <img src="imgs/footer/MasterCard.png" alt="MasterCard.png" className="img-fluid" style={{ height: "60px", width: "100px" }} />
                                    <img src="imgs/footer/stripe.png" alt="stripe.png" className="img-fluid ms-3 rounded" style={{ height: "60px", width: "100px" }} />
                                    <img src="imgs/footer/Visa.png" alt="Visa.png" className="img-fluid ms-3" style={{ height: "60px", width: "100px" }} />
                                </div>
                                <br />
                            </div>
                        </div>
                    </section>

                    <div className="m-auto">
                        <p className="text-center m-0 p-4 text-white" style={{ background: "#232f3e" }}>&copy; copyright 2023 BookShop. All Rights Reserved.</p>
                    </div>

                </footer>

            </section>
        </>
    )
}

export default Footer