import { createSlice } from '@reduxjs/toolkit';

//Slicer pro typy publikací
const publicationTypeSlice = createSlice({
  name: 'publicationTypes',
  initialState: [],
  reducers: {
    loadData: (state, action) => {
      const publicationTypes = action.payload;
      publicationTypes.forEach(type => {
        const existingType = state.find(p => p.id === type.id);
        if (!existingType) {
          state.push(type);
        }
      });
    }
  }
});
export const {
  loadData
} = publicationTypeSlice.actions;
export default publicationTypeSlice.reducer;