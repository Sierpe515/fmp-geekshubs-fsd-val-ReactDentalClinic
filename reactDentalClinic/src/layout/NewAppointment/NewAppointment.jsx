
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import doc1 from '../../image/doc1.png';
import doc2 from '../../image/doc2.png';
import doc3 from '../../image/doc3.png';
import doc4 from '../../image/doc4.png';
import doc5 from '../../image/doc5.png';
import implant from '../../image/implant.png';
import bruxism from '../../image/bruxism.png';
import orthod from '../../image/orthod.png';
import whitening from '../../image/whitening.png';
import period from '../../image/period.png';
import other from '../../image/other.png'
import './NewAppointment.css'

export const NewAppointment = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const [hour, setHour] = useState({});
    const [doctor, setDoctor] = useState({});
    const [treatment, setTreatment] = useState({});

    const chooseHour = (hora) => {
        console.log(hora)
        setHour(hora)
    }

    const chooseDoctor = (doctorElegido) => {
        console.log(doctorElegido);
        setDoctor(doctorElegido)
    }

    const chooseTreatment = (tratamiento) => {
        console.log(tratamiento);
        setDoctor(tratamiento)
    }

  return (
    <Container fluid className="home2Container d-flex flex-column justify-content-between">
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
                <div onClick={()=> chooseHour('09:00')} className='d-flex justify-content-center align-items-center hourContainer'>09:00</div>
                <div onClick={()=> chooseHour('09:30')} className='d-flex justify-content-center align-items-center hourContainer'>09:30</div>
                <div onClick={()=> chooseHour('10:00')} className='d-flex justify-content-center align-items-center hourContainer'>10:00</div>
                <div onClick={()=> chooseHour('10:30')} className='d-flex justify-content-center align-items-center hourContainer'>10:30</div>
                <div onClick={()=> chooseHour('11:00')} className='d-flex justify-content-center align-items-center hourContainer'>11:00</div>
                <div onClick={()=> chooseHour('11:30')} className='d-flex justify-content-center align-items-center hourContainer'>11:30</div>
                <div onClick={()=> chooseHour('12:00')} className='d-flex justify-content-center align-items-center hourContainer'>12:00</div>
                <div onClick={()=> chooseHour('12:30')} className='d-flex justify-content-center align-items-center hourContainer'>12:30</div>
                <div onClick={()=> chooseHour('13:00')} className='d-flex justify-content-center align-items-center hourContainer'>13:00</div>
                <div onClick={()=> chooseHour('13:30')} className='d-flex justify-content-center align-items-center hourContainer'>13:30</div>
                <div onClick={()=> chooseHour('14:00')} className='d-flex justify-content-center align-items-center hourContainer'>14:00</div>
                <div onClick={()=> chooseHour('14:30')} className='d-flex justify-content-center align-items-center hourContainer'>14:30</div>
                <div onClick={()=> chooseHour('15:00')} className='d-flex justify-content-center align-items-center hourContainer'>15:00</div>
                <div onClick={()=> chooseHour('15:30')} className='d-flex justify-content-center align-items-center hourContainer'>15:30</div>
                <div onClick={()=> chooseHour('16:00')} className='d-flex justify-content-center align-items-center hourContainer'>16:00</div>
                <div onClick={()=> chooseHour('16:30')} className='d-flex justify-content-center align-items-center hourContainer'>16:30</div>
                <div onClick={()=> chooseHour('17:00')} className='d-flex justify-content-center align-items-center hourContainer'>17:00</div>
                <div onClick={()=> chooseHour('17:30')} className='d-flex justify-content-center align-items-center hourContainer'>17:30</div>
                <div onClick={()=> chooseHour('18:00')} className='d-flex justify-content-center align-items-center hourContainer'>18:00</div>
                <div onClick={()=> chooseHour('18:30')} className='d-flex justify-content-center align-items-center hourContainer'>18:30</div>
                <div onClick={()=> chooseHour('19:00')} className='d-flex justify-content-center align-items-center hourContainer'>19:00</div>
                <div onClick={()=> chooseHour('19:30')} className='d-flex justify-content-center align-items-center hourContainer'>19:30</div>
                <div onClick={()=> chooseHour('20:00')} className='d-flex justify-content-center align-items-center hourContainer'>20:00</div>
                <div onClick={()=> chooseHour('20:30')} className='d-flex justify-content-center align-items-center hourContainer'>20:30</div>
            </Row>
            <Row className="rowSpace justify-content-center">
                <div onClick={()=> chooseDoctor('Zoiberg')} className='d-flex justify-content-center align-items-center doctorContainer'><img className='doctorIcon' src={ doc1 } alt="" /></div>
                <div onClick={()=> chooseDoctor('Strange')} className='d-flex justify-content-center align-items-center doctorContainer'><img className='doctorIcon' src={ doc2 } alt="" /></div>
                <div onClick={()=> chooseDoctor('Robotnik')} className='d-flex justify-content-center align-items-center doctorContainer'><img className='doctorIcon2' src={ doc3 } alt="" /></div>
                <div onClick={()=> chooseDoctor('Black Death')} className='d-flex justify-content-center align-items-center doctorContainer'><img className='doctorIcon' src={ doc4 } alt="" /></div>
                <div onClick={()=> chooseDoctor('Rick')} className='d-flex justify-content-center align-items-center doctorContainer'><img className='doctorIcon' src={ doc5 } alt="" /></div>
            </Row>
            <Row className="rowSpace justify-content-center">
                <div onClick={()=> chooseTreatment('Implantology')} className='d-flex justify-content-center align-items-center treatmentContainer' ref={target} onMouseEnter={() => setShow(!show)}><img className='treatmentIcon' src={ implant } alt="" /></div>
                <Overlay target={target.current} show={show} placement="bottom">
                    {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        Implantology
                    </Tooltip>
                    )}
                </Overlay>
                <div onClick={()=> chooseTreatment('Bruxism')} className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmentIcon' src={ bruxism } alt="" /></div>
                <div onClick={()=> chooseTreatment('Orthodontics')} className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmentIcon' src={ orthod } alt="" /></div>
                <div onClick={()=> chooseTreatment('Whitening')} className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmentIcon' src={ whitening } alt="" /></div>
                <div onClick={()=> chooseTreatment('Periodontics')} className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmentIcon' src={ period } alt="" /></div>
                <div onClick={()=> chooseTreatment('Others')} className='d-flex justify-content-center align-items-center treatmentContainer'><img className='treatmentIcon' src={ other } alt="" /></div>
            </Row>
        </Container>
  )
}
