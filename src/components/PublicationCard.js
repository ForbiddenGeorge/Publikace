//Upraveno jak Štefek chtěl, snad
//zobrazují se automaticky, teď ještě nějak pojistit že se to vypíše tolikrát, kolik tam bude publikací,
//ale to nemám jak otestovat protože v databázi je jen jedna publikace
import React, { useState } from 'react';
import PublicationCardHeader from './PublicationCardHeaders';
import PublicationCardName from './PublicationCardName';
import PublicationCardAuthors from './PublicationCardAuthors';
import PublicationCardInfo from './PublicationCardInfo';
import EditCard from './EditCard';

const PublicationCard = ({ publication }) => {
  const [showEditCard, setShowEditCard] = useState(false);

  const handleClick = () => {
    setShowEditCard(true);
  };

  const handleEditCardClose = () => {
    setShowEditCard(false);
  };

  return (
    <div className="container mb-5 mt-5">
      <div className="card">
        <PublicationCardHeader />
        <div className="row" key={publication.id}>
          <div className="col-4">
            <div>
              {PublicationCardName(publication)}
            </div>
          </div>
          <div className="col-4">
            {publication.authors.map((author) => (
              <div className="panel" key={author.id}>
                {PublicationCardAuthors(author)}
              </div>
            ))}
          </div>
          <div className="col-4">
            {PublicationCardInfo(publication)}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-success text-white m-1" onClick={handleClick}>Upravit publikaci</button>
        </div>
      </div>
      {showEditCard && <EditCard onClose={handleEditCardClose} publicationId={publication.id}/>}
    </div>
  );
}

export default PublicationCard;