import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonNewAppointment } from '../components/ButtonNewAppointment';
import Z3 from '../image/z3.png'
// import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <Container fluid className="homeContainer d-flex flex-column">
        <Row className="d-flex justify-content-center">
            <Col xxl={5} xl={5} sm={7} className="my-3">
                <img src={ Z3 } alt="Z3" className='z3' />
                <div className='home1Container'></div>
            </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <ButtonNewAppointment/>
        </Row>
        {/* <Row>
          <Footer/>
        </Row> */}
    </Container>
  )
}
