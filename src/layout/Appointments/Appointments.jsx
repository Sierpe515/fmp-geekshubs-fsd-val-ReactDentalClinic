import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
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
    const [searchDate, setSearchDate] = useState("");
    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAdmin = ReduxCredentials.credentials.userRole?.includes("admin")
    const isDoctor = ReduxCredentials.credentials.userRole?.includes("doctor")

  useEffect(() => {
    if (ReduxCredentials.credentials.userRole?.includes('admin')) {
      console.log("1");
      bringUpcomingAppointmentsAdmin(searchDate, ReduxCredentials.credentials.token)
        .then((result) => {
          setAppointments(result.data.userAppointment);
        })
        .catch((error) => console.log(error));
    } else if (ReduxCredentials.credentials.userRole?.includes('doctor')) {
      console.log("2");
      bringUpcomingAppointmentsDoctor(searchDate, ReduxCredentials.credentials.token)
        .then((result) => {
          setAppointments(result.data.userAppointment);
        })
        .catch((error) => console.log(error));
    }

    console.log("3");

  }, [searchDate, ReduxCredentials]);

  useEffect(() => {
    {isAdmin || isDoctor ? ("") : (navigate('/'))}
  }, []);

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

    const searchHandler = (valor) => {
      setSearchDate(valor)
      setAppointments([])
      console.log(appointments);
    }

    useEffect(() => {
      console.log(appointments);
      console.log(searchDate);
    })

    return (
        <Container
          fluid
          className="homeContainerMin d-flex flex-column justify-content-between"
        >
          <Row className="d-flex justify-content-center">
            <Col xxl={5} xl={6} lg={8} sm={10} className="my-3">
              <div className="logRegContainer d-flex flex-column justify-content-center align-items-center text-center">
                <h1>Appointments List</h1>
                <input
                className="searchInput"
                type="text"
                value={searchDate}
                onChange={(e) => searchHandler(e.target.value)}
                // onChange={(e) => setSearchDate(e.target.value)}
                placeholder="Search appointment..."
                />
                {appointments?.length > 0 ? (
                  <div className="appList">
                    {appointments.map((cita) => {
                      return (
                        <div className={dayjs(cita.date).isBefore(dayjs()) ? "userBox2" : "userBox1"} onClick={() => selected(cita)} key={cita.id}>
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
            <ButtonNav route={"View previous appointments"} destiny={"/appointmentsPast"} />
          </Row>
        </Container>
      );
    };
