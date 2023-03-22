import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import { getAllDoctors } from '../../services/apiCalls';
import './Doctors.css'

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
    <Container fluid className="docContainer d-flex flex-column justify-content-between">
            <Row >
                <h1 className='text-center'>Doctors</h1>  
                <div className='d-flex justify-content-center'>
                    {doctors.map((doctors) =>{
                    return (
                        <Col className="my-3 doctorsBox" key={doctors.id} lg={2} sm={4}>
                            <Card className='cardDoctor' style={{ width: '16rem' }}>
                                <Card.Img className='docImg' variant="top" src={doctors.image} />
                                <Card.Body>
                                    <Card.Title>{doctors.User.name} {doctors.User.surname}</Card.Title>
                                    <Card.Text>
                                    {doctors.description}
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
        </Container>
  )
}