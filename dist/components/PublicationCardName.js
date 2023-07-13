//část karty publikace, jméno samotné publikace
function PublicationCardName(publication) {
  return /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/React.createElement("h3", null, publication.name));
}
export default PublicationCardName;