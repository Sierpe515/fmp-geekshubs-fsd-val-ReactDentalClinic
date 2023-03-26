import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { ButtonNav } from '../../components/ButtonNav/ButtonNav';
import { bringPastAppointmentsAdmin, bringPastAppointmentsDoctor } from "../../services/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from '../appointmentSlice';
import { useNavigate } from 'react-router-dom';
import { userData } from "../userSlice";
import dayjs from "dayjs";

export const AppointmentsPast = () => {
    const [appointments, setAppointments] = useState([]);
    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAdmin = ReduxCredentials.credentials.userRole?.includes("admin")
    const isDoctor = ReduxCredentials.credentials.userRole?.includes("doctor")

    useEffect(() => {
      {isAdmin || isDoctor ? ("") : (navigate('/'))}
    }, []);

    useEffect(() => {
        if (ReduxCredentials.credentials.userRole?.includes('admin') && appointments.length === 0) {
          bringPastAppointmentsAdmin(ReduxCredentials.credentials.token)
            .then((result) => {
              setAppointments(result.data.userAppointment);
            })
            .catch((error) => console.log(error));
        } else if (ReduxCredentials.credentials.userRole?.includes('doctor') && appointments.length === 0) {
          bringPastAppointmentsDoctor(ReduxCredentials.credentials.token)
            .then((result) => {
              setAppointments(result.data.userAppointment);
            })
            .catch((error) => console.log(error));
        }
      }, [appointments]);

    const selected = (cita) => {
        dispatch(addAppointment({ choosenAppointment: cita }))
    
        if (ReduxCredentials.credentials.userRole?.includes('admin')){
            setTimeout(()=>{
                navigate("/appointmentDetail");
            },500)
          } else if (ReduxCredentials.credentials.userRole?.includes('doctor')){
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
            <Col xxl={6} xl={6} md={9} sm={12} className="my-3">
              <div className="logRegContainer d-flex flex-column align-items-center justify-content-center text-center">
                <h1>Previous appointments</h1>
                {appointments.length > 0 ? (
                  <div>
                    {appointments.map((cita) => {
                      return (
                        <div className="userBox1" onClick={() => selected(cita)} key={cita.id}>
                          <strong>{dayjs(cita.date).format('YYYY-MMMM-DD')}</strong> hour: {cita.hour} patient:<strong> {cita.User.name} {cita.User.surname}</strong>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div><Spinner animation="grow" variant="primary" /><h1>LOADING</h1></div>
                )}
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <ButtonNav route={"View previous appointments"} destiny={"/appointments"} />
          </Row>
        </Container>
      );
    };