import { PublicationUpdateMutation } from '/queries/PublicationUpdateMutation';


export const SaveEditedPublication = ({ pubId, pubLastChange, pubName, pubTypeId }) => {

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