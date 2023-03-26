import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AboutUs.css'
import Local from '../../image/local.jpg'

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
            <Row>
                <Col>
                    <div className='column1 d-flex flex-column'>
                        <img className='localImg' src={Local} alt="" />
                        <p>Hello World!</p>
                        <p>Somos Planet Express Dental Clinic, una pequeña clínica dental ficticia que pretende
                            replicar la aplicación web de una consulta, capaz de gestionar el modelo de negocio 
                            de una clínica...
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className='column2'>hola</div>
                </Col>
                <Col>
                    <div className='column3'>hola</div>
                </Col>
            </Row>
        </Container>
  )
}