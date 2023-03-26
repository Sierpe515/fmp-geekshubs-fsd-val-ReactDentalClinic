import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { appointmentDetailData } from '../appointmentSlice';
import './appointmentDetail.css'
import { addRoleByAdmin, CancelAppByAdmin } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { userData } from "../userSlice";
import dayjs from 'dayjs';
 
export const AppointmentDetail = () => {

    //conexion a RDX en modo lectura
    const detailRedux = useSelector(appointmentDetailData);
    const credentialsRdx = useSelector(userData);
    const navigate = useNavigate();

    let token = (credentialsRdx.credentials.token);
    let params = (detailRedux.choosenAppointment.id);

    useEffect(() => {
        if (!credentialsRdx.credentials.userRole.includes("admin")){
            navigate('/')
        } 
      }, []);

    const cancelAppointmentByAdmin = () => {
        CancelAppByAdmin(params, token)
        .then(
            userCancelApp => {
                console.log("Cita borrada");

                setTimeout(() => {
                    navigate("/appointments");
                  }, 500);
            }
        )
        .catch((error) => console.log(error));
    }


     return (
        <Container fluid className="d-flex flex-column justify-content-center">
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
                        <h3>Patient info</h3>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'> 
                            <strong>Name:</strong> {detailRedux?.choosenAppointment?.User.name}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            <strong>Surname:</strong> {detailRedux?.choosenAppointment?.User.surname}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            <strong>Email:</strong> {detailRedux?.choosenAppointment?.User.email}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            <strong>Phone:</strong> {detailRedux?.choosenAppointment?.User.phone}
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
                            <strong>Schedule:</strong> {detailRedux?.choosenAppointment?.Employee.schedule}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            <strong>Specialty:</strong> {detailRedux?.choosenAppointment?.Employee?.Specialty.type}
                        </div>
                    </Row>
                </Col>
            </Row>
            {dayjs(detailRedux?.choosenAppointment?.date).isAfter(dayjs()) ? (
              <Row className='justify-content-center'>
              <div className="cancelAppButton" name="button" onClick={()=> cancelAppointmentByAdmin()}>Cancel Appointment</div>
              </Row>  
            ) : ("")}
            
        </Container>
     )
}