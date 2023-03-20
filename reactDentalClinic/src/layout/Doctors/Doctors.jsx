import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    });

  return (
    <Container fluid className="homeContainer d-flex flex-column justify-content-between">
            <Row className="d-flex justify-content-center">
                <Col xxl={4} xl={5} sm={7} className="my-3">
                    <div className='logRegContainer'>
                        <h1 className='text-center'>Doctors</h1>
                        
                        {/* <div>{doctors.map()}</div> */}

                    </div>
                </Col>
            </Row>
        </Container>
  )
}