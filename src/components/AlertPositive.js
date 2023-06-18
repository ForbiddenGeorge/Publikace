import React, { useState, useEffect } from 'react';
import { Alert, Modal } from 'react-bootstrap';

function AlertPositive({ info, onClose }) {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 1250);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  /*<Button variant="outline-success" onClick={handleClose}>
          Zavřít
        </Button> */

  return (
    <Modal show={showAlert} onHide={handleClose}>
        <div className="panel">
        <Alert variant="success" className='mb-n3'>
        <p>{info}</p>
        </Alert>
        </div>
    </Modal>
  );
}

export default AlertPositive;