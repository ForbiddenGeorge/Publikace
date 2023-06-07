import {useSelector} from "react-redux";
import { PublicationAddAuthorMutation } from 'querries/PublicationAddAuthorMutation';
//import { useState } from "react";

export const AddAuthorButton= ({selectedUserId, selectedPublicationId}) => {

  const publications = useSelector((state) => state.publications);

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
      await PublicationAddAuthorMutation(
        { userId: selectedUserId, 
          publicationId: selectedPublication.id, 
          AuthorNumber: NumberOfAuthors}
        );
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