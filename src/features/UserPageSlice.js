//Budu dělat veřejně přístupnou, takže nebudu zatím komentovat
import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
      loadUsersData: (state, action) => {
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