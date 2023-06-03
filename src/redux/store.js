import { configureStore } from '@reduxjs/toolkit'
import surveyReducer from '../features/PublicationSlice'
//import msgReducer from '../features/MsgSlice'


export const store = configureStore({
    reducer: {
       publications : surveyReducer,
        //msg: msgReducer
    }
})