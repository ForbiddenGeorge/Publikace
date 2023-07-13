//Budu dělat veřejně přístupnou, takže nebudu zatím komentovat
import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
  /**
   * Slicer pro uživatele.
   *
   * Vlastnosti:
   * - name (str): Název sliceru.
   * - initialState (array): Výchozí stav sliceru (prázdné pole).
   * - reducers (objekt): Reducery sliceru.
   */
    name: "users",
    initialState: [],
    reducers: {
      loadUsersData: (state, action) => {
        /**
       * Reducer pro načtení dat uživatelů.
       *
       * Parametry:
       * - state (array): Stav sliceru.
       * - action: Akce reduktoru obsahující payload s načtenými daty uživatelů.
       */
        const users = action.payload
        users.forEach(user => {
          const existingUser = state.find((p) => p.id ===user.id);
          if(!existingUser){
            state.push(user);
          } 
        });
        /*
        state = [...state, ...users]
        return state*/
        } , 
  },
})

// Export the addProject action creator from the projectsSlice
export const { loadUsersData } = userslice.actions

// Export the projectsSlice reducer
export default userslice.reducer