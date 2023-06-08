import { configureStore } from '@reduxjs/toolkit';
import publicationReducer from '../features/PublicationSlice';
import publicationTypeReducer from '../features/PublicationTypeSlice';

//store celých stránek 
export const store = configureStore({
  reducer: {
    publications: publicationReducer,
    publicationTypes: publicationTypeReducer,
  }
});