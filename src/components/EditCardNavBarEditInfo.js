import { useState } from "react";
import { useSelector } from "react-redux";
// import { SaveEditedPublication } from "./SaveEditedPublicationButton";
import { PublicationUpdateMutation } from "querries/PublicationUpdateMutation";
import AlertPositive from "components/AlertPositive";
import AlertNegative from "components/AlertNegative";

function EditCardNavBarEditInfo({ publicationId }) {
    const publications = useSelector((state) => state.publications); //pole všech publikací, z tohoto pole pak vyberu naši správnou publikaci
    const publicationTypes = useSelector((state) => state.publicationTypes) //Typy těch publikací
    const [publicationType, setPublicationType] = useState('');//Uložený vybraný typ publikace
    const selectedPublication = publications.find((publication) => publication.id === publicationId.publicationId); // konkrétní publikace se kterou pracujeme
    const [name, setName] = useState(''); // proměnná pro ukládání názvu
    const [place, setPlace] = useState(''); // proměnná pro ukládání místa
    const [reference, setReference] = useState(''); // proměnná pro ukládání reference

    const [showAlert, setShowAlert] = useState(false);
    const [showAlert1, setShowAlert1] = useState(false);
    const handleCloseAlert = () => {
          setShowAlert(false);
          setShowAlert1(false);
    };

    // Funkce při stisku tlačítka
    const handlePublicationUpdate = async () =>{
      try{
        // OŠETŘENÍ PRÁZDNÝCH MÍST
        // Pokud se při editaci (stisku tlačítka) nezmění jistá hodnota
        const updatedName = name || selectedPublication.name;
        const updatedType = publicationType || selectedPublication.publicationtype.id;
        const updatedReference = reference || selectedPublication.reference;
        const updatedPlace = place || selectedPublication.place;

        // VOLÁNÍ MUTACE
        PublicationUpdateMutation({ 
          pubId:selectedPublication.id,
          pubName:updatedName,
          pubLastChange: selectedPublication.lastchange,
          pubTypeId: updatedType,
          pubReference: updatedReference,
          pubPlace: updatedPlace
        })

        console.log('Publication edited successfully!');
        setShowAlert(true);
      }
      catch (error) {
        console.error('Error editing publication:', error);
        setShowAlert1(true);
      }
    }
    
    return (
        <div className="container">
            <div>
                <label htmlFor="test" className="m-3">Jméno publikace</label>
            <input onChange={(e) => setName(e.target.value)} placeholder={selectedPublication.name} id="test"></input>
            </div>
            <div>
                <label htmlFor="test" className="m-3">Reference</label>
            <input onChange={(e) => setReference(e.target.value)} placeholder={selectedPublication.reference} id="test"></input>
            </div>
            <div>
                <label htmlFor="test" className="m-3">Místo</label>
            <input onChange={(e) => setPlace(e.target.value)} placeholder={selectedPublication.place} id="test"></input>
            </div>
            <select onChange={(e) => setPublicationType(e.target.value)} className="form-select" aria-label="Default select example" >
              <option value={"Hej"}>
                  Seznam typů publikací
              </option>
              {publicationTypes.map((Type) => (
                <option key={Type.id} value={Type.id}>
                  {Type.name}
                </option>
              ))}
            </select>            
            <button type="button" className="btn bg-success text-white" onClick={handlePublicationUpdate}>Uložit</button>
            {showAlert && <AlertPositive info={"Publikace úspěšně upravena"} onClose={handleCloseAlert} />}
            {showAlert1 && <AlertNegative info={"Nepovedlo upravit publikaci"} onClose={handleCloseAlert} />}
        </div>
    );
}

export default EditCardNavBarEditInfo;