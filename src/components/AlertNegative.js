import React, { useState, useEffect } from 'react';
import { Alert, Modal } from 'react-bootstrap';

function AlertNegative({ info, onClose }) {
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
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  

  return (
    <Modal show={showAlert} onHide={handleClose} backdrop={false}>
        <Alert variant="danger">
        <p>{info}</p>
        </Alert>
    </Modal>
  );
}

export default AlertNegative;