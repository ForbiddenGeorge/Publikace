import React, { useState } from 'react';
import { AddPublicationMutation } from 'querries/AddPublicationMutation';
import { useSelector } from 'react-redux';
import AddPublicationModalInsertUsers from './AddPublicationModalInsertUsers';
import { PublicationAddAuthorMutation } from 'querries/PublicationAddAuthorMutation';

function AddPublicationModal() {
  //konstanty pro ukládání hodnot z inputů
  const [title, setTitle] = useState('');
  const [publicationType, setPublicationType] = useState('');
  const [location, setLocation] = useState('');
  const [reference, setReference] = useState('');
  const [selectedAuthors, setSelectedAuthors] = useState([]);

   //beru si druhy všech publikací, které pak vužiji v selectu
  const publicationTypes = useSelector((state) => state.publicationTypes);

  const handleSubmit = async (e) => {//Na kliknutí buttonu Přidat, volám tady mutaci
    e.preventDefault();
    const response = await AddPublicationMutation({ //samostatná mutace se všemi proměnými
        title: title,
        publicationType: publicationType,
        location: location,
        reference: reference
    });
    const data = await response.json();
    const selectedPublicationId = data.data.publicationInsert.publication.id;
    let AuthorOrder = 0;
    selectedAuthors.forEach(authorId => {
      PublicationAddAuthorMutation({
          userId: authorId, 
          publicationId: selectedPublicationId, 
          AuthorNumber: AuthorOrder
      });
      AuthorOrder += 1;
    });
    //Prvně vytvořím publikací bez autorů, následně si získám id té nové publikace a přidám k ní ty autory
    
  };

  return (
    <div className="container-fluid">
      {/*Vytvářím formu pro lepší organizaci všech inputů */}
      <form onSubmit={handleSubmit}>
        <div className="row mb-4">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Název publikace"
              value={title}
              onChange={(e) => setTitle(e.target.value)} //ukládám hodnotu z inputu po každé změně, u všech inputů stejné
            />
          </div>
          <div className="col-6">
            {/*Samotný select pro typy publikací */}
          <select className="form-select" aria-label="Default select example" onChange={(e) => setPublicationType(e.target.value)}>
        <option value={"Hej"}>
            Seznam typů publikací
        </option>
        {publicationTypes.map((Type) => (
          <option key={Type.id} value={Type.id}>
            {Type.name}
          </option>
        ))}
      </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Místo"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Reference"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </div>
        </div>
        {/*Select pro výběr autorů k publikaci */}
        <div className='row mb-3'>
            <div className='col-12'>
            <AddPublicationModalInsertUsers
            selectedAuthors={selectedAuthors}
            setSelectedAuthors={setSelectedAuthors}
              />
            </div>
        </div>
        {/**Button typu submit, volá mutaci */}
        <button type="submit" className="btn bg-success text-white">
          Přidat
        </button>
      </form>
    </div>
  );
}

export default AddPublicationModal;