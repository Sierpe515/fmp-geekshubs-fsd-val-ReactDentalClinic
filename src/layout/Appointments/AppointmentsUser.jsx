import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonNav } from '../../components/ButtonNav/ButtonNav';
import { bringUpcomingAppointmentsUser } from "../../services/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { addAppointmentUser } from '../appointmentSlice';
import { useNavigate } from 'react-router-dom';
import { userData } from "../userSlice";
import dayjs from "dayjs";
import './Appointments.css'
import Z5 from '../../image/z5.png'
import Z6 from '../../image/z6.png'

export const AppointmentsUser = () => {
    const [appointments, setAppointments] = useState([]);
    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      if (!ReduxCredentials.credentials.token){
          navigate('/')
      }
    }, []);

    useEffect(() => {
        if (appointments.length === 0) {
          bringUpcomingAppointmentsUser(ReduxCredentials.credentials.token)
            .then((result) => {

              if(result.data.userAppointment.length > 0){

                setAppointments(result.data.userAppointment);
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
        <Container fluid className="homeContainerMin d-flex flex-column justify-content-between">
          <Row className="d-flex justify-content-center">
            <Col xxl={4} xl={5} sm={7} className="my-3">
              <div className="logRegContainer d-flex flex-column justify-content-center text-center">
              <h1 className="text-center">Upcoming Appointments</h1>
                {appointments.length > 0 ? (
                  <div className="d-flex flex-column align-items-center">
                    <img className="z5" src={Z5} alt="" />
                    {appointments.map((cita) => {
                      return (
                        <div className="userBox" onClick={() => selected(cita)} key={cita.id}>
                          <strong>{dayjs(cita.date).format('YYYY-MMMM-DD')}</strong> {cita.hour}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <>
                  <img className="z6" src={Z6} alt="" />
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
            <ButtonNav route={"View previous appointments"} destiny={"/appointmentsUserPast"} />
          </Row>
        </Container>
      );
    };
