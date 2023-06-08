import { useState } from "react";
import { useSelector } from "react-redux";
//tady to je mutace kterou budeš volat na kliknutí buttonu, zatím není zprovozněná
//import { PublicationUpdateMutation } from "querries/PublicationUpdateMutation"; 

function EditCardNavBarEditInfo({ publicationId }) {
    const publications = useSelector((state) => state.publications); //pole všech publikací, z tohoto pole pak vyberu naši správnou publikaci
    const publicationTypes = useSelector((state) => state.publicationTypes) //Typy těch publikací
    const [publicationType, setPublicationType] = useState('');//Tady máš uložený vybraný typ publikace
    const selectedPublication = publications.find((publication) => publication.id === publicationId.publicationId); //tady je ta konkrétní publikace
    //console.log("Ta moje publikace ", selectedPublication);
    const [name, setName] = useState(''); // proměnná pro ukládání názvu, takhle budeš mít i pro další inputy

    const handlePublicationUpdate = () =>{
            //Tady pak budeš volat tu samotnou mutaci
          //  PublicationUpdateMutation{//A v ní všechny potřebná data}
          console.log("Vybraný typ publikacce", publicationType);
          console.log("Změněný název: ", name);

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
          <option key={Type.id} value={Type.name}>{/*V tom value pak nejspíš bude id, ne name, ale teď aby jsi to viděl v koznoli */}
            {Type.name}
          </option>
        ))}
      </select>
            
            <button type="button" className="btn bg-success text-white"onClick={handlePublicationUpdate}>Uložit</button>
        </div>
    );
}

export default EditCardNavBarEditInfo;