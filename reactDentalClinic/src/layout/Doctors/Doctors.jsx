import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import { getAllDoctors } from '../../services/apiCalls';

export const Doctors = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() =>{
        if (doctors.length === 0){
            getAllDoctors()
                .then((result) => {
                    console.log('result',result.data.user)
                    setDoctors(result.data.user)
                })
                .catch((error) => console.log(error));
        }
    }),[doctors];

  return (
    <Container fluid className="homeContainer d-flex flex-column justify-content-between">
            <Row className="d-flex justify-content-center">
                <Col xxl={12} xl={5} sm={7} className="my-3">
                    <div className='logRegContainer'>
                        <h1 className='text-center'>Doctors</h1>
                        <Row className="justify-content-center">
                        <div>{doctors.map((doctors) =>{
                            return (
                                <Col className="my-3 d-flex justify-content-center" key={doctors.id} lg={12} sm={12}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={doctors.image} />
                                        <Card.Body>
                                            <Card.Title>{doctors.User.name} {doctors.User.surname}</Card.Title>
                                            <Card.Text>
                                            Description: Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>{doctors.Specialty.type}</ListGroup.Item>
                                            <ListGroup.Item>{doctors.User.email}</ListGroup.Item>
                                            <ListGroup.Item>{doctors.User.birth_date}</ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                              );
                        })}</div>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
  )
}