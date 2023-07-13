//část karty publikace, seznam autorů a jejich informací
function PublicationCardAuthors(author) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, author.user.name, " ", author.user.surname), /*#__PURE__*/React.createElement("p", null, "Email: ", author.user.email), /*#__PURE__*/React.createElement("p", null, "Pod\xEDl: ", author.share), /*#__PURE__*/React.createElement("p", null, "Po\u0159ad\xED: ", author.order));
}
export default PublicationCardAuthors;