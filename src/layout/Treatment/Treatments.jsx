import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import { getAllTreatments } from '../../services/apiCalls';
import '../Doctors/Doctors.css'

export const Treatments = () => {

    const [treatments, setTreatments] = useState([])

    useEffect(() =>{
        if (treatments.length === 0){
            getAllTreatments()
                .then((result) => {
                    console.log('result',result.data.treatment)
                    setTreatments(result.data.treatment)
                })
                .catch((error) => console.log(error));
        }
    }),[treatments];

  return (
    <Container fluid className="homeContainer d-flex flex-column justify-content-between">
            <Row >
                <h1 className='text-center'>Treatments</h1>  
                <div className='d-flex justify-content-center'>
                    {treatments.map((treatment) =>{
                    return (
                        <Col className="my-3 doctorsBox" key={treatment.id} lg={2} sm={4}>
                            <Card className='cardDoctor' style={{ width: '16rem' }}>
                                <Card.Img className='docImg' variant="top" src={treatment.image} />
                                <Card.Body>
                                    <Card.Title>{treatment.treatment}</Card.Title>
                                    <Card.Text>
                                    {treatment.description}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{treatment.price}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    );
                })}</div>                  
            </Row>
        </Container>
  )
}