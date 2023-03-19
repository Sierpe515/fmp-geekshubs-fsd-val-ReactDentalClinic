import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonNav } from '../../components/ButtonNav/ButtonNav';
import { getUserProfile } from '../../services/apiCalls';
import { userData } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
import { addChoosen } from '../detailSlice';
import { useNavigate } from 'react-router-dom';
// import { profile } from "console";

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

    // const selected = (persona) => {
    //     dispatch(profile({ credentials: persona }))

    //         setTimeout(()=>{
    //             navigate("/userDetail");
    //         },500)
    // };

  return (
    <Container
      fluid
      className="homeContainer d-flex flex-column justify-content-between"
    >
      <Row className="d-flex justify-content-center">
        <Col xxl={4} xl={5} sm={7} className="my-3">
          <div className="logRegContainer d-flex flex-column justify-content-center text-center">
            {users.name && <p><strong>Nombre:</strong> {users.name}</p>}
            {users.surname && <p><strong>Apellido:</strong> {users.surname}</p>}
            {users.email && <p><strong>Email:</strong> {users.email}</p>}
            {users.nif && <p><strong>NIF:</strong> {users.nif}</p>}
            {users.direction && <p><strong>Dirección:</strong> {users.direction}</p>}
            {users.birth_date && <p><strong>Fecha de Nacimiento:</strong> {users.birth_date}</p>}
            {users.phone && <p><strong>Teléfono:</strong> {users.phone}</p>}
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <ButtonNav route={"Update Profile"} destiny={"/updateProfile"} />
      </Row>
    </Container>
  )
}
