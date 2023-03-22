import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonNav } from '../../components/ButtonNav/ButtonNav';
import { bringAppointmentsUser } from "../../services/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { addAppointmentUser } from '../appointmentSlice';
import { useNavigate } from 'react-router-dom';
import { userData } from "../userSlice";

export const AppointmentsUser = () => {
    const [appointments, setAppointments] = useState([]);
    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (appointments.length === 0) {
          bringAppointmentsUser(ReduxCredentials.credentials.token)
            .then((result) => {

              if(result.data.userAppointment.length > 0){

                setAppointments(result.data.userAppointment);
                console.log("user",result);
              }
            })
            .catch((error) => console.log(error));
        }
      }, [appointments]);

    const selected = (cita) => {
        dispatch(addAppointmentUser({ choosenAppointment: cita }))
    
            setTimeout(()=>{
                navigate("/appointmentDetailUser");
            },500)
    };

    return (
        <Container
          fluid
          className="homeContainer d-flex flex-column justify-content-between"
        >
          <Row className="d-flex justify-content-center">
            <Col xxl={4} xl={5} sm={7} className="my-3">
              <div className="logRegContainer d-flex flex-column justify-content-center text-center">
              <h1 className="text-center">Appointments</h1>
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
                  <>
                  <h3>No pending appointments</h3>
                  <h4>Please, book an appointment if needed</h4>

                  <Row className="d-flex justify-content-center">
                    <ButtonNav route={"Book Appointment"} destiny={"/newAppointment"}/>
                  </Row>
                  </>
                )}
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <ButtonNav route={"View Appointment"} destiny={"/appointments"} />
          </Row>
        </Container>
      );
    };
