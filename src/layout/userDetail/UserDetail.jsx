
import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { detailData } from '../detailSlice';
import './UserDetail.css'
import { addRoleByAdmin, deleteUserByAdmin } from "../../services/apiCalls";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
import role1 from "../../image/role1.png";
import role2 from "../../image/role2.png";
import role3 from "../../image/role3.png";
import dayjs from 'dayjs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

 
export const UserDetail = () => {

    //conexion a RDX en modo lectura
    const detailRedux = useSelector(detailData);
    const credentialsRdx = useSelector(userData);
    const navigate = useNavigate();

    let params = (detailRedux.choosenObject.id);
    let token = (credentialsRdx.credentials.token);

    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        if (!credentialsRdx.credentials.userRole.includes("admin")){
            navigate('/')
        } 
      }, []);

    useEffect(()=>{
        console.log(detailRedux,"patata")
        console.log(credentialsRdx.credentials.token,"token")
    },[])

    const goNewAppointmentAdm = () => {
        setTimeout(() => {
            navigate("/newAppointmentAdm");
          }, 500);
    }

    const deleteUser = () => {

        deleteUserByAdmin(params, token)
        .then(
            userDeleteByAdmin => {
                console.log(token)
                console.log(params)

                setTimeout(() => {
                    navigate("/usersList");
                  }, 500);
            }
        )
        .catch(error => {
          console.log(error)
        })
    }

    const addUserRole = () => {
        if(userRole === ""){
            console.log("Please, choose a role")
            return;
        }
        let body = {
            user_id: detailRedux.choosenObject.id,
            role_id: userRole
        }
        addRoleByAdmin(body, token)
        .then(
            console.log(userRole)
        )
        .catch((error) => console.log(error));
    }

    const chooseRole = (Role) => {
        setUserRole(Role)
        console.log(Role);  
    }

    const popoverHoverFocus1 = (
        <Popover className="popoverRole" id="popover-trigger-hover-focus" title="Popover bottom">
          Admin
        </Popover>
    );

    const popoverHoverFocus2 = (
      <Popover className="popoverRole" id="popover-trigger-hover-focus" title="Popover bottom">
        Doctor
      </Popover>
    );
    
    const popoverHoverFocus3 = (
      <Popover className="popoverRole" id="popover-trigger-hover-focus" title="Popover bottom">
        Patient
      </Popover>
    );


     return (
        <Container fluid className="homeContainerMin d-flex flex-column justify-content-between">
            <Row className="d-flex justify-content-center">
                <Col xxl={5} xl={5} sm={10} className="my-3">
                    <div className='logRegContainer d-flex flex-column justify-content-center text-center'>
                        <h1 className="text-center">User Detail Admin</h1>
                        <p><strong>Name:</strong> {detailRedux?.choosenObject?.name}</p>
                        <p><strong>Surname:</strong> {detailRedux?.choosenObject?.surname}</p>
                        <p><strong>NIF:</strong> {detailRedux?.choosenObject?.nif}</p>
                        <p><strong>Email:</strong> {detailRedux?.choosenObject?.email}</p>
                        <p><strong>Direction:</strong> {detailRedux?.choosenObject?.direction}</p>
                        <p><strong>Phone:</strong> {detailRedux?.choosenObject?.phone}</p>
                        <p><strong>Birth Date:</strong> {dayjs(detailRedux.choosenObject.birth_date).format('YYYY-MMMM-DD')}</p>
                        <p><strong>Password:</strong> {detailRedux?.choosenObject?.password}</p>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center flex-column align-items-center">
                <div className="addRoleContainer">
                <Col className="d-flex justify-content-center">
                    <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="bottom"
                        overlay={popoverHoverFocus1}
                    >                   
                        <div onClick={()=> chooseRole('1')}
                            className={userRole === "1" ? ('roleDiv roleDivChoosen d-flex justify-content-center align-items-center') : ('roleDiv d-flex justify-content-center align-items-center')}>
                                <img className='roleIcon' src={ role1 } alt="" /></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="bottom"
                        overlay={popoverHoverFocus2}
                    >       
                        <div onClick={()=> chooseRole('2')}
                            className={userRole === "2" ? ('roleDiv roleDivChoosen d-flex justify-content-center align-items-center') : ('roleDiv d-flex justify-content-center align-items-center')}>
                                <img className='roleIcon' src={ role2 } alt="" /></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="bottom"
                        overlay={popoverHoverFocus3}
                    >  
                        <div onClick={()=> chooseRole('3')} 
                        className={userRole === "3" ? ('roleDiv roleDivChoosen d-flex justify-content-center align-items-center') : ('roleDiv d-flex justify-content-center align-items-center')}>
                            <img className='roleIcon' src={ role3 } alt="" /></div>
                    </OverlayTrigger>
                </Col>
                <Col className="d-flex justify-content-center">
                    <div className="deleteButton" name="button" onClick={()=> addUserRole()}>Add role</div>
                </Col>
                </div>
            </Row>
            <Row className="justify-content-center">
                <div className="deleteButton d-flex justify-content-center" name="button" onClick={()=> goNewAppointmentAdm()}>New Appointment</div>
            </Row>
            <Row className="justify-content-center">
                <div className="deleteButton d-flex justify-content-center" name="button" onClick={()=> deleteUser()}>Delete User</div>
            </Row>
        </Container>
     )
}