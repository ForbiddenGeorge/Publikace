import { createSlice } from '@reduxjs/toolkit';

//Slicer pro typy publikací
const publicationTypeSlice = createSlice({
  /**
   * Slicer pro typy publikací.
   *
   * Vlastnosti:
   * - name (str): Název sliceru.
   * - initialState (array): Výchozí stav sliceru (prázdné pole).
   * - reducers (objekt): Reducery sliceru.
   */
  name: 'publicationTypes',
  initialState: [],
  reducers: {
    loadData: (state, action) => {
      /**
       * Reducer pro načtení dat.
       *
       * Parametry:
       * - state (array): Stav sliceru.
       * - action: Akce reduktoru obsahující payload s načtenými daty.
       */
      const publicationTypes = action.payload;
      publicationTypes.forEach((type) => {
        const existingType = state.find((p) => p.id === type.id);
        if (!existingType) {
          state.push(type);
        }
      });
        
    },
  },
});

export const { loadData } = publicationTypeSlice.actions;

export default publicationTypeSlice.reducer;