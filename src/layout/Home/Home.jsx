import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonNav } from '../../components/ButtonNav/ButtonNav';
import Z3 from '../../image/z3.png'
import './Home.css'
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import iconZ1 from '../../image/icon1.png'
import iconZ2 from '../../image/icon2.png'

export const Home = () => {


  const dataCredentialsRdx = useSelector(userData);


  return (
    <Container fluid className="homeContainer d-flex flex-column">
        <Row className="d-flex justify-content-center">
            <Col xxl={5} xl={5} sm={7} className="my-3">
                <img src={ Z3 } alt="Z3" className='z3' />
                <div className='home1Container'></div>
            </Col>
        </Row>
      {dataCredentialsRdx.credentials.token ? (
        <Row className="welcomeBox d-flex justify-content-center text-center">
          <Col xxl={5} xl={5} sm={7} className="my-3 d-flex justify-content-center">
              <h1> Happy to see you again, <br/><img src={iconZ2} alt="" /> {dataCredentialsRdx.credentials.userName}! <img src={iconZ1} alt="" /></h1>
          </Col>
        </Row>
      ) : ("")}
        
        <Row className="d-flex justify-content-center">
          <ButtonNav route={"Book Appointment"} destiny={"/newAppointment"}/>
        </Row>
    </Container>
  )
}
