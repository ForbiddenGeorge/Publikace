import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the projects
export const publicationslice = createSlice({
    name: "publications",
    initialState: [],
    reducers: {
        // A reducer that adds a new project to the projects state array
      loadData: (state, action) => {
        const publications = action.payload
       /* state = [...state, ...publications]
        return state*/
        return [...state, ...publications];
        } , 
  },
})

// Export the addProject action creator from the projectsSlice
export const { loadData } = publicationslice.actions

// Export the projectsSlice reducer
export default publicationslice.reducer;