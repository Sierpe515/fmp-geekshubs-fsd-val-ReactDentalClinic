import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonNav } from '../../components/ButtonNav/ButtonNav';
import { bringAppointments } from "../../services/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from '../appointmentSlice';
import { useNavigate } from 'react-router-dom';
import { userData } from "../userSlice";

export const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (appointments.length === 0) {
          bringAppointments(ReduxCredentials.credentials.token)
            .then((result) => {
              console.log(result.data.userAppointment);
              setAppointments(result.data.userAppointment);
            })
            .catch((error) => console.log(error));
        }
      }, [appointments]);

    const selected = (cita) => {
        dispatch(addAppointment({ choosenAppointment: cita }))
    
            setTimeout(()=>{
                navigate("/appointmentDetail");
            },500)
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
            <ButtonNav route={"View Appointment"} destiny={"/appointments"} />
          </Row>
        </Container>
      );
    };
