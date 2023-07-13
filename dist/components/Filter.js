import React, { useState } from 'react';
import FilterByUser from './FilterByUser';
import PublicationLoad from './PublicationLoad';
function Filter() {
  //konstanty pro ukládání hodnot z inputů
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const handleSubmit = async e => {
    //Na kliknutí buttonu Filtrovat, volám PublicationLoad
    //console.log('F - Selected authors:', selectedAuthors);
    e.preventDefault();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mb-5 mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row mx-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-10"
  }, /*#__PURE__*/React.createElement(FilterByUser, {
    selectedAuthors: selectedAuthors,
    setSelectedAuthors: setSelectedAuthors
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn bg-success text-white"
  }, " Filtrovat podle autora")))))), /*#__PURE__*/React.createElement(PublicationLoad, {
    Authors: selectedAuthors
  }));
}
export default Filter;