import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const ButtonNewAppointment = () => {
  return (
    <div className="mb-2 d-flex justify-content-center">
        <Button as={Link} variant="danger" size="lg" to='/newAppointment'>
          Book Appointment
        </Button>{' '}
      </div>
  )
}
