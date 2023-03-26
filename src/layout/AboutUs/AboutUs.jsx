import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AboutUs.css'
import Local from '../../image/local.jpg'
import Logo2 from '../../image/logo2.png'
import Location from '../../image/location.png'

export const AboutUs = () => {
  return (
    <Container fluid className="homeContainerMin d-flex flex-column justify-content-between">
            <Row className="d-flex justify-content-center">
                <Col xxl={4} xl={5} sm={7} className="my-3">
                    <div className='logRegContainer'>
                        <h1 className='text-center'>About Us</h1>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-around'>
                <Col xxl={4} xl={4} sm={10}>
                    <div className='column1 d-flex justify-content-center flex-column align-items-center'>
                        <img className='localImg' src={Local} alt="" />
                        <p>Hello World!</p>
                        <p>We are Planet Express Dental Clinic, a small fictitious dental clinic which pretends to replicate a consult’s web application, that is able to manage clinic’s business model. </p>
                        <p>Everything as a “React” and “Redux” learning project. It is the fifth Project from the GeeksHubs Academy’s Bootcamp, in which we are required to generate a front end that connects with our API, in charge of managing the business.</p>
                        <p>Therefore, the necessary layouts for log in as users and to be able to register ourselves have been created in this web, as well as creating access to an exclusive zone for administrators and another one for doctors. Also, a layout to see an individual user’s profile, modify their data or see past and pending appointments. </p>
                    </div>
                </Col>
                <Col xxl={4} xl={4} sm={10}>
                    <div className='column2 d-flex justify-content-center flex-column align-items-center'>
                        <p>As well, dentists can access it as professionals, which allows them to see every programmed appointment detailed, plus a list of the registered users and their detailed personal data.</p>
                        <img className='logo2' src={Logo2} alt="" />
                        <p>Our clinic ambience is mainly inspired in the legendary series “Futurama”, with doctor Zoiberg as the main inspiration. The rest of doctors shown in the application are well known doctors in pop culture. Even though, the application allows the dinamic creation of more doctors.
                        </p>
                        <p>Likewise, we offer a wide range of dental health services which can be selected at the moment of picking a date and can be looked up - as well as the doctors - in the services’ dropdown.
                        </p>
                        <p>We count with the latest on safety measures for keeping your personal information and passwords safe. 
                        </p>
                        <p>The registered client can access to their profile and update their data. As well as check their records and pending appointments, and canceled them.  
                        </p>
                        <p>If the client chooses, they can also request an administrator to do it for them. We have tried to give the most functionality to our web for it to work in every aspect as a real business would do it, setting aside the differences, given that this Project has been developed by a single  <a href="https://www.linkedin.com/in/fernando-martínez-pardo-61456712a/">person</a> in almost three weeks.
                        </p>
                    </div>
                </Col>
                <Col xxl={4} xl={4} sm={10}>
                    <div className='column3 d-flex justify-content-center flex-column align-items-center text-center'>
                        <h4>Commercial spot </h4>
                        <p></p>
                        <p><strong>Please, try to register with us and be a part of our clinic.</strong></p>
                        <p><strong>Book a date with one of our famous doctors and let us take care of your dental health.</strong></p>
                        <p>Maybe they are not the ideal ones, but they will take care of your ailment for sure,  <br/>
                            they might create a few new ones in the process.</p>
                        <p><strong>Our clinic possesses the latest equipment on the market and the best safety protocols to ensure your safety. </strong></p>
                        <p><strong>We are located somewhere in New York City, in the year 2999.</strong></p>
                        <img className='locationImg' src={Location} alt="" />
                        <h4><strong>Do not think it twice and BOOK AN APOINTEMENT NOW!</strong></h4>
                    </div>
                </Col>
            </Row>
        </Container>
  )
}