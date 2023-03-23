
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import doc1 from '../image/doc1.png';
import doc2 from '../image/doc2.png';
import doc3 from '../image/doc3.png';
import doc4 from '../image/doc4.png';
import doc5 from '../image/doc5.png';
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
                        <h1 className='text-center'>Book Appointment</h1>
                    </div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xxl={4} xl={5} sm={7} className="my-3">
                    <div className='logRegContainer'>
                        <h1 className='text-center'>Calendar</h1>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center hourGrid">
                <div className='d-flex justify-content-center align-items-center hourContainer'>09:00</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>09:30</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>10:00</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>10:30</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>11:00</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>11:30</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>12:00</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>12:30</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>13:00</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>13:30</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>14:00</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>14:30</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>15:00</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>15:30</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>16:00</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>16:30</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>17:00</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>17:30</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>18:00</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>18:30</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>19:00</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>19:30</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>20:00</div>
                <div className='d-flex justify-content-center align-items-center hourContainer'>20:30</div>
            </Row>
            <Row className="rowSpace justify-content-center">
                <div className='d-flex justify-content-center align-items-center doctorContainer'><img className='doctorIcon' src={ doc1 } alt="" /></div>
                <div className='d-flex justify-content-center align-items-center doctorContainer'><img className='doctorIcon' src={ doc2 } alt="" /></div>
                <div className='d-flex justify-content-center align-items-center doctorContainer'><img className='doctorIcon2' src={ doc3 } alt="" /></div>
                <div className='d-flex justify-content-center align-items-center doctorContainer'><img className='doctorIcon' src={ doc4 } alt="" /></div>
                <div className='d-flex justify-content-center align-items-center doctorContainer'><img className='doctorIcon' src={ doc5 } alt="" /></div>
            </Row>
            <Row className="rowSpace justify-content-center">
                <div className='d-flex justify-content-center align-items-center treatmentContainer' ref={target} onMouseEnter={() => setShow(!show)}><img className='treatmentIcon' src={ implant } alt="" /></div>
                <Overlay target={target.current} show={show} placement="bottom">
                    {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        Implantology
                    </Tooltip>
                    )}
                </Overlay>
                <div className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmentIcon' src={ bruxism } alt="" /></div>
                <div className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmentIcon' src={ orthod } alt="" /></div>
                <div className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmentIcon' src={ whitening } alt="" /></div>
                <div className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmentIcon' src={ period } alt="" /></div>
                <div className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmentIcon' src={ other } alt="" /></div>
            </Row>
        </Container>
  )
}
