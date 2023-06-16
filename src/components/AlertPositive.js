
import React, { useState } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';

function AlertPositive({ info }) {
    
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <Modal show={showAlert} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Success!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="success">
          <p>{info}</p>
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlertPositive;