//Upraveno jak Štefek chtěl, snad
//zobrazují se automaticky, teď ještě nějak pojistit že se to vypíše tolikrát, kolik tam bude publikací,
//ale to nemám jak otestovat protože v databázi je jen jedna publikace
import React, { useState } from 'react';
import PublicationCardHeader from './PublicationCardHeaders';
import PublicationCardName from './PublicationCardName';
import PublicationCardAuthors from './PublicationCardAuthors';
import PublicationCardInfo from './PublicationCardInfo';
import EditCard from './EditCard';
const PublicationCard = ({
  publication
}) => {
  const [showEditCard, setShowEditCard] = useState(false);
  //Tyto dvě funkci ukazují a schovávají EditCard modal
  const handleClick = () => {
    setShowEditCard(true);
  };
  const handleEditCardClose = () => {
    setShowEditCard(false);
  };
  //Vytvářím obal karty a uvnitř pak pro každý ze tří sloupců volám samostatnou komponentu s potřebnými daty
  return /*#__PURE__*/React.createElement("div", {
    className: "container mb-5 mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement(PublicationCardHeader, null), /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: publication.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/React.createElement("div", null, PublicationCardName(publication))), /*#__PURE__*/React.createElement("div", {
    className: "col-4"
  }, publication.authors.map(author => /*#__PURE__*/React.createElement("div", {
    className: "panel",
    key: author.order
  }, PublicationCardAuthors(author)))), /*#__PURE__*/React.createElement("div", {
    className: "col-4"
  }, PublicationCardInfo(publication))), /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-success text-white m-1",
    onClick: handleClick
  }, "Upravit publikaci"))), showEditCard && /*#__PURE__*/React.createElement(EditCard, {
    onClose: handleEditCardClose,
    publicationId: publication.id
  }));
};
export default PublicationCard;