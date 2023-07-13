import React, { useState, useEffect } from 'react';
import { Alert, Modal } from 'react-bootstrap';
function AlertNegative({
  info,
  onClose
}) {
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
  return /*#__PURE__*/React.createElement(Modal, {
    show: showAlert,
    onHide: handleClose,
    backdrop: false
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: "danger"
  }, /*#__PURE__*/React.createElement("p", null, info)));
}
export default AlertNegative;