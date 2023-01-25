import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import ViewCart from './pages/ViewCart'
import Register from './pages/Register'
import ProductDetails from './pages/ProductDetails'
import OrderSuccess from './components/Order_Completed'

import Loader from './components/Loading'
import FAQ from './components/Footer_Pages/Faqs'
import PrivacyPolicy from './components/Footer_Pages/Privacy_Policy'
import ShippingPolicy from './components/Footer_Pages/Shipping_Policy'
import CancellationPolicy from './components/Footer_Pages/cancelPolicy'
import TermsConditions from './components/Footer_Pages/Terms_Conditions'

import OrderList from './components/admin_pages/orderList'
import NewProduct from './components/admin_pages/addProduct'
import ProductList from './components/admin_pages/productList'
import OrderListEdit from './components/admin_pages/orderListEdit'
import ProductListEdit from './components/admin_pages/productListEdit'

import Footer from './components/Footer'
import Error404 from './pages/Error404'
import ReactGa from 'react-ga'


const App = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ReactGa.initialize('G-Q3YSBVRB06')

    // to resport page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)

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
            
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/viewcart" element={<ViewCart />} />
            <Route path="/success" element={<OrderSuccess />} />
            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="/orderslist/" element={<OrderList />} />
            <Route path="/productslist" element={<ProductList />} />
            <Route path="/addnew-product/" element={<NewProduct />} />
            <Route path="/orderlist-edit/:id" element={<OrderListEdit />} />
            <Route path="/productslist-edit/:id" element={<ProductListEdit />} />
            
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
