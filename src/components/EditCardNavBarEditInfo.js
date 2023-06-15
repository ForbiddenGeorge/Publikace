import { useState } from "react";
import { useSelector } from "react-redux";
import { PublicationUpdateMutation } from "querries/PublicationUpdateMutation"; //Zatím nefunkční

function EditCardNavBarEditInfo({ publicationId }) {
    const publications = useSelector((state) => state.publications); //pole všech publikací, výběr správné publikace
    const publicationTypes = useSelector((state) => state.publicationTypes) //Typy těch publikací
    const [publicationType, setPublicationType] = useState('');//Vybraný typ publikace
    const selectedPublication = publications.find((publication) => publication.id === publicationId.publicationId); //konkrétní publikace
    console.log("Ta moje publikace ", selectedPublication);
    const [name, setName] = useState(''); // proměnná pro ukládání názvu, bude i pro další inputy
    
    const handlePublicationUpdate = () =>{
          //Volání mutace
          PublicationUpdateMutation({publicationId: selectedPublication.id, name: name})
          console.log("Vybraný typ publikace: ", publicationType);
          console.log("Změněný název:         ", name);
          console.log("Starý název:           ", selectedPublication.name);
          console.log("PublikaceID:           ", selectedPublication.id);
    }
    
    return (
        <div className="container">
            <div>
                <label htmlFor="test" className="m-3">Jméno publikace</label>
            <input onChange={(e) => setName(e.target.value)} placeholder={selectedPublication.name} id="test"></input>
            </div>
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
            
            <button type="button" className="btn bg-success text-white"onClick={handlePublicationUpdate}>Uložit</button>
        </div>
    );
}

export default EditCardNavBarEditInfo;