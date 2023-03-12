
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip'
import implant from '../image/implant.png';
import bruxism from '../image/bruxism.png';
import orthod from '../image/orthod.png';
import whitening from '../image/whitening.png';
import period from '../image/period.png';
import other from '../image/other.png'

export const NewAppointment = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

  return (
    <Container fluid className="homeContainer d-flex flex-column justify-content-between">
            <Row className="d-flex justify-content-center">
                <Col xxl={4} xl={5} sm={7} className="my-3">
                    <div className='logRegContainer'>
                        <h1 className='text-center'>New Appointment</h1>
                    </div>
                </Col>
            </Row>
            <Row className="treatments justify-content-center">
                <div className='d-flex justify-content-center align-items-center treatmentContainer' ref={target} onMouseEnter={() => setShow(!show)}><img className='treatmenticon' src={ implant } alt="" /></div>
                <Overlay target={target.current} show={show} placement="bottom">
                    {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        Implantology
                    </Tooltip>
                    )}
                </Overlay>
                <div className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmenticon' src={ bruxism } alt="" /></div>
                <div className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmenticon' src={ orthod } alt="" /></div>
                <div className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmenticon' src={ whitening } alt="" /></div>
                <div className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmenticon' src={ period } alt="" /></div>
                <div className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmenticon' src={ other } alt="" /></div>
            </Row>
        </Container>
  )
}
