import React, { useState } from 'react';
import { AddPublicationMutation } from 'querries/AddPublicationMutation';
import { useSelector } from 'react-redux';
import AddPublicationModalInsertUsers from './AddPublicationModalInsertUsers';
import { PublicationAddAuthorMutation } from 'querries/PublicationAddAuthorMutation';
import { useDispatch } from 'react-redux';
import { InsertAuthor } from 'features/PublicationSlice';
import { InsertPublication } from 'features/PublicationSlice';
import AlertPositive from './AlertPositive';

/**
 * Komponenta modálního okna pro přidání publikace.
 * 
 * @returns {JSX.Element} - The rendered component
 */
function AddPublicationModal() {

  //konstanty pro ukládání hodnot z inputů
  const [title, setTitle] = useState('');
  const [publicationType, setPublicationType] = useState('');
  const [location, setLocation] = useState('');
  const [reference, setReference] = useState('');
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

   //beru si druhy všech publikací, které pak vužiji v selectu
  const publicationTypes = useSelector((state) => state.publicationTypes);
  const dispatch = useDispatch();

 /**
 * Funkce pro odeslání formuláře a volání mutace pro přidání publikace.
 *
 * 
 * @param {Object} e - Událost formuláře.
 * 
 * @returns {promise}
 */
  const handleSubmit = async (e) => {//Na kliknutí buttonu Přidat, volám tady mutaci
   
    e.preventDefault();
    const response = await AddPublicationMutation({ //samostatná mutace se všemi proměnými
        title: title,
        publicationType: publicationType,
        location: location,
        reference: reference
    });
    const data = await response.json();
    const selectedPublication = data.data.publicationInsert.publication;
    dispatch(InsertPublication({selectedPublication: selectedPublication}))
    //Publikace se správně pošle, ale bez autorů, což je správně
    //console.log("data after the AddPublicationMutation: ", data.data);
    //Prvně vytvořím publikací bez autorů, následně si získám id té nové publikace a přidám k ní ty autory
    let AuthorOrder = 0;
    for (const authorId of selectedAuthors) {
      const authorResponse = await PublicationAddAuthorMutation({
        userId: authorId,
        publicationId: selectedPublication.id,
        AuthorNumber: AuthorOrder,
      });
      const authorData = await authorResponse.json();
      dispatch(InsertAuthor({ author: authorData.data.authorInsert.author, publicationId: selectedPublication.id }));
      AuthorOrder += 1;
    }
    setShowAlert(true);
    //zavolat funkci co vy vynuluje inputy
  };

  const handleCloseAlert = () => {
    /**
     * Funkce pro zavření upozornění.
     */
    setShowAlert(false);
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
            <AddPublicationModalInsertUsers selectedAuthors={selectedAuthors} setSelectedAuthors={setSelectedAuthors}/>
            </div>
        </div>
        {/**Button typu submit, volá mutaci */}
        <button type="submit" className="btn bg-success text-white">
          Přidat
        </button>
      </form>
      {showAlert && <AlertPositive info={"Publikace přidána"} onClose={handleCloseAlert} />}
    </div>
  );
}

export default AddPublicationModal;