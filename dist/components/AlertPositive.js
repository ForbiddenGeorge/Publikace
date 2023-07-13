import React, { useState, useEffect } from 'react';
import { Alert, Modal } from 'react-bootstrap';
function AlertPositive({
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
    }, 1250);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  /*<Button variant="outline-success" onClick={handleClose}>
          Zavřít
        </Button> */

  return /*#__PURE__*/React.createElement(Modal, {
    show: showAlert,
    onHide: handleClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: "success",
    className: "mb-n3"
  }, /*#__PURE__*/React.createElement("p", null, info))));
}
export default AlertPositive;