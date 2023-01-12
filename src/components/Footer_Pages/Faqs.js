import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'


const questions = [
  {
    question: 'How can I register an account?',
    answer: 'For registration visit our website www.bookshop.com.pk or our mobile app. Go to login page, click signup/register option and enter your Name, Email, Phone number, etc. A confirmation email will be sent on your registered email. Please click the link in the email to confirm your account. Register',
  },
  {
    question: 'What can I do if i forget my password?',
    answer:
      "If you forget your password please follow these steps; Click forgot password on the sign in page, Fill in the registered email and click submit, You will receive an email on the registered email account, Click on the given link in email to change password. (Call our customer service representative on the given helpline and a link will be sent on your registered email to reset your password.)",
  },
  {
    question: 'What Payment Methods can I use',
    answer: 'bookshop have the following payment methods through which you can make a payment: Credit/Debit Card VISA/MasterCard COD (Cash on delivery across Pakistan)',
  },
  {
    question: 'How do I place an order?',
    answer: 'Visit our website www.bookshop.com.pk or bookshop App and register an account. Browse through categories and subcategories to find your desired product, you can also search for a product on the search bar. After choosing the product add the product to cart and click on the checkout button. Fill in your details i.e. preferred address and payment method. Click on place order and you will receive a confirmation email with your order details and order ID.',
  },
  {
    question: 'How can I track my order?',
    answer: 'You will receive regular updates about your order status via email, SMS and calls by our customer service representatives. Our rider will also contact you on your registered number when he picks up your order for delivery.',
  },
  {
    question: 'How do I cancel my order?',
    answer: 'You can cancel your order at the time of confirmation call from our customer service department. After order confirmation your order can not be cancelled.',
  },
  {
    question: 'Can I change my delivery address?',
    answer: 'Yes, your delivery address can be changed when customer service representative calls for order confirmation.',
  },
  {
    question: 'What if I do not receive my order in time?',
    answer: 'In case your order is delayed due to unforeseen reasons our customer service representative will keep you updated.',
  },
  {
    question: 'What is the delivery/shipping charges?',
    answer: 'Shipping charges may vary according to the products.',
  },
  {
    question: 'What is the promised delivery time?',
    answer: 'Our estimated delivery time is 1 to 2 working days.',
  },
  {
    question: 'What if I have a complaint regarding my order or delivery service?',
    answer: 'You can call our customer service representative anytime between 9 AM to 12 AM 7 days a week for complaints/feedback/queries OR please write on to register your complaint. We will be more than happy to help you.',
  },
  {
    question: 'What if I receive wrong articles in my order?',
    answer: 'bookshop.pk makes sure that orders are double checked before they are dispatched. But if this unfortunate event takes place, we are here to help, just call our customer representative on our helpline 03 111 666 144 within regular working hours OR write on . Our customer service representative will resolve your issue as soon as possible with an appropriate solution.',
  },
  {
    question: 'What if I receive a damaged/expired order?',
    answer: 'Incase you receive a damaged or expired product, call 03 111 666 144 or whatsapp 03171777015 our customer service representative on the given number. Our customer service representative will ask for the images of the damaged or expired article for proof via whatsapp or email along with the order number and then register your complaint. You will be contacted shortly by our team with a solution.',
  },
  {
    question: 'What if I want to return my order?',
    answer: 'Order can only be returned in case of damage. Otherwise we do not have a return policy.',
  },
  {
    question: 'Do you ship outside Pakistan?',
    answer: 'Sorry, right now we are not offering shipping outside Pakistan.',
  },
  {
    question: 'In case I receive a wrong product in my order,do I have to return all products?',
    answer: 'No, you do not have to return your whole order. Just return the defective or wrong product and you will receive a coupon code of that value.',
  },
  {
    question: 'What are the reasons for delivery delays?',
    answer: 'There can be many reasons behind a delivery delay,for example bad weather, inaccurate delivery address, no-go zones,law & order situation and road blocks etc. Our customer services team will keep you posted in any of such situations.',
  },
  {
    question: 'We’re Here to Help! Contact us',
    answer: 'Version 1.1.05 Contact Us 2023.',
  },
];


const Accordion = () => {

  const [accordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={10} className="my-4 m-auto">
            <div>
              <span className="accordion__title text-primary">Frequently asked questions</span>
              <h4>Let's answer some of your questions</h4>
            </div>
            <div className="accordion__faq mt-4">
              {questions.map((item, index) =>
                <div key={index} onClick={() => toggleAccordion(index)}>
                  <div className="accordion__faq-heading">
                    <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                    <div>
                      {accordion === index ?
                        <span className="verticle">-</span> : <span className="horizental">+</span>}
                    </div>
                  </div>
                  <div><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Accordion;
