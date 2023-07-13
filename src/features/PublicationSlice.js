import { createSlice } from '@reduxjs/toolkit';

//Slicer pro publikace
const publicationSlice = createSlice({
   /**
   * Slicer pro publikace.
   *
   * Vlastnosti:
   * - name (str): Název sliceru.
   * - initialState (array): Výchozí stav sliceru (prázdné pole).
   * - reducers (objekt): Reducery sliceru.
   */
  name: 'publications',
  initialState: [],
  reducers: {
    //načtení dat
    loadData: (state, action) => {
       /**
       * Reducer pro načtení dat.
       *
       * Parametry:
       * - state (array): Stav sliceru.
       * - action: Akce reduktoru obsahující payload s načtenými daty.
       */
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
      /**
       * Reducer pro vložení nového autora, který triggeruje automatické přerendrování.
       *
       * Parametry:
       * - state (array): Stav sliceru.
       * - action: Akce reduktoru obsahující payload s novým autorem a ID publikace.
       *
       * Vrací:
       * - array: Aktualizovaný stav sliceru s vloženým novým autorem.
       */
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
    
    UpdateAuthorOrder: (state, action) => {
      /**
       * Reducer pro aktualizaci pořadí autora.
       *
       * Parametry:
       * - state (array): Stav sliceru.
       * - action: Akce reduktoru obsahující payload s ID publikace, ID autora a novým pořadím.
       *
       * Vrací:
       * - array: Aktualizovaný stav sliceru s aktualizovaným pořadím autora.
       */
      const { publicationId, authorId, newOrder } = action.payload;
      const publication = state.find((p) => p.id === publicationId);
      if (publication) {
        const updatedAuthors = publication.authors.map((author) =>
          author.id === authorId ? { ...author, order: newOrder } : author
        );
        return state.map((p) =>
          p.id === publicationId ? { ...p, authors: updatedAuthors } : p
        );
      }
      return state;
    },
    UpdateAuthorShare: (state, action) => {
      /**
       * Reducer pro aktualizaci podílu autora.
       *
       * Parametry:
       * - state (array): Stav sliceru.
       * - action: Akce reduktoru obsahující payload s ID publikace, ID autora a novým podílem.
       *
       * Vrací:
       * - array: Aktualizovaný stav sliceru s aktualizovaným podílem autora.
       */
      const { publicationId, authorId, newShare } = action.payload;
      const publication = state.find((p) => p.id === publicationId);
      if (publication) {
        const updatedAuthors = publication.authors.map((author) =>
          author.id === authorId ? { ...author, share: newShare } : author
        );
        return state.map((p) =>
          p.id === publicationId ? { ...p, authors: updatedAuthors } : p
        );
      }
      return state;
    },

    InsertPublication: (state, action) => {
      /**
       * Reducer pro vložení nové publikace.
       *
       * Parametry:
       * - state (array): Stav sliceru.
       * - action: Akce reduktoru obsahující payload s vybranou publikací.
       *
       * Vrací:
       * - array: Aktualizovaný stav sliceru s vloženou novou publikací.
       */
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

export const { loadData, InsertAuthor, InsertPublication, UpdateAuthorOrder, UpdateAuthorShare } = publicationSlice.actions;

export default publicationSlice.reducer;