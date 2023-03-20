
import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { detailData } from '../detailSlice';
import './UserDetail.css'
import { deleteUserByAdmin } from "../../services/apiCalls";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
 
export const UserDetail = () => {

    //conexion a RDX en modo lectura
    const detailRedux = useSelector(detailData);
    const credentialsRdx = useSelector(userData);
    const navigate = useNavigate();

    let params = (detailRedux.choosenObject.id);
    let token = (credentialsRdx.credentials.token);

    useEffect(()=>{
        console.log(detailRedux,"patata")
        console.log(credentialsRdx.credentials.token,"token")
    },[])

    const deleteUser = () => {

        deleteUserByAdmin(params, token)
        .then(
            userDeleteByAdmin => {
                console.log(token)
                console.log(params)

                setTimeout(() => {
                    navigate("/usersList");
                  }, 3000);
            }
        )
        .catch(error => {
          console.log(error)
        })
    }


     return (
        <Container fluid className="homeContainer d-flex flex-column justify-content-between">
            <Row className="d-flex justify-content-center">
                <Col xxl={4} xl={5} sm={7} className="my-3">
                    <div className='logRegContainer d-flex justify-content-center text-center'>
                        <h1 className="text-center">User Detail Admin</h1>
                        {detailRedux?.choosenObject?.name}
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
            <div className="deleteButton d-flex justify-content-center" name="button" onClick={()=> deleteUser()}>Delete User</div>
            </Row>
        </Container>
     )
}