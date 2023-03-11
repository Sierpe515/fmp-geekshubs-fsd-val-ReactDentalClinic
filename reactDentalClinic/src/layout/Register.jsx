import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormRegister } from '../components/FormRegister';
import Z2 from '../image/z2.png'
// import { Footer } from '../components/Footer';




export const Register = () => {
    return (
        <Container fluid className="homeContainer">
            <Row className="d-flex justify-content-center">
                <Col xxl={4} xl={5} sm={7} className="my-3">
                    <img src={ Z2 } alt="Z2" className='z2' />
                    <div className='logRegContainer'>
                        <h1 className='text-center'>Register</h1>
                        <FormRegister/>
                    </div>
                </Col>
            </Row>
            {/* <Row>
                <Footer/>
            </Row> */}
        </Container>
    )
}