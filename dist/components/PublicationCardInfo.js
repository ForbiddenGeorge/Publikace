//část karty publikace, informace o publikaci
function PublicationCardInfo(publication) {
  return /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("p", null, "Datum zve\u0159ejn\u011Bn\xED: ", publication.publishedDate), /*#__PURE__*/React.createElement("p", null, "\u010Cl\xE1nek: ", publication.publicationtype.name), /*#__PURE__*/React.createElement("p", null, "Posledn\xED zm\u011Bna: ", publication.lastchange), /*#__PURE__*/React.createElement("p", null, "M\xEDsto: ", publication.place), /*#__PURE__*/React.createElement("p", null, "Reference: ", publication.reference));
}
export default PublicationCardInfo;