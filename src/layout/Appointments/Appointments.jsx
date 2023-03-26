import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonNav } from '../../components/ButtonNav/ButtonNav';
import { bringUpcomingAppointmentsAdmin, bringUpcomingAppointmentsDoctor } from "../../services/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from '../appointmentSlice';
import { useNavigate } from 'react-router-dom';
import { userData } from "../userSlice";
import dayjs from 'dayjs';
import './Appointments.css'

export const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAdmin = ReduxCredentials.credentials.userRole.includes("admin")
    const isDoctor = ReduxCredentials.credentials.userRole.includes("doctor")

  useEffect(() => {
    if (ReduxCredentials.credentials.userRole.includes('admin') && appointments.length === 0) {
      bringUpcomingAppointmentsAdmin(ReduxCredentials.credentials.token)
        .then((result) => {
          console.log("admin",result.data.userAppointment);
          console.log(ReduxCredentials);
          setAppointments(result.data.userAppointment);
        })
        .catch((error) => console.log(error));
    } else if (ReduxCredentials.credentials.userRole.includes('doctor') && appointments.length === 0) {
      bringUpcomingAppointmentsDoctor(ReduxCredentials.credentials.token)
        .then((result) => {
          console.log("doctor",ReduxCredentials.credentials.userRole);
          setAppointments(result.data.userAppointment);
        })
        .catch((error) => console.log(error));
    }
  }, [appointments]);

  useEffect(() => {
    {isAdmin || isDoctor ? ("") : (navigate('/'))}
  }, []);

    const selected = (cita) => {
        dispatch(addAppointment({ choosenAppointment: cita }))
    
        if (ReduxCredentials.credentials.userRole.includes('admin')){
            setTimeout(()=>{
                navigate("/appointmentDetail");
            },500)
          } else if (ReduxCredentials.credentials.userRole.includes('doctor')){
            setTimeout(()=>{
              navigate("/appointmentDetailDoctor");
          },500)
          }
    };

    return (
        <Container
          fluid
          className="homeContainerMin d-flex flex-column justify-content-between"
        >
          <Row className="d-flex justify-content-center">
            <Col xxl={5} xl={6} lg={8} sm={10} className="my-3">
              <div className="logRegContainer d-flex flex-column justify-content-center align-items-center text-center">
                <h1>Appointments List</h1>
                {appointments.length > 0 ? (
                  <div className="appList">
                    {appointments.map((cita) => {
                      return (
                        <div className="userBox1" onClick={() => selected(cita)} key={cita.id}>
                          <strong>{dayjs(cita.date).format('YYYY-MMMM-DD')}</strong> hour: {cita.hour} patient:<strong> {cita.User.name} {cita.User.surname}</strong>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div>LOADING</div>
                )}
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <ButtonNav route={"View previous appointments"} destiny={"/appointmentsPast"} />
          </Row>
        </Container>
      );
    };
