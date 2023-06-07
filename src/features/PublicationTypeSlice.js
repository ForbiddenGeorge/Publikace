import { createSlice } from '@reduxjs/toolkit';

const publicationTypeSlice = createSlice({
  name: 'publicationTypes',
  initialState: [],
  reducers: {
    loadData: (state, action) => {


      const publicationsTypes = action.payload;
      publicationsTypes.forEach((publicationType) => {
          state.push(publicationType);
      });
        
      //console.log('I have been called');
      //return [...state, ...publications];
      
    },
  },
});

export const { loadData } = publicationTypeSlice.actions;

export default publicationTypeSlice.reducer;