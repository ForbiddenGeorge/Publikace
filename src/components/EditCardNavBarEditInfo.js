import { useState } from "react";
import { useSelector } from "react-redux";
// import { SaveEditedPublication } from "./SaveEditedPublicationButton";
import { PublicationUpdateMutation } from "querries/PublicationUpdateMutation";
import { type } from "@testing-library/user-event/dist/type";
//tady to je mutace kterou budeš volat na kliknutí buttonu, zatím není zprovozněná
//import { PublicationUpdateMutation } from "querries/PublicationUpdateMutation";

function EditCardNavBarEditInfo({ publicationId }) {
    const publications = useSelector((state) => state.publications); //pole všech publikací, z tohoto pole pak vyberu naši správnou publikaci
    const publicationTypes = useSelector((state) => state.publicationTypes) //Typy těch publikací
    const [publicationType, setPublicationType] = useState('');//Uložený vybraný typ publikace
    const selectedPublication = publications.find((publication) => publication.id === publicationId.publicationId); //tady je ta konkrétní publikace
    //console.log("Ta moje publikace ", selectedPublication);
    const [name, setName] = useState(''); // proměnná pro ukládání názvu, takhle budeš mít i pro další inputy
    const [place, setPlace] = useState('');
    const [reference, setReference] = useState(''); 

    const handlePublicationUpdate = () =>{

    // console.log("XXName: ", name)
    // console.log("XXType: ",publicationType)
    // console.log("XXReference: ", reference)
    // console.log("XXPlace: ", place)

    if (name === null) { name = selectedPublication.name; }
    if (reference === null) { reference = selectedPublication.reference; }
    if (place === null) { place = selectedPublication.place; }
    if (publicationType === null) { publicationType = selectedPublication.publicationtype.id; }
      
      //VOLÁNÍ MUTACE
      PublicationUpdateMutation({ 
        pubId:selectedPublication.id,
        pubName:name,
        pubLastChange: selectedPublication.lastchange,
        pubTypeId: publicationType,
        pubReference: reference,
        pubPlace: place
      })

      console.log("Name: ", name)
      console.log("Type: ",publicationType)
      console.log("Reference: ", reference)
      console.log("Place: ", place)
      console.log("Type: ", selectedPublication.publicationtype.id)
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