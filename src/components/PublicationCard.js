//Upraveno jak Štefek chtěl, snad
//zobrazují se automaticky, teď ještě nějak pojistit že se to vypíše tolikrát, kolik tam bude publikací,
//ale to nemám jak otestovat protože v databázi je jen jedna publikace
import React, { useState } from 'react';
import PublicationCardHeader from './PublicationCardHeaders';
import PublicationCardName from './PublicationCardName';
import PublicationCardAuthors from './PublicationCardAuthors';
import PublicationCardInfo from './PublicationCardInfo';
import EditCard from './EditCard';
  /**
   * Komponenta pro zobrazení publikace.
   *
   * @param {object} publication - publikace.
   * 
   * @returns {JSX.Element} - The rendered component
   */
const PublicationCard = ({ publication }) => {
  const [showEditCard, setShowEditCard] = useState(false);
  //Tyto dvě funkci ukazují a schovávají EditCard modal
  const handleClick = () => {
    setShowEditCard(true);
  };
  const handleEditCardClose = () => {
    setShowEditCard(false);
  };
  //Vytvářím obal karty a uvnitř pak pro každý ze tří sloupců volám samostatnou komponentu s potřebnými daty
  return (
    <div className="container mb-5 mt-5">
      <div className="card">
        {/*Nadpisy sloupečků*/}
        <PublicationCardHeader />
        <div className="row" key={publication.id}>
          <div className="col-4">
            <div>
              {/*Jméno publikace*/}
              {PublicationCardName(publication)}
            </div>
          </div>
          <div className="col-4">
            {/*Výpis pro každého autora */}
            {publication.authors.map((author) => (
              <div className="panel" key={author.order}>
                {PublicationCardAuthors(author)}
              </div>
            ))}
          </div>
          <div className="col-4">
            {/*informace o publikaci*/}
            {PublicationCardInfo(publication)}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          {/*změním hodnotu na true, takže editCard se ukáže*/}
          <button type="button" className="btn btn-success text-white m-1" onClick={handleClick}>Upravit publikaci</button>
        </div>
      </div>
      {/*Tady volám EditCard, podle toho jestli je hodnota true nebo false */}
      {showEditCard && <EditCard onClose={handleEditCardClose} publicationId={publication.id}/>}
    </div>
  );
}

export default PublicationCard;