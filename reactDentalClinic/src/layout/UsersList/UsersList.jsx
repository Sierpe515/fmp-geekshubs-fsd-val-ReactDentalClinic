import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonNav } from '../../components/ButtonNav/ButtonNav';
import { bringUsers } from "../../services/apiCalls";
import { userData } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
import { addChoosen } from '../detailSlice';
import { useNavigate } from 'react-router-dom';

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const ReduxCredentials = useSelector(userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (users.length === 0) {
      bringUsers(ReduxCredentials.credentials.token)
        .then((result) => {
          console.log(result);
          setUsers(result.data.user);
        })
        .catch((error) => console.log(error));
    }
  }, [users]);

  const selected = (persona) => {
    dispatch(addChoosen({ choosenObject: persona }))

        setTimeout(()=>{
            navigate("/userDetail");
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
            {users.length > 0 ? (
              <div>
                {users.map((persona) => {
                  return (
                    <div onClick={() => selected(persona)} key={persona.id}>
                      {persona.name}
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
