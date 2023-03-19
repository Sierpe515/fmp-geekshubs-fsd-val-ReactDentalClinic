import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { detailData } from '../detailSlice';
 
export const UserDetailDoctor = () => {

    //conexion a RDX en modo lectura
    const detailRedux = useSelector(detailData);

    useEffect(()=>{
        console.log(detailRedux,"patata")
    },[])


     return (
        <Container fluid className="homeContainer d-flex flex-column justify-content-between">
            <Row className="d-flex justify-content-center">
                <Col xxl={4} xl={5} sm={7} className="my-3">
                    <div className='logRegContainer d-flex justify-content-center text-center'>
                        <h1 className="text-center">User Detail Doctor</h1>
                        {detailRedux?.choosenObject?.name}
                    </div>
                </Col>
            </Row>
        </Container>
     )
}