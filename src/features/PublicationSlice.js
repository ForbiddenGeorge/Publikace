import { createSlice } from '@reduxjs/toolkit';

//Slicer pro publikace
const publicationSlice = createSlice({
  name: 'publications',
  initialState: [],
  reducers: {
    //načtení dat
    loadData: (state, action) => {
      const publications = action.payload;
      publications.forEach((publication) => {
        const existingPublication = state.find((p) => p.id === publication.id);
        if (!existingPublication) {
          state.push(publication);
        }
      });
    },
    //Vložení nového autora který trigruje automaticky přerendrování
    InsertAuthor: (state, action) => {
      const { author, publicationId } = action.payload;
      const updatedState = state.map((publication) => {
        if (publication.id === publicationId) {
          return {
            ...publication,
            authors: [...publication.authors, author],
          };
        }
        return publication;
      });
      return updatedState;
    },
    
    UpdateAuthorOrder: (state, action) => {
      const { publicationId, authorId, newOrder } = action.payload;
      const publication = state.find((p) => p.id === publicationId);
      if (publication) {
        const updatedAuthors = publication.authors.map((author) =>
          author.id === authorId ? { ...author, order: newOrder } : author
        );
        return state.map((p) =>
          p.id === publicationId ? { ...p, authors: updatedAuthors } : p
        );
      }
      return state;
    },
    UpdateAuthorShare: (state, action) => {
      const { publicationId, authorId, newShare } = action.payload;
      const publication = state.find((p) => p.id === publicationId);
      if (publication) {
        const updatedAuthors = publication.authors.map((author) =>
          author.id === authorId ? { ...author, share: newShare } : author
        );
        return state.map((p) =>
          p.id === publicationId ? { ...p, authors: updatedAuthors } : p
        );
      }
      return state;
    },

    InsertPublication: (state, action) => {
      const newPublication = action.payload.selectedPublication;
      //const publications = action.payload.publications;
    
      const existingPublication = state.find((publication) => publication.id === newPublication.id);
      if (!existingPublication) {
        state.push(newPublication);
      } else {
        console.log("There was a problem pushing the new publication..");
      }
    },
  },
});

export const { loadData, InsertAuthor, InsertPublication, UpdateAuthorOrder, UpdateAuthorShare } = publicationSlice.actions;

export default publicationSlice.reducer;