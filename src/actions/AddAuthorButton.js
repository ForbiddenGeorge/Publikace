import {useSelector} from "react-redux";
import { PublicationAddAuthorMutation } from 'querries/PublicationAddAuthorMutation';
//import { useState } from "react";
import { useDispatch } from "react-redux";
import {InsertAuthor} from 'features/PublicationSlice';
import AlertPositive from "components/AlertPositive";
import AlertNegative from "components/AlertNegative";
import { useState } from "react";


export const AddAuthorButton= ({selectedUserId, selectedPublicationId}) => {
/**
   * React komponenta pro tlačítko "Přidat autora".
   *
   * Parametry:
   * - selectedUserId (str): ID vybraného uživatele.
   * - selectedPublicationId (str): ID vybrané publikace.
   *
   * Vrací:
   * - React komponenta: Vykreslené tlačítko "Přidat autora".
   */
  const publications = useSelector((state) => state.publications); //beru si array publikací
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);

 const handleAddAuthor = async () => { //OnClick funkce, volá mutaci
  try {
    console.log('Selected Publication ID:', selectedPublicationId.publicationId.publicationId.publicationId);
    console.log('Publications:', publications);
    //Vyberu si publikaci ve které právě sem pomocí ID co si posílám z nadřazené komponenty
    const selectedPublication = publications.find((publication) => publication.id === selectedPublicationId.publicationId.publicationId.publicationId);
    console.log("selectedPublication: ",selectedPublication);
    console.log("selectedPublicationId: ",selectedPublicationId);

    if (selectedPublication) { //Pokud ji najdu
      const NumberOfAuthors = selectedPublication.authors.length + 1; //Najdu npvé pořadí pro nového autora
      console.log('Author order: ', NumberOfAuthors);
      const response = await PublicationAddAuthorMutation( //volám samotnou mutaci s potřebnými proměnými
        { userId: selectedUserId, 
          publicationId: selectedPublication.id, 
          AuthorNumber: NumberOfAuthors}
        )
      const data = await response.json(); //získávám všechna data co mám
      console.log(data.data.authorInsert.author);
      //aktualizuji store, dochází tedy k přerendrování všech komponent kde se využívá pole publikací
      dispatch(InsertAuthor({ author: data.data.authorInsert.author, publicationId: selectedPublication.id }));
      console.log('Author added successfully!');
      setShowAlert(true);
    } else {
      console.log('Selected publication not found!');
      setShowAlert1(true);
    }
  } catch (error) {
    console.error('Error adding author:', error);
    setShowAlert1(true);
  }
};

const handleCloseAlert = () => {
  setShowAlert(false);
  setShowAlert1(false);
};
  //vracím čistý button
  return (
      <div>
      <button className="btn bg-success text-white mt-4 align-left" 
      onClick={handleAddAuthor}
      >Přidat</button>
      {showAlert && <AlertPositive info={"Autor přidán"} onClose={handleCloseAlert} />}
      {showAlert1 && <AlertNegative info={"Nepovedlo se přidat uživatele"} onClose={handleCloseAlert} />}
      </div>
  )
}