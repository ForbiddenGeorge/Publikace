import React, { useState } from 'react';
import { AddPublicationMutation } from 'querries/AddPublicationMutation';
import { useSelector } from 'react-redux';
import AddPublicationModalInsertUsers from './AddPublicationModalInsertUsers';
import { PublicationAddAuthorMutation } from 'querries/PublicationAddAuthorMutation';
import { useDispatch } from 'react-redux';
import { InsertAuthor } from 'features/PublicationSlice';
import { InsertPublication } from 'features/PublicationSlice';
import AlertPositive from './AlertPositive';
function AddPublicationModal() {
  //konstanty pro ukládání hodnot z inputů
  const [title, setTitle] = useState('');
  const [publicationType, setPublicationType] = useState('');
  const [location, setLocation] = useState('');
  const [reference, setReference] = useState('');
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  //beru si druhy všech publikací, které pak vužiji v selectu
  const publicationTypes = useSelector(state => state.publicationTypes);
  const dispatch = useDispatch();
  const handleSubmit = async e => {
    //Na kliknutí buttonu Přidat, volám tady mutaci
    e.preventDefault();
    const response = await AddPublicationMutation({
      //samostatná mutace se všemi proměnými
      title: title,
      publicationType: publicationType,
      location: location,
      reference: reference
    });
    const data = await response.json();
    const selectedPublication = data.data.publicationInsert.publication;
    dispatch(InsertPublication({
      selectedPublication: selectedPublication
    }));
    //Publikace se správně pošle, ale bez autorů, což je správně
    //console.log("data after the AddPublicationMutation: ", data.data);
    //Prvně vytvořím publikací bez autorů, následně si získám id té nové publikace a přidám k ní ty autory
    let AuthorOrder = 0;
    for (const authorId of selectedAuthors) {
      const authorResponse = await PublicationAddAuthorMutation({
        userId: authorId,
        publicationId: selectedPublication.id,
        AuthorNumber: AuthorOrder
      });
      const authorData = await authorResponse.json();
      dispatch(InsertAuthor({
        author: authorData.data.authorInsert.author,
        publicationId: selectedPublication.id
      }));
      AuthorOrder += 1;
    }
    setShowAlert(true);
    //zavolat funkci co vy vynuluje inputy
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "row mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "N\xE1zev publikace",
    value: title,
    onChange: e => setTitle(e.target.value) //ukládám hodnotu z inputu po každé změně, u všech inputů stejné
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    "aria-label": "Default select example",
    onChange: e => setPublicationType(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "Hej"
  }, "Seznam typ\u016F publikac\xED"), publicationTypes.map(Type => /*#__PURE__*/React.createElement("option", {
    key: Type.id,
    value: Type.id
  }, Type.name))))), /*#__PURE__*/React.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "M\xEDsto",
    value: location,
    onChange: e => setLocation(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Reference",
    value: reference,
    onChange: e => setReference(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement(AddPublicationModalInsertUsers, {
    selectedAuthors: selectedAuthors,
    setSelectedAuthors: setSelectedAuthors
  }))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn bg-success text-white"
  }, "P\u0159idat")), showAlert && /*#__PURE__*/React.createElement(AlertPositive, {
    info: "Publikace přidána",
    onClose: handleCloseAlert
  }));
}
export default AddPublicationModal;