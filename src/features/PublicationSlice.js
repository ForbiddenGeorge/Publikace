import { createSlice } from '@reduxjs/toolkit';

const publicationSlice = createSlice({
  name: 'publications',
  initialState: [],
  reducers: {
    loadData: (state, action) => {


      const publications = action.payload;
      publications.forEach((publication) => {
        const existingPublication = state.find((p) => p.id === publication.id);
        if (!existingPublication) {
          state.push(publication);
        }
      });
      console.log('I have been called');
      //return [...state, ...publications];
      
    },
  },
});

export const { loadData } = publicationSlice.actions;

export default publicationSlice.reducer;