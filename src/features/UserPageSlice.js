//Budu dělat veřejně přístupnou, takže nebudu zatím komentovat
import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
      loadData: (state, action) => {
        const users = action.payload
        state = [...state, ...users]
        return state
        } , 
  },
})

// Export the addProject action creator from the projectsSlice
export const { loadData } = userslice.actions

// Export the projectsSlice reducer
export default userslice.reducer