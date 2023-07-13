import { AddAuthorButton } from 'actions/AddAuthorButton';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//Tady ukazuji select, volám query a posílám příslušná data do další komponenty, která volá mutaci
function EditCardNavBarAddAuthorSelect(publicationId) {
  // const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(true);
  const users = useSelector(state => state.users);
  console.log("Users array: ", users);
  const handleSelectChange = event => {
    const selectedUserId = event.target.value;
    setSelectedUserId(selectedUserId);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    "aria-label": "Default select example",
    onChange: handleSelectChange
  }, /*#__PURE__*/React.createElement("option", {
    disabled: true
  }, "Seznam u\u017Eivatel\u016F"), users.map(user => /*#__PURE__*/React.createElement("option", {
    key: user.id,
    value: user.id
  }, user.name, " ", user.surname, " ", user.email))), /*#__PURE__*/React.createElement(AddAuthorButton, {
    selectedUserId: selectedUserId,
    selectedPublicationId: publicationId
  }));
}
export default EditCardNavBarAddAuthorSelect;