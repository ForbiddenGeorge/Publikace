import { useState } from "react";
import { useSelector } from "react-redux";
// import { SaveEditedPublication } from "./SaveEditedPublicationButton";
import { PublicationUpdateMutation } from "querries/PublicationUpdateMutation";
//import { type } from "@testing-library/user-event/dist/type";
//tady to je mutace kterou budeš volat na kliknutí buttonu, zatím není zprovozněná
//import { PublicationUpdateMutation } from "querries/PublicationUpdateMutation";

function EditCardNavBarEditInfo({ publicationId }) {
    const publications = useSelector((state) => state.publications); //pole všech publikací, z tohoto pole pak vyberu naši správnou publikaci
    const publicationTypes = useSelector((state) => state.publicationTypes) //Typy těch publikací
    const [publicationType, setPublicationType] = useState('');//Uložený vybraný typ publikace
    const selectedPublication = publications.find((publication) => publication.id === publicationId.publicationId); //tady je ta konkrétní publikace se kterou pracujeme
    //console.log("Ta moje publikace ", selectedPublication);
    const [name, setName] = useState(''); // proměnná pro ukládání názvu
    const [place, setPlace] = useState(''); // proměnná pro ukládání místa
    const [reference, setReference] = useState(''); // proměnná pro ukládání reference

    const handlePublicationUpdate = () =>{
      
      // OŠETŘENÍ PRÁZDNÝCH MÍST
      // Pokud se při editaci (stisku tlačítka) nezmění jistá hodnota
      const updatedName = name || selectedPublication.name;
      const updatedType = publicationType || selectedPublication.publicationtype.id;
      const updatedReference = reference || selectedPublication.reference;
      const updatedPlace = place || selectedPublication.place;
      
      //VOLÁNÍ MUTACE Původní verze
      // PublicationUpdateMutation({ 
      //   pubId:selectedPublication.id,
      //   pubName:name,
      //   pubLastChange: selectedPublication.lastchange,
      //   pubTypeId: publicationType,
      //   pubReference: reference,
      //   pubPlace: place
      // })

      // VOLÁNÍ MUTACE
      PublicationUpdateMutation({ 
        pubId:selectedPublication.id,
        pubName:updatedName,
        pubLastChange: selectedPublication.lastchange,
        pubTypeId: updatedType,
        pubReference: updatedReference,
        pubPlace: updatedPlace
      })
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
        </div>
    );
}

export default EditCardNavBarEditInfo;