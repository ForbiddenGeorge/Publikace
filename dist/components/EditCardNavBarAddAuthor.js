/*import { useDispatch } from 'react-redux';
import { loadData } from 'features/PublicationSlice';
import { useEffect, useState } from 'react';*/
import React from "react";
import EditCardNavBarAddAuthorSelect from './EditCardNavBarAddAuthorSelect';
function EditCardNavBarAddAuthor(publicationId) {
  //Tělo jedné karty, volám samotný select
  return /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header mb-5"
  }, /*#__PURE__*/React.createElement("h3", null, "P\u0159\xEDd\xE1ni autora k publikaci")), /*#__PURE__*/React.createElement(EditCardNavBarAddAuthorSelect, {
    publicationId: publicationId
  }));
}
export default EditCardNavBarAddAuthor;