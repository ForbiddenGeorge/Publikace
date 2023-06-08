import { configureStore } from '@reduxjs/toolkit';
import publicationReducer from '../features/PublicationSlice';
import publicationTypeReducer from '../features/PublicationTypeSlice';

export const store = configureStore({
  reducer: {
    publications: publicationReducer,
    publicationTypes: publicationTypeReducer,
  }
});