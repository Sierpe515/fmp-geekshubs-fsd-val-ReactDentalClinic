import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Appointments = () => {
  return (
    <Container fluid className="homeContainer d-flex flex-column justify-content-between">
            <Row className="d-flex justify-content-center">
                <Col xxl={4} xl={5} sm={7} className="my-3">
                    <div className='logRegContainer'>
                        <h1 className='text-center'>Appointments</h1>
                    </div>
                </Col>
            </Row>
        </Container>
  )
}
