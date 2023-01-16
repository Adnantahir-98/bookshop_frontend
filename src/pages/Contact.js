import { useState, useEffect } from 'react'
// import emailjs from '@emailjs/browser'
import {Alert} from 'react-bootstrap'
import { BsEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs'
import {ImMobile} from 'react-icons/im'
import './style.css'


const Contact = () => {

    const [status, setStatus] = useState('')

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        message: ''
    })
    console.log(values)

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        if (status === 'SUCCESS') {
            setTimeout(() => {
                setStatus('')
            }, 3000)
        }
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        // emailjs.send('service_fpxjwdp', 'template_8v9i7xn', values, 'hmdtKFt_k4Ew3iGSX')
        //     .then(response => {
        //         console.log('Success', response)
        //         setValues({
        //             fullName: '',
        //             email: '',
        //             message: ''
        //         })
        //         setStatus('SUCCESS')
        //     }, error => {
        //         console.log("Failed...", error)
        //     })
    }

    return (
        <div style={{ overflowX: "hidden" }}>
            <header className="pb-4 mb-4">
                <div className="row pb-4 contact_img mb-3">
                    <div className="container overlay_img text-center img-fluid"><br /> <br />
                        <h1 className="text-white contact-header_text">Contact Us</h1>
                    </div>
                </div>
            </header>

            <div className="container">
                <h2 className="fw-bold text-center my-5">Let's Start a Conversation</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="fw-bold mb-3">Ask how we can help you:</h5>
                        <h6 className="fw-bold">Information & sales</h6>
                        <span><BsEnvelopeFill className='text-primary' /> info@bookshop.com.pk</span>
                        <p className='mb-0'><ImMobile className='text-primary' /> +92309-0144943</p>
                        <p className='mb-3'><BsFillTelephoneFill className='text-primary' /> +92423-7120108</p>

                        <h6 className="fw-bold">Support</h6>
                        <span><BsEnvelopeFill className='text-dark' /> support@bookshop.com.pk</span>

                        <h5 className="fw-bold my-3"> Office Location </h5>
                        <h3 className="fw-light">Pakistan:</h3>
                        <p>Indus Publishing House, <br /> Al-Karim Market Urdu Bazar, Lahore.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Please note: all fields are required.</p>
                        <form onSubmit={handleSubmit} onChange={handleChange}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" required placeholder="Your FullName" name='fullName' value={values.fullName} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" required placeholder="Your Email Address" name="email" value={values.email} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control" required name='message' value={values.message} placeholder="You Message here." rows="4"></textarea>
                            </div>
                            {status && renderAlert()}
                            <button className="btn btn-outline-primary my-3" type="submit">Send</button>
                        </form>

                    </div>
                </div>
            </div>

            {/* Google Maps Embeded API 'fne trades' */}
            <div className="embed-responsive embed-responsive-16by9 mt-5">
                <iframe title="IndusMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13596.691487757422!2d74.29140485264249!3d31.574306955837244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191dc4ed9976fb%3A0x165d603f0ffbd721!2sIndus%20Publishing%20House!5e0!3m2!1sen!2s!4v1672835304530!5m2!1sen!2s" width="100%" height="525" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}


const renderAlert = () => (
    <Alert variant='success'>
      Your Response Submitted Successfully!
    </Alert>
)

export default Contact
