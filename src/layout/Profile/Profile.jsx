import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonNav } from '../../components/ButtonNav/ButtonNav';
import { getUserProfile } from '../../services/apiCalls';
import { userData } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

export const Profile = () => {

    const [users, setUsers] = useState({
        name: "",
        surname: "",
        nif: "",
        birth_date: "",
        direction: "",
        email: "",
        phone: ""
    }
        
    );
    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (users.name === "") {
        getUserProfile(ReduxCredentials.credentials.token)
            .then((result) => {
            console.log(result.data.user);
            setUsers({
                name: result.data.user.name,
                surname: result.data.user.surname,
                nif: result.data.user.nif,
                birth_date: result.data.user.birth_date,
                direction: result.data.user.direction,
                email: result.data.user.email,
                phone: result.data.user.phone
            });
            })
            .catch((error) => console.log(error));
        }
    }, [users]);

  return (
    <Container
      fluid
      className="homeContainerMin d-flex flex-column justify-content-between"
    >
      <Row className="d-flex justify-content-center">
        <Col xxl={4} xl={5} sm={7} className="my-3">
          <div className="logRegContainer d-flex flex-column justify-content-center text-center">
            <h1>Profile</h1>
            <p></p>
            {users.name && <p><strong>Name:</strong> {users.name}</p>}
            {users.surname && <p><strong>Surname:</strong> {users.surname}</p>}
            {users.email && <p><strong>Email:</strong> {users.email}</p>}
            {users.nif && <p><strong>NIF:</strong> {users.nif}</p>}
            {users.direction && <p><strong>Direction:</strong> {users.direction}</p>}
            {users.birth_date && <p><strong>Birth Date:</strong> {dayjs(users.birth_date).format("DD MMMM YYYY")}</p>}
            {users.phone && <p><strong>Phone:</strong> {users.phone}</p>}
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <ButtonNav route={"Update Profile"} destiny={"/updateProfile"} />
      </Row>
    </Container>
  )
}
