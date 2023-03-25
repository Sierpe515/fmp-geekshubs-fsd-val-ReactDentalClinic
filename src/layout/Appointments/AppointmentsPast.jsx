import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonNav } from '../../components/ButtonNav/ButtonNav';
import { bringPastAppointmentsAdmin, bringPastAppointmentsDoctor } from "../../services/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from '../appointmentSlice';
import { useNavigate } from 'react-router-dom';
import { userData } from "../userSlice";

export const AppointmentsPast = () => {
    const [appointments, setAppointments] = useState([]);
    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (ReduxCredentials.credentials.userRole.includes('admin') && appointments.length === 0) {
          bringPastAppointmentsAdmin(ReduxCredentials.credentials.token)
            .then((result) => {
              console.log("admin",result.data.userAppointment);
              console.log(ReduxCredentials);
              setAppointments(result.data.userAppointment);
            })
            .catch((error) => console.log(error));
        } else if (ReduxCredentials.credentials.userRole.includes('doctor') && appointments.length === 0) {
          bringPastAppointmentsDoctor(ReduxCredentials.credentials.token)
            .then((result) => {
              console.log("doctor",result.data.userAppointment);
              setAppointments(result.data.userAppointment);
            })
            .catch((error) => console.log(error));
        }
      }, [appointments]);

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
          className="homeContainer d-flex flex-column justify-content-between"
        >
          <Row className="d-flex justify-content-center">
            <Col xxl={4} xl={5} sm={7} className="my-3">
              <div className="logRegContainer d-flex justify-content-center text-center">
                {appointments.length > 0 ? (
                  <div>
                    {appointments.map((cita) => {
                      return (
                        <div className="userBox" onClick={() => selected(cita)} key={cita.id}>
                          {cita.date}{cita.hour}
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
            <ButtonNav route={"View previous appointments"} destiny={"/appointments"} />
          </Row>
        </Container>
      );
    };