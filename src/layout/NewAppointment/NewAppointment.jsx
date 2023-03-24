
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
import Calendar from 'react-calendar';
import './NewAppointment.css'
import dayjs from 'dayjs';
import { useSelector } from "react-redux";
import { userData } from '../../layout/userSlice';
import { createAppointment } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';

export const NewAppointment = () => {

    const ReduxCredentials = useSelector(userData);
    const navigate = useNavigate();

    
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);

    const target = useRef(null);
    const target1 = useRef(null);
    const target2 = useRef(null);
    const target3 = useRef(null);
    const target4 = useRef(null);
    const target5 = useRef(null);
    const target6 = useRef(null);
    const target7 = useRef(null);
    const target8 = useRef(null);
    const target9 = useRef(null);
    const target10 = useRef(null);
    
    const [day, setDay] = useState(new Date());
    const [hour, setHour] = useState({});
    const [doctor, setDoctor] = useState({});
    const [treatment, setTreatment] = useState({});

    let token = ReduxCredentials.credentials.token;


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
        setTreatment(tratamiento)
    }

    const chooseDay = (dia) => {
        if (dayjs(dia).isAfter(dayjs())){
        console.log(dayjs(dia).format('YYYY-MM-DD'))
        setDay(dayjs(dia).format('YYYY-MM-DD'))
        } else {
            console.log("choose a upcoming day");
        };
    }

    const bookAppointment = () => {
        let dataAppointment = {
            date : day, 
            hour: hour, 
            employee_id: doctor, 
            service_id: treatment
    }
        console.log(dataAppointment);

        createAppointment(dataAppointment, token)
        .then(
            action => {
                console.log(action)

                setTimeout(() => {
                    navigate("/appointmentsUser");
                  }, 500);
            }

        )
        .catch((error) => console.log(error));
    }

    const navLogin = () => {
        setTimeout(() => {
            navigate("/login");
          }, 500);
    }

    const navRegister = () => {
        setTimeout(() => {
            navigate("/register");
          }, 500);
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
            {ReduxCredentials.credentials.token ? (
                <>
                <Row className="d-flex justify-content-center">
                <Col xxl={4} xl={5} sm={7} className="my-3">
                    <div className='logRegContainer d-flex flex-column align-items-center justify-content-center'>
                        <h1 className='text-center'>Calendar</h1>
                        <Calendar 
                            className="calendar" 
                            onChange={chooseDay} 
                        />
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
                <div onClick={()=> chooseDoctor('1')} className='d-flex justify-content-center align-items-center doctorContainer' ref={target6} onMouseEnter={() => setShow6(!show6)}><img className='doctorIcon' src={ doc1 } alt="" />
                    <Overlay target={target6.current} show={show6} placement="bottom">
                        {(props) => (
                        <Tooltip id="over1" {...props}>
                            Zoiberg
                        </Tooltip>
                        )}
                    </Overlay></div>
                <div onClick={()=> chooseDoctor('2')} className='d-flex justify-content-center align-items-center doctorContainer' ref={target7} onMouseEnter={() => setShow7(!show7)}><img className='doctorIcon' src={ doc2 } alt="" />
                    <Overlay target={target7.current} show={show7} placement="bottom">
                        {(props) => (
                        <Tooltip id="over1" {...props}>
                            Strange
                        </Tooltip>
                        )}
                    </Overlay></div>
                <div onClick={()=> chooseDoctor('3')} className='d-flex justify-content-center align-items-center doctorContainer' ref={target8} onMouseEnter={() => setShow8(!show8)}><img className='doctorIcon2' src={ doc3 } alt="" />
                    <Overlay target={target8.current} show={show8} placement="bottom">
                        {(props) => (
                        <Tooltip id="over1" {...props}>
                            Robotnik
                        </Tooltip>
                        )}
                    </Overlay></div>
                <div onClick={()=> chooseDoctor('4')} className='d-flex justify-content-center align-items-center doctorContainer' ref={target9} onMouseEnter={() => setShow9(!show9)}><img className='doctorIcon' src={ doc4 } alt="" />
                    <Overlay target={target9.current} show={show9} placement="bottom">
                        {(props) => (
                        <Tooltip id="over1" {...props}>
                            Black Death
                        </Tooltip>
                        )}
                    </Overlay></div>
                <div onClick={()=> chooseDoctor('5')} className='d-flex justify-content-center align-items-center doctorContainer' ref={target10} onMouseEnter={() => setShow10(!show10)}><img className='doctorIcon' src={ doc5 } alt="" />
                    <Overlay target={target10.current} show={show10} placement="bottom">
                        {(props) => (
                        <Tooltip id="over1" {...props}>
                            Rick
                        </Tooltip>
                        )}
                    </Overlay></div>
            </Row>
            <Row className="rowSpace justify-content-center">
                <div onClick={()=> chooseTreatment('1')} className='d-flex justify-content-center align-items-center treatmentContainer' ref={target} onMouseEnter={() => setShow(!show)}><img className='treatmentIcon' src={ implant } alt="" /></div>
                    <Overlay target={target.current} show={show} placement="bottom">
                        {(props) => (
                        <Tooltip id="over1" {...props}>
                            Implantology
                        </Tooltip>
                        )}
                    </Overlay>
                <div onClick={()=> chooseTreatment('2')} className='d-flex justify-content-center align-items-center treatmentContainer' ref={target1} onMouseEnter={() => setShow1(!show1)}><img className='treatmentIcon' src={ bruxism } alt="" /></div>
                    <Overlay target={target1.current} show={show1} placement="bottom">
                        {(props) => (
                        <Tooltip id="over2" {...props}>
                            Bruxism
                        </Tooltip>
                        )}
                    </Overlay>
                <div onClick={()=> chooseTreatment('3')} className='d-flex justify-content-center align-items-center treatmentContainer' ref={target2} onMouseEnter={() => setShow2(!show2)}><img className='treatmentIcon' src={ orthod } alt="" /></div>
                    <Overlay target={target2.current} show={show2} placement="bottom">
                        {(props) => (
                        <Tooltip id="over3" {...props}>
                            Orthodontics
                        </Tooltip>
                        )}
                    </Overlay>
                <div onClick={()=> chooseTreatment('4')} className='d-flex justify-content-center align-items-center treatmentContainer' ref={target3} onMouseEnter={() => setShow3(!show3)}><img className='treatmentIcon' src={ whitening } alt="" /></div>
                    <Overlay target={target3.current} show={show3} placement="bottom">
                        {(props) => (
                        <Tooltip id="over4" {...props}>
                            Whitening
                        </Tooltip>
                        )}
                    </Overlay>
                <div onClick={()=> chooseTreatment('5')} className='d-flex justify-content-center align-items-center treatmentContainer' ref={target4} onMouseEnter={() => setShow4(!show4)}><img className='treatmentIcon' src={ period } alt="" /></div>
                <Overlay target={target4.current} show={show4} placement="bottom">
                        {(props) => (
                        <Tooltip id="over5" {...props}>
                            Periodontics
                        </Tooltip>
                        )}
                    </Overlay>
                <div onClick={()=> chooseTreatment('6')} className='d-flex justify-content-center align-items-center treatmentContainer' ref={target5} onMouseEnter={() => setShow5(!show5)}><img className='treatmentIcon' src={ other } alt="" /></div>
                <Overlay target={target5.current} show={show5} placement="bottom">
                        {(props) => (
                        <Tooltip id="over6" {...props}>
                            Others
                        </Tooltip>
                        )}
                    </Overlay>
            </Row>
            <Row className='justify-content-center'>
            <div className="appointmentButton" name="button" onClick={()=> bookAppointment()}>Book Appointment</div>
            </Row>
            </>
            ) : (
                <Row className="d-flex justify-content-center">
                    <Col xxl={5} xl={5} sm={7} className="logRegContainer my-3 d-flex flex-column align-items-center justify-content-center">
                        <h1>Please, login or register</h1>
                        <div className="appointmentButton" name="button" onClick={()=> navLogin()}>Login</div>
                        <div className="appointmentButton" name="button" onClick={()=> navRegister()}>Register</div>
                    </Col>
                </Row>
            )}
            
        </Container>
  )
}
