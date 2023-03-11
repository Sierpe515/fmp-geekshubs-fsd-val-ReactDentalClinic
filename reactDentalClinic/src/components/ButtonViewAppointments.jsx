import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const ButtonViewAppointment = () => {
  return (
    <div className="mb-2 d-flex justify-content-center">
        <Button as={Link} variant="danger" size="lg" to='/appointments'>
          View Appointments
        </Button>{' '}
      </div>
  )
}
