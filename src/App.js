import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Login from './pages/Login'
import About from './pages/About'
import ViewCart from './pages/ViewCart'
import Register from './pages/Register'
import ProductDetails from './pages/ProductDetails'
import OrderSuccess from './components/Order_Completed'

import Loader from './components/Loading'
import FAQ from './components/Footer_Pages/Faqs'
import PrivacyPolicy from './components/Footer_Pages/Privacy_Policy'
import ShippingPolicy from './components/Footer_Pages/Shipping_Policy'
import TermsConditions from './components/Footer_Pages/Terms_Conditions'
import CancellationPolicy from './components/Footer_Pages/cancelPolicy'

import Footer from './components/Footer'
import Error404 from './pages/Error404'
// import ReactGa from 'react-ga'


const App = () => {

  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   ReactGa.initialize('G-C40NBJ7H30')

  //   // to resport page view
  //   ReactGa.pageview(window.location.pathname + window.location.search)
  // }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 600)

  }, [])

  return (
    <>
      {loading ? (
        <>
          <Loader loading={loading} />
        </>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/viewcart" element={<ViewCart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/success" element={<OrderSuccess />} />
            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/shippingpolicy" element={<ShippingPolicy />} />
            <Route path="/termsconditions" element={<TermsConditions />} />
            <Route path="/cancellationpolicy" element={<CancellationPolicy />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
