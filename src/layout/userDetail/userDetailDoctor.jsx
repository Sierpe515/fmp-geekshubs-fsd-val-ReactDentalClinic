import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { detailData } from '../detailSlice';
import dayjs from 'dayjs';
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
 
export const UserDetailDoctor = () => {

    const detailRedux = useSelector(detailData);
    const credentialsRdx = useSelector(userData);
    const navigate = useNavigate();

    useEffect(() => {
        if (!credentialsRdx.credentials.userRole?.includes("doctor")){
            navigate('/')
        } 
      }, []);


     return (
        <Container fluid className="homeContainerMin d-flex flex-column justify-content-between">
            <Row className="d-flex justify-content-center">
                <Col xxl={4} xl={5} sm={7} className="my-3">
                    <div className='logRegContainer d-flex flex-column justify-content-center text-center'>
                        <h1 className="text-center">User Detail Doctor</h1>
                        <p><strong>Name:</strong> {detailRedux?.choosenObject?.name}</p>
                        <p><strong>Surname:</strong> {detailRedux?.choosenObject?.surname}</p>
                        <p><strong>NIF:</strong> {detailRedux?.choosenObject?.nif}</p>
                        <p><strong>Email:</strong> {detailRedux?.choosenObject?.email}</p>
                        <p><strong>Direction:</strong> {detailRedux?.choosenObject?.direction}</p>
                        <p><strong>Phone:</strong> {detailRedux?.choosenObject?.phone}</p>
                        <p><strong>Birth Date:</strong> {dayjs(detailRedux.choosenObject.birth_date).format('YYYY-MMMM-DD')}</p>
                    </div>
                </Col>
            </Row>
        </Container>
     )
}