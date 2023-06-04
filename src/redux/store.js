import { configureStore } from '@reduxjs/toolkit';
import publicationReducer from '../features/PublicationSlice';
//import msgReducer from '../features/MsgSlice'


export const store = configureStore({
    reducer: {
        publications: publicationReducer,
        //msg: msgReducer
    }
})