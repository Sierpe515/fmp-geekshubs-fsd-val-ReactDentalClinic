import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { appointmentDetailData } from '../appointmentSlice';
import './appointmentDetail.css'
import { CancelAppByUser } from "../../services/apiCalls";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
 
export const AppointmentDetailUser = () => {

    const detailRedux = useSelector(appointmentDetailData);
    const credentialsRdx = useSelector(userData);
    const navigate = useNavigate();

    let token = (credentialsRdx.credentials.token);
    let params = (detailRedux.choosenAppointment.id);
    
    useEffect(() => {
        if (!credentialsRdx.credentials.token){
            navigate('/')
        }
      }, []);

    useEffect(() => {
     console.log(detailRedux.choosenAppointment)
    }, [])

    const specialty = detailRedux.choosenAppointment.Employee.specialty_id

    // const specialtyName = {
    //     "1": "Implantology",
    //     "2": "Bruxism",
    //     "3": "Orthodontics",
    //     "4": "Whitening",
    //     "5": "Periodontics",
    //     "6": "Others"
    // }

    switch (specialty){
        case '1':
            specialty = "Implantology"
            break
        case '2':
            specialty = "Bruxism"
            break
        case '3':
            specialty = "Orthodontics"
            break
        case '4':
            specialty = "Whitening"
            break
        case '5':
            specialty = "Periodontics"
            break
        case '6':
            specialty = "Others"
            break
    }

    const cancelAppointment = () => {
        CancelAppByUser(params, token)
        .then(
            userCancelApp => {
                setTimeout(() => {
                    navigate("/appointmentsUser");
                  }, 500);
            }
        )
        .catch((error) => console.log(error));
    }

     return (
        <Container fluid className="homeContainerMin d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column align-items-center justify-content-center">
                <Col xxl={6} xl={5} sm={7} className="logRegContainer my-3 d-flex flex-column justify-content-between">
                    <h1 className="text-center">Appointment Detail Admin</h1>
                    <Row>
                        <h3>Appointment info</h3>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            <strong>Appointment date:</strong> {dayjs(detailRedux?.choosenAppointment?.date).format('YYYY-MMMM-DD')}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            <strong>Appointment hour:</strong> {detailRedux?.choosenAppointment?.hour}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            <strong>booking at:</strong> {dayjs(detailRedux?.choosenAppointment?.createdAt).format('YYYY-MMMM-DD')}
                        </div>
                    </Row>
                    <Row>
                        <h3>Doctor info</h3>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            <strong>Name:</strong> {detailRedux?.choosenAppointment?.Employee.User.name}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            <strong>Surname:</strong> {detailRedux?.choosenAppointment?.Employee.User.surname}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            <strong>Email:</strong> {detailRedux?.choosenAppointment?.Employee.User.email}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            <strong>Phone:</strong> {detailRedux?.choosenAppointment?.Employee.User.phone}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            <strong>Specialty:</strong> {specialty}
                        </div>
                    </Row>
                </Col>
            </Row>
            {dayjs(detailRedux?.choosenAppointment?.date).isAfter(dayjs()) ? (
            <Row className='justify-content-center'>
                <div className="cancelAppButton" name="button" onClick={()=> cancelAppointment()}>Cancel Appointment</div>
            </Row>
            ) : ("")}
        </Container>
     )
}