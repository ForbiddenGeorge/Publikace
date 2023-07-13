import { PublicationUpdateMutation } from '/queries/PublicationUpdateMutation';


export const SaveEditedPublication = ({ pubId, pubLastChange, pubName, pubTypeId }) => {
  /**
 * Komponenta pro uložení upravené publikace.
 *
 * Parametry:
 * - pubId (string): ID publikace.
 * - pubLastChange (string): Poslední změna publikace.
 * - pubName (string): Název publikace.
 * - pubTypeId (string): ID typu publikace.
 */
    const handleEditEvent = async () => {
    try{
      console.log("ID: ", pubId);
      console.log("Name: ", pubName);
      console.log("LastChange: ", pubLastChange);
      console.log("TypeID: ", pubTypeId);
      await PublicationUpdateMutation({pubId:pubId, pubName:pubName/*, pubLastChange:pubLastChange*/, pubTypeId:pubTypeId});
      console.log("Mutace propběla");
      alert("Změna úspěšně proběhla");
    }
    catch (error) {
        console.error("Adding error", error);
    }
}
  return (
    <button className="btn btn-success" data-bs-dismiss="modal" onClick={handleEditEvent}>Save</button>
  )
}