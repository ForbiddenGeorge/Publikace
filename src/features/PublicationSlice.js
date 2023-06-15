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
    
    //nedělat vector , dictionary lepší
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

export const { loadData, InsertAuthor, InsertPublication } = publicationSlice.actions;

export default publicationSlice.reducer;