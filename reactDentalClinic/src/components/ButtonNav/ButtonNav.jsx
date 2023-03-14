import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const ButtonNav = ({route, destiny}) => {

  const navigate = useNavigate();

  return (
    <div className="mb-2 d-flex justify-content-center">
        <Button variant="danger" size="lg" onClick={()=> navigate(destiny)}>
          {route}
        </Button>{' '}
      </div>
  )
}
