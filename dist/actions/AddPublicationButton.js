import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import AddPublicationModal from 'components/AddPublicationModal';
function AddPublication({
  types
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn bg-success text-white mt-3 mb-2 mx-2",
    "data-bs-toggle": "modal",
    "data-bs-target": "#AddPublicationModal"
  }, "P\u0159idat publikaci"), /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "AddPublicationModal",
    role: "dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog modal-lg modal-dialog-centered"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header bg-success text-white"
  }, /*#__PURE__*/React.createElement("h3", null, "P\u0159id\xE1n\xED publikace")), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement(AddPublicationModal, null)), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn bg-success text-white",
    "data-bs-dismiss": "modal"
  }, "Zav\u0159\xEDt"))))));
}
export default AddPublication;