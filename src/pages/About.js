import './style.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaWhatsapp } from 'react-icons/fa'


const About = () => {
  return (
    <div>
      <header className='about_img'>
        <div className="container img-fluid">
        </div>
      </header>

      <Container>
        <Row>
          <Col md={5}>
            <img src="imgs/about/about_teams.png" className='img-fluid' alt="Book Shop" />
          </Col>
          <Col md={7} className='mt-5 pt-4'>
            <h5 className='mt-5 pt-5'>Book Shop is a fast-growing Publishing House that keeps culture and creativity at the heart of everything we do. Our mission is to help customers unlock their creativity and build exceptional content using our uniquely powerful designed platform(Indus) and our tirelessly helpful support and education resources — and do it all. </h5>
          </Col>
        </Row>

        <h1 className='text-center mt-5 mb-3'>Our mission is to inspire and unlock creativity with liberating Innovation.</h1>
        <Row>
          <Col md={6} className='mt-5 pt-3'>
            <h1>We're growing!</h1>
            <p>Book Shop is currently hiring for a number of key roles across various departments. Check our current listings to see if one of them is right for you.
              Book Shop is deeply committed to uniting exceptional people of all backgrounds in our shared passion to inspire and empower the creative potential of our 850+ clients.
            </p>
            <a href="https://wa.me/923061406329" target="_blank">
              <button className='btn btn-outline-primary'>
                <FaWhatsapp />
                Connect!
              </button>
            </a>
          </Col>
          <Col md={6}>
            <img src="imgs/about/connected_world.png" className='img-fluid' alt="Grow business with Book Shop" />
          </Col>
        </Row>


        <section>
          <h1 className='text-center m-auto py-3'>Initiatives and programs tailor made for you</h1>
          <p className="text-center m-auto w-75 pb-4">At Book Shop we are committed to your growth, professionally and personally. That's why we've created initiatives and programs designed to help you reach your potential.</p>
          <Row className='m-auto'>
            <Col md={3}>
              <Card className='text-center my-1 border-0' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="imgs/about/Connecting_Team.png" alt="Book Shop Connect" className='img-fluid m-auto w-25' />
                <Card.Body>
                  <Card.Title>Connect</Card.Title>
                  <Card.Text>
                    Monthly social events, and creative team-building activities that keep Book Shopians connected across the globe
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='text-center my-1 border-0' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="imgs/about/real_time_collaborate.png" alt="Book Shop Business Unity" className='img-fluid m-auto w-25' />
                <Card.Body>
                  <Card.Title>Unity</Card.Title>
                  <Card.Text>
                    Ongoing initiatives at Book Shop that cultivate a diverse and inclusive culture and foster participation for everyone
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='text-center my-1 border-0' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="imgs/about/Appreciation.png" alt="Potential Book Shop" className='img-fluid m-auto w-25' />
                <Card.Body>
                  <Card.Title>Potential</Card.Title>
                  <Card.Text>
                    Dedicated in-house coaching, tailored workshops, and career journey tools for your personal and professional growth
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='text-center my-1 mb-5 border-0' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="imgs/about/Developer_activity.png" alt="24/7 availability Book Shop" className='img-fluid m-auto w-25' />
                <Card.Body>
                  <Card.Title>Evolve 24/7</Card.Title>
                  <Card.Text>
                    Hub featuring curated content and professional resources, Book Shop only content and inovative design patterns
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>


        <section>
          <Row className='m-auto pb-3'>
            <h1 className='text-center m-auto py-3'>Our Team</h1>
            <Col md={3}>
              <Card className='text-center my-1' style={{ width: '17rem' }}>
                <Card.Img variant="top" src="imgs/about/usman_majeed.png" alt="Book Shop Team" className='img-fluid py-5 m-auto' />
                <Card.Body>
                  <Card.Title>Usman Majeed</Card.Title>
                  <Card.Text>
                    CEO/Founder
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='text-center my-1' style={{ width: '17rem' }}>
                <Card.Img variant="top" src="imgs/about/male_avatar.png" alt="Book Shop Tech Team Kevin" className='img-fluid m-auto' />
                <Card.Body>
                  <Card.Title>Charlie Cooper</Card.Title>
                  <Card.Text>
                    CTO
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='text-center my-1' style={{ width: '17rem' }}>
                <Card.Img variant="top" src="imgs/about/My_documents.png" alt="Book Shop Women in Tech" className='img-fluid m-auto' />
                <Card.Body>
                  <Card.Title>Elizabeth Sofia</Card.Title>
                  <Card.Text>
                    Human Resource
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='text-center mt-1 mb-5' style={{ width: '17rem' }}>
                <Card.Img variant="top" src="imgs/about/profile_pic.png" alt="Book Shop Team" className='img-fluid m-auto' />
                <Card.Body>
                  <Card.Title>Kevin Gonzalez</Card.Title>
                  <Card.Text>
                    Project Manager
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>


      </Container>
    </div>
  )
}

export default About
