import {useSelector} from "react-redux";
import { PublicationAddAuthorMutation } from 'querries/PublicationAddAuthorMutation';
//import { useState } from "react";
import { useDispatch } from "react-redux";
import {InsertAuthor} from 'features/PublicationSlice';

export const AddAuthorButton= ({selectedUserId, selectedPublicationId}) => {

  const publications = useSelector((state) => state.publications);
const dispatch = useDispatch();

 const handleAddAuthor = async () => {
  try {
    console.log('Selected Publication ID:', selectedPublicationId.publicationId.publicationId.publicationId);
    console.log('Publications:', publications);
    const selectedPublication = publications.find((publication) => publication.id === selectedPublicationId.publicationId.publicationId.publicationId);
    console.log("selectedPublication: ",selectedPublication);
    console.log("selectedPublicationId: ",selectedPublicationId);

    if (selectedPublication) {
      const NumberOfAuthors = selectedPublication.authors.length + 1;
      console.log('Author order: ', NumberOfAuthors);
      const response = await PublicationAddAuthorMutation(
        { userId: selectedUserId, 
          publicationId: selectedPublication.id, 
          AuthorNumber: NumberOfAuthors}
        )
      const data = await response.json();
      console.log(data.data.authorInsert.author);
      dispatch(InsertAuthor({ author: data.data.authorInsert.author, publication: selectedPublication }));
      console.log('Author added successfully!');
    } else {
      console.log('Selected publication not found!');
    }
  } catch (error) {
    console.error('Error adding author:', error);
  }
};

  return (
  
      <button className="btn bg-success text-white mt-4 align-left" 
      onClick={handleAddAuthor}
      >Přidat</button>
  )
}