
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useRef } from 'react';
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
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect } from 'react';
import Comic1 from '../../image/comic1.jpg'
import Comic2 from '../../image/comic2.jpg'
import Book1 from '../../image/book1.png'

export const NewAppointment = () => {

    const ReduxCredentials = useSelector(userData);
    const navigate = useNavigate();
    
    const [day, setDay] = useState(new Date());
    const [hour, setHour] = useState("");
    const [doctor, setDoctor] = useState("");
    const [treatment, setTreatment] = useState("");

    const [bookAct, setBookAct] = useState(false);

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

        if (day === ""){
            console.log("Please, fill all fields")
            return
        } else if (hour === ""){
            console.log("Please, fill all fields")
            return
        } else if (treatment === ""){
            console.log("Please, fill all fields")
            return
        }

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

    useEffect(() => {
        if (day === ""){
            setBookAct(false)
            return
        } else if (hour === ""){
            setBookAct(false)
            return
        } else if (doctor === ""){
            setBookAct(false)
            return
        } else if (treatment === ""){
            setBookAct(false)
            return
        }

        setBookAct(true)
    })

    const popoverHoverFocus1 = (
        <Popover className="popoverRole1" id="popover-trigger-hover-focus" title="Popover bottom">
          Zoiberg
        </Popover>
    );

    const popoverHoverFocus2 = (
        <Popover className="popoverRole1" id="popover-trigger-hover-focus" title="Popover bottom">
          Dr. Strange
        </Popover>
    );

    const popoverHoverFocus3 = (
        <Popover className="popoverRole1" id="popover-trigger-hover-focus" title="Popover bottom">
          Robotnik
        </Popover>
    );

    const popoverHoverFocus4 = (
        <Popover className="popoverRole1" id="popover-trigger-hover-focus" title="Popover bottom">
          Black Death
        </Popover>
    );

    const popoverHoverFocus5 = (
        <Popover className="popoverRole1" id="popover-trigger-hover-focus" title="Popover bottom">
          Rick Sanchez
        </Popover>
    );
    
    const popoverHoverFocus6 = (
        <Popover className="popoverRole1" id="popover-trigger-hover-focus" title="Popover bottom">
          Implantology
        </Popover>
    );
    
    const popoverHoverFocus7 = (
        <Popover className="popoverRole1" id="popover-trigger-hover-focus" title="Popover bottom">
          Bruxism
        </Popover>
    );
    
    const popoverHoverFocus8 = (
        <Popover className="popoverRole1" id="popover-trigger-hover-focus" title="Popover bottom">
          Orthodontics
        </Popover>
    );
    
    const popoverHoverFocus9 = (
        <Popover className="popoverRole1" id="popover-trigger-hover-focus" title="Popover bottom">
          Whitening
        </Popover>
    );
    
    const popoverHoverFocus10 = (
        <Popover className="popoverRole1" id="popover-trigger-hover-focus" title="Popover bottom">
          Periodontics
        </Popover>
    );
    
    const popoverHoverFocus11 = (
        <Popover className="popoverRole1" id="popover-trigger-hover-focus" title="Popover bottom">
          Others
        </Popover>
    );

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <Container fluid className="home2Container d-flex flex-column justify-content-between">
            <Row className="d-flex justify-content-center">
                <Col xxl={4} xl={5} sm={10} className="my-3">
                    <div className='logRegContainer'>
                        <h1 className='text-center book1'>Book Appointment</h1>
                        {/* <img className='book1' src={Book1} alt="" /> */}
                    </div>
                </Col>
            </Row>
            {ReduxCredentials.credentials.token ? (
                <>                
                <Offcanvas show={show} onHide={handleClose} className="offcanvasBox">
                    <div className='offcanvasBody'>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Appointment Confirmation</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>Are you sure to book this appointment?</Offcanvas.Body>
                    </div>
                    <Offcanvas.Body className='offcanvasBtn'><div className="appointmentButton" name="button" onClick={()=> bookAppointment()}>Book Appointment</div></Offcanvas.Body>
                </Offcanvas>
                <Row className="d-flex justify-content-center">
                    <Col xxl={5} xl={6} sm={9} className="my-3">
                        <div className='logRegContainer d-flex flex-column align-items-center justify-content-center'>
                            <img className='comic1' src={Comic1} alt="" />
                            <img className='comic2' src={Comic2} alt="" />
                            <h1 className='text-center'>Pick a date and time</h1>
                            <Calendar 
                                className="calendar" 
                                onChange={chooseDay} 
                            />
                            <div className="justify-content-center hourGrid">
                                <div onClick={()=> chooseHour("09:00")} className={hour === "09:00" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>09:00</div>
                                <div onClick={()=> chooseHour("09:30")} className={hour === "09:30" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>09:30</div>
                                <div onClick={()=> chooseHour("10:00")} className={hour === "10:00" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>10:00</div>
                                <div onClick={()=> chooseHour("10:30")} className={hour === "10:30" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>10:30</div>
                                <div onClick={()=> chooseHour("11:00")} className={hour === "11:00" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>11:00</div>
                                <div onClick={()=> chooseHour("11:30")} className={hour === "11:30" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>11:30</div>
                                <div onClick={()=> chooseHour("12:00")} className={hour === "12:00" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>12:00</div>
                                <div onClick={()=> chooseHour("12:30")} className={hour === "12:30" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>12:30</div>
                                <div onClick={()=> chooseHour("13:00")} className={hour === "13:00" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>13:00</div>
                                <div onClick={()=> chooseHour("13:30")} className={hour === "13:30" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>13:30</div>
                                <div onClick={()=> chooseHour("14:00")} className={hour === "14:00" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>14:00</div>
                                <div onClick={()=> chooseHour("14:30")} className={hour === "14:30" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>14:30</div>
                                <div onClick={()=> chooseHour("15:00")} className={hour === "15:00" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>15:00</div>
                                <div onClick={()=> chooseHour("15:30")} className={hour === "15:30" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>15:30</div>
                                <div onClick={()=> chooseHour("16:00")} className={hour === "16:00" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>16:00</div>
                                <div onClick={()=> chooseHour("16:30")} className={hour === "16:30" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>16:30</div>
                                <div onClick={()=> chooseHour("17:00")} className={hour === "17:00" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>17:00</div>
                                <div onClick={()=> chooseHour("17:30")} className={hour === "17:30" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>17:30</div>
                                <div onClick={()=> chooseHour("18:00")} className={hour === "18:00" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>18:00</div>
                                <div onClick={()=> chooseHour("18:30")} className={hour === "18:30" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>18:30</div>
                                <div onClick={()=> chooseHour("19:00")} className={hour === "19:00" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>19:00</div>
                                <div onClick={()=> chooseHour("19:30")} className={hour === "19:30" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>19:30</div>
                                <div onClick={()=> chooseHour("20:00")} className={hour === "20:00" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>20:00</div>
                                <div onClick={()=> chooseHour("20:30")} className={hour === "20:30" ? ('hourContainer selected d-flex justify-content-center align-items-center') : ('d-flex justify-content-center align-items-center hourContainer')}>20:30</div>
                            </div>
                            <h1>Choose a doctor</h1>
                            <div className="rowSpace d-flex justify-content-center">
                                <OverlayTrigger
                                    trigger={['hover', 'focus']}
                                    placement="bottom"
                                    overlay={popoverHoverFocus1}
                                >         
                                    <div onClick={()=> chooseDoctor("1")} className={doctor === "1" ? ('d-flex justify-content-center align-items-center doctorContainer selected') : ('d-flex justify-content-center align-items-center doctorContainer')} ><img className='doctorIcon' src={ doc1 } alt="" /></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger={['hover', 'focus']}
                                    placement="bottom"
                                    overlay={popoverHoverFocus2}
                                >         
                                    <div onClick={()=> chooseDoctor('2')} className={doctor === "2" ? ('d-flex justify-content-center align-items-center doctorContainer selected') : ('d-flex justify-content-center align-items-center doctorContainer')} ><img className='doctorIcon' src={ doc2 } alt="" /></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger={['hover', 'focus']}
                                    placement="bottom"
                                    overlay={popoverHoverFocus3}
                                >         
                                    <div onClick={()=> chooseDoctor('3')} className={doctor === "3" ? ('d-flex justify-content-center align-items-center doctorContainer selected') : ('d-flex justify-content-center align-items-center doctorContainer')} ><img className='doctorIcon2' src={ doc3 } alt="" /></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger={['hover', 'focus']}
                                    placement="bottom"
                                    overlay={popoverHoverFocus4}
                                >         
                                    <div onClick={()=> chooseDoctor('4')} className={doctor === "4" ? ('d-flex justify-content-center align-items-center doctorContainer selected') : ('d-flex justify-content-center align-items-center doctorContainer')} ><img className='doctorIcon' src={ doc4 } alt="" /></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger={['hover', 'focus']}
                                    placement="bottom"
                                    overlay={popoverHoverFocus5}
                                >         
                                    <div onClick={()=> chooseDoctor('5')} className={doctor === "5" ? ('d-flex justify-content-center align-items-center doctorContainer selected') : ('d-flex justify-content-center align-items-center doctorContainer')} ><img className='doctorIcon' src={ doc5 } alt="" /></div>
                                </OverlayTrigger>
                            </div>
                            <h1>Choose a treatment</h1>
                            <div className="rowSpace d-flex justify-content-center">
                                <OverlayTrigger
                                    trigger={['hover', 'focus']}
                                    placement="bottom"
                                    overlay={popoverHoverFocus6}
                                > 
                                <div onClick={()=> chooseTreatment('1')} className={treatment === "1" ? ('d-flex justify-content-center align-items-center treatmentContainer selected') : ('d-flex justify-content-center align-items-center treatmentContainer')} ><img className='treatmentIcon' src={ implant } alt="" /></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger={['hover', 'focus']}
                                    placement="bottom"
                                    overlay={popoverHoverFocus7}
                                > 
                                <div onClick={()=> chooseTreatment('2')} className={treatment === "2" ? ('d-flex justify-content-center align-items-center treatmentContainer selected') : ('d-flex justify-content-center align-items-center treatmentContainer')} ><img className='treatmentIcon' src={ bruxism } alt="" /></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger={['hover', 'focus']}
                                    placement="bottom"
                                    overlay={popoverHoverFocus8}
                                > 
                                <div onClick={()=> chooseTreatment('3')} className={treatment === "3" ? ('d-flex justify-content-center align-items-center treatmentContainer selected') : ('d-flex justify-content-center align-items-center treatmentContainer')} ><img className='treatmentIcon' src={ orthod } alt="" /></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger={['hover', 'focus']}
                                    placement="bottom"
                                    overlay={popoverHoverFocus9}
                                > 
                                <div onClick={()=> chooseTreatment('4')} className={treatment === "4" ? ('d-flex justify-content-center align-items-center treatmentContainer selected') : ('d-flex justify-content-center align-items-center treatmentContainer')} ><img className='treatmentIcon' src={ whitening } alt="" /></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger={['hover', 'focus']}
                                    placement="bottom"
                                    overlay={popoverHoverFocus10}
                                > 
                                <div onClick={()=> chooseTreatment('5')} className={treatment === "5" ? ('d-flex justify-content-center align-items-center treatmentContainer selected') : ('d-flex justify-content-center align-items-center treatmentContainer')} ><img className='treatmentIcon' src={ period } alt="" /></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger={['hover', 'focus']}
                                    placement="bottom"
                                    overlay={popoverHoverFocus11}
                                > 
                                <div onClick={()=> chooseTreatment('6')} className={treatment === "6" ? ('d-flex justify-content-center align-items-center treatmentContainer selected') : ('d-flex justify-content-center align-items-center treatmentContainer')} ><img className='treatmentIcon' src={ other } alt="" /></div>
                                </OverlayTrigger>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Button className={bookAct ? 'appointmentButton' : 'appointmentButtonDeac'} variant="primary" onClick={bookAct ? () => {handleShow()} : () => {}}>
                        Book an appointment
                    </Button>
                    {/* <div className="appointmentButton" name="button" onClick={()=> bookAppointment()}>Book Appointment</div> */}
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
