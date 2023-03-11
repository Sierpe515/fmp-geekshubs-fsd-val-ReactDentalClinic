import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormLogin } from '../components/FormLogin';
import Z1 from '../image/z1.png'

export const Login = () => {
    return (
        <Container fluid className="homeContainer">
        <Row className="d-flex justify-content-center">
            <Col xxl={4} xl={5} sm={7} className="my-3">
                <img src={ Z1 } alt="Z1" className='z1' />
                <div className='logRegContainer'>
                    <h1>Login</h1>
                    <FormLogin/>
                </div>
            </Col>
        </Row>
        </Container>
    )
}
