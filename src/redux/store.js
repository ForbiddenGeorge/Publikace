import { configureStore } from '@reduxjs/toolkit';
import publicationReducer from '../features/PublicationSlice';
import publicationTypeReducer from '../features/PublicationTypeSlice';

export const store = configureStore({
  /**
   * Redux store konfigurace pro celou aplikaci.
   *
   * Reducery:
   * - publications: Reducer pro publikace.
   * - publicationTypes: Reducer pro typy publikací.
   *
   * Vrací:
   * - Redux store: Konfigurovaný Redux store pro celou aplikaci.
   */
  reducer: {
    publications: publicationReducer,
    publicationTypes: publicationTypeReducer,
  }
});