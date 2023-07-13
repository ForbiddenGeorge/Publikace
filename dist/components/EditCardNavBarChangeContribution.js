import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { EditCardNavBarChangeContributionMutation } from 'querries/EditCardNavBarChangeContributionMutation';
import { UpdateAuthorShare } from 'features/PublicationSlice';
import { useDispatch } from 'react-redux';
import AlertPositive from './AlertPositive';
import AlertNegative from './AlertNegative';
function EditCardNavBarChangeContribution({
  publicationId
}) {
  const publications = useSelector(state => state.publications);
  const publication = publications.find(pub => pub.id === publicationId.publicationId);
  const [authors, setAuthors] = useState(publication ? [...publication.authors] : []);
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const handleSave = () => {
    let suma = 0;
    authors.forEach(celek => {
      suma += celek.share;
    });
    const sum = Number(suma.toFixed(1));
    console.log('Celkem: ', sum);
    if (sum === 1) {
      console.log('Updated authors:', authors);
      authors.forEach(Contributor => {
        console.log('Mutation called', Contributor);
        EditCardNavBarChangeContributionMutation({
          userId: Contributor.id,
          userShare: Contributor.share,
          lastchange: Contributor.lastchange,
          order: Contributor.order
        });
        console.log('Mutation finished');
        dispatch(UpdateAuthorShare({
          publicationId: publication.id,
          authorId: Contributor.id,
          newShare: Contributor.share
        }));
      });
      setShowAlert(true);
    } else {
      setShowAlert1(true);
      console.log('Total sum must be equal to one. Yours is:', sum);
    }
  };
  const Logging = (event, authorIndex) => {
    const share = parseFloat(event.target.value);
    const updatedAuthors = [...authors];
    updatedAuthors[authorIndex] = {
      ...updatedAuthors[authorIndex],
      share
    };
    setAuthors(updatedAuthors);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
    setShowAlert1(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, publication && /*#__PURE__*/React.createElement("div", null, publication.authors.map((author, index) => {
    const shareValue = authors[index]?.share || 0; // Initialize share value with a default of 0 if it is undefined
    return /*#__PURE__*/React.createElement("div", {
      key: author.id,
      className: "card mb-2 p-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-10"
    }, /*#__PURE__*/React.createElement("h5", null, author.user.name, " ", author.user.surname)), /*#__PURE__*/React.createElement("div", {
      className: "col-2"
    }, /*#__PURE__*/React.createElement("div", {
      key: author.id
    }, /*#__PURE__*/React.createElement("h5", null, shareValue)))), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "customRange3",
      className: "form-label"
    }, "Pod\xEDl na publikaci"), /*#__PURE__*/React.createElement("input", {
      type: "range",
      className: "form-range 90% m-2 border-success",
      min: "0",
      max: "1",
      step: "0.1",
      id: "customRange3",
      value: shareValue,
      onChange: event => Logging(event, index)
    })));
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn bg-success text-white",
    onClick: handleSave
  }, "Ulo\u017Eit zm\u011Bny"), showAlert && /*#__PURE__*/React.createElement(AlertPositive, {
    info: "Nové podíly úspěšně uloženy",
    onClose: handleCloseAlert
  }), showAlert1 && /*#__PURE__*/React.createElement(AlertNegative, {
    info: "Celkový podíl nemůže přesáhnout 100%",
    onClose: handleCloseAlert
  }));
}
export default EditCardNavBarChangeContribution;