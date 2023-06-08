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
      //console.log('I have been called');
      //return [...state, ...publications];
      
    },

    InsertAuthor: (state, action) => {
      const newAuthor = action.payload.author;
      const publikace = action.payload.publication
      console.log("InsertAuthor action", newAuthor);
      console.log("InsertAuthor publication", publikace);
        publikace.authors.push(newAuthor);
      
        
      }
    

    
  },
});

export const { loadData, InsertAuthor } = publicationSlice.actions;

export default publicationSlice.reducer;