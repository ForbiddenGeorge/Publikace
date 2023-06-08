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
  },
});

export const { loadData, InsertAuthor } = publicationSlice.actions;

export default publicationSlice.reducer;