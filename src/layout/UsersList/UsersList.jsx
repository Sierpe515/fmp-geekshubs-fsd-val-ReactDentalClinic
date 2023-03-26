import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonNav } from '../../components/ButtonNav/ButtonNav';
import { bringUsersByAdmin, bringUsersByDoctor } from "../../services/apiCalls";
import { userData } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
import { addChoosen } from '../detailSlice';
import { useNavigate } from 'react-router-dom';
import './UserList.css'

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const ReduxCredentials = useSelector(userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAdmin = ReduxCredentials.credentials.userRole.includes("admin")
    const isDoctor = ReduxCredentials.credentials.userRole.includes("doctor")

  useEffect(() => {
    {isAdmin || isDoctor ? ("") : (navigate('/'))}
  }, []);

  useEffect(() => {
    // if (!ReduxCredentials?.credentials?.userRole?.includes('admin') || !ReduxCredentials?.credentials?.userRole?.includes('doctor')) {
    //   navigate("/home");
    //   return;
    // }

    if (ReduxCredentials?.credentials?.userRole?.includes('admin')) {
      bringUsersByAdmin(searchUser, ReduxCredentials.credentials.token)
        .then((result) => {
          console.log(result);
          setUsers(result.data.user);
          console.log(searchUser);
        })
        .catch((error) => console.log(error));
    } else if (ReduxCredentials.credentials.userRole.includes('doctor')) {
      bringUsersByDoctor(searchUser, ReduxCredentials.credentials.token)
        .then((result) => {
          console.log(ReduxCredentials.credentials);
          setUsers(result.data.user);
        })
        .catch((error) => console.log(error));
    }}, [searchUser, ReduxCredentials]);

  const selected = (persona) => {
    dispatch(addChoosen({ choosenObject: persona }))

    if (ReduxCredentials.credentials.userRole.includes('admin')){
        setTimeout(()=>{
            navigate("/userDetail");
        },500)
      } else if (ReduxCredentials.credentials.userRole.includes('doctor')){
        setTimeout(()=>{
          navigate("/userDetailDoctor");
      },500)
      }
  };

  return (
    <Container
      fluid
      className="homeContainerMin d-flex flex-column justify-content-between"
    >
      <Row className="d-flex justify-content-center">
        <Col xxl={4} xl={5} sm={7} className="my-3">
          <div className="logRegContainer d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="userListTitle">User List</h1>
              <input
                className="searchInput"
                type="text"
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
                placeholder="Search user..."
              />
            {users.length > 0 ? (
              <div>
                {users.map((persona) => {
                  return (
                    <div className="userBox" onClick={() => selected(persona)} key={persona.id}>
                      <strong>User:</strong> {persona.name} {persona.surname}
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
        <ButtonNav route={"View appointment list"} destiny={"/appointments"} />
      </Row>
    </Container>
  );
};
