import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateAuthorOrder } from 'features/PublicationSlice';
import { ChangeAuthorOrderMutation } from 'querries/ChangeAuthorOrderMutation';
import AlertPositive from './AlertPositive';
import AlertNegative from './AlertNegative';
function EditCardNavBarOrderOfAuthors({
  publicationId
}) {
  const publications = useSelector(state => state.publications);
  const selectedPublication = publications.find(publication => publication.id === publicationId.publicationId);
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [authors, setAuthors] = useState(selectedPublication ? [...selectedPublication.authors] : []);
  const handleOrderChange = (authorId, newOrder) => {
    const updatedAuthors = authors.map(author => author.id === authorId ? {
      ...author,
      order: newOrder
    } : author);
    setAuthors(updatedAuthors);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
    setShowAlert1(false);
  };
  const handleSaveOrderChange = () => {
    const isOrderUnique = checkUniqueOrder(authors);
    if (isOrderUnique) {
      console.log("USeři:", authors);
      authors.forEach(author => {
        console.log("Id usera: ", author.id, "Order usera: ", author.order, "Share usera: ", author.share);
        ChangeAuthorOrderMutation({
          userId: author.id,
          userShare: author.share,
          userOrder: author.order,
          lastchange: author.lastchange
        });
        console.log('Mutation zavolána');
        dispatch(UpdateAuthorOrder({
          publicationId: selectedPublication.id,
          authorId: author.id,
          newOrder: author.order
        }));
        console.log('A dispatch taky');
      });
      setShowAlert(true);
    } else {
      console.log('Pořadí autorů musí být unikátní');
      setShowAlert1(true);
    }
  };
  const checkUniqueOrder = authors => {
    const orderSet = new Set();
    for (const author of authors) {
      if (orderSet.has(author.order)) {
        return false;
      }
      orderSet.add(author.order);
    }
    return true;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, selectedPublication && selectedPublication.authors.map(author => /*#__PURE__*/React.createElement("div", {
    key: author.id,
    className: "card mb-2 p-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/React.createElement("h5", null, author.user.name, " ", author.user.surname)), /*#__PURE__*/React.createElement("div", {
    className: "col-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: authors.find(a => a.id === author.id)?.order || '',
    min: 1,
    max: selectedPublication.authors.length,
    onChange: e => handleOrderChange(author.id, parseInt(e.target.value))
  }))))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn bg-success text-white",
    onClick: handleSaveOrderChange
  }, "Ulo\u017Eit po\u0159ad\xED"), showAlert && /*#__PURE__*/React.createElement(AlertPositive, {
    info: "Pořadí autorů změněno",
    onClose: handleCloseAlert
  }), showAlert1 && /*#__PURE__*/React.createElement(AlertNegative, {
    info: "Změny neuloženy",
    onClose: handleCloseAlert
  }));
}
export default EditCardNavBarOrderOfAuthors;