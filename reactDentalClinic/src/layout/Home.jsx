import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => {
  return (
    <Container fluid className="homeContainer">
        <Row className="d-flex justify-content-center">
            <Col lg={5} sm={4} className="my-3">
                <div className='home1Container'></div>
            </Col>
        </Row>
        </Container>
  )
}
