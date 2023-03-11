import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormRegister } from '../components/FormRegister';




export const Register = () => {
    return (
        <Container fluid className="homeContainer">
        <Row className="d-flex justify-content-center">
            <Col lg={5} sm={8} className="my-3">
                <div className='logRegContainer'>
                    <h1>Register</h1>
                    <FormRegister/>
                </div>
            </Col>
        </Row>
        </Container>
    )
}