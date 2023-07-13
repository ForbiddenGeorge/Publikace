import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import EditCardNavBarAddAuthor from './EditCardNavBarAddAuthor';
import EditCardNavBarChangeContribution from './EditCardNavBarChangeContribution';
import EditCardNavBarOrderOfAuthors from './EditCardNavBarOrderOfAuthors';
import EditCardNavBarEditInfo from './EditCardNavBarEditInfo';

//čistá grafika, obsah modalu EditCard
function EditCardNavBar(publicationId) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card text-center "
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-header bg-light text-dark"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "nav nav-tabs card-header-tabs ",
    id: "myTab"
  }, /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#AddAuthor",
    className: "nav-link active text-bg-light",
    "data-bs-toggle": "tab"
  }, "P\u0159id\xE1n\xED u\u017Eivatele")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#OrderOfAuthors",
    className: "nav-link text-bg-light",
    "data-bs-toggle": "tab"
  }, "Po\u0159ad\xED autor\u016F")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#ChangeOfContribution",
    className: "nav-link text-bg-light",
    "data-bs-toggle": "tab"
  }, "Zm\u011Bna pod\xEDlu")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#Acreditation",
    className: "nav-link text-bg-light",
    "data-bs-toggle": "tab"
  }, "Informace o publikaci")))), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tab-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tab-pane fade show active",
    id: "AddAuthor"
  }, /*#__PURE__*/React.createElement(EditCardNavBarAddAuthor, {
    publicationId: publicationId
  })), /*#__PURE__*/React.createElement("div", {
    className: "tab-pane fade",
    id: "OrderOfAuthors"
  }, /*#__PURE__*/React.createElement(EditCardNavBarOrderOfAuthors, {
    publicationId: publicationId
  })), /*#__PURE__*/React.createElement("div", {
    className: "tab-pane fade",
    id: "ChangeOfContribution"
  }, /*#__PURE__*/React.createElement(EditCardNavBarChangeContribution, {
    publicationId: publicationId
  })), /*#__PURE__*/React.createElement("div", {
    className: "tab-pane fade",
    id: "Acreditation"
  }, /*#__PURE__*/React.createElement(EditCardNavBarEditInfo, {
    publicationId: publicationId
  })))));
}
export default EditCardNavBar;