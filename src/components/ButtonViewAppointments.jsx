import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const ButtonViewAppointment = () => {
  return (

    // const navigate = useNavigate();
    
    <div className="mb-2 d-flex justify-content-center">

      {/* <Button onClick={()=> navigate(destino)}>{Ruta} */}

        <Button as={Link} variant="danger" size="lg" to='/appointments'>
          View Appointments
        </Button>{' '}
      </div>
  )
}
