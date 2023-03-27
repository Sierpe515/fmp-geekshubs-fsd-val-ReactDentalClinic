import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import { getAllTreatments } from '../../services/apiCalls';
import '../Doctors/Doctors.css';
import './Treatments.css'

export const Treatments = () => {

    const [treatments, setTreatments] = useState([])

    useEffect(() =>{
        if (treatments.length === 0){
            getAllTreatments()
                .then((result) => {
                    setTreatments(result.data.treatment)
                })
                .catch((error) => console.log(error));
        }
    }),[treatments];

  return (
    <Container fluid className="homeContainerMin d-flex flex-column justify-content-between">
            <Row >
                <h1 className='text-center'>Treatments</h1>  
                <div className='d-flex justify-content-center'>
                <Col className="my-3 doctorsBox" key={treatments.id} lg={2} sm={4}>
                    {treatments.map((treatment) =>{
                    return (
                        
                            <Card className='cardDoctor'>
                                <Card.Img className='treatmentImg' variant="top" src={treatment.image} />
                                <Card.Body>
                                    <Card.Title>{treatment.treatment}</Card.Title>
                                    <Card.Text>
                                    <strong>Description: </strong>{treatment.description}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><strong>Approximate cost: </strong>{treatment.price}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        
                    );
                })}
                </Col>
                </div>                  
            </Row>
        </Container>
  )
}