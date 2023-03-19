import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { appointmentDetailData } from '../appointmentSlice';
import './appointmentDetail.css'
 
export const AppointmentDetailUser = () => {

    //conexion a RDX en modo lectura
    const detailRedux = useSelector(appointmentDetailData);

    useEffect(()=>{
        console.log(detailRedux.choosenAppointment,"patata")
    },[])


     return (
        <Container fluid className="d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column align-items-center justify-content-center">
                <Col xxl={6} xl={5} sm={7} className="logRegContainer my-3 d-flex flex-column justify-content-between">
                    <h1 className="text-center">Appointment Detail Admin</h1>
                    <Row>
                        <h3>Appointment info</h3>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            {detailRedux?.choosenAppointment?.date}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            {detailRedux?.choosenAppointment?.hour}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            {detailRedux?.choosenAppointment?.createdAt}
                        </div>
                    </Row>
                    <Row>
                        <h3>Doctor info</h3>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            {detailRedux?.choosenAppointment?.Employee.User.name}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            {detailRedux?.choosenAppointment?.Employee.User.surname}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            {detailRedux?.choosenAppointment?.Employee.User.email}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            {detailRedux?.choosenAppointment?.Employee.User.phone}
                        </div>
                        <div className='appDetailBox d-flex align-items-center justify-content-center text-center'>
                            {detailRedux?.choosenAppointment?.Employee.specialty_id}
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
     )
}