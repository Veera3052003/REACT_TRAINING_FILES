import { createSlice } from "@reduxjs/toolkit";

const initialState={
    orderedData:[]
}

const DataReducer=createSlice({
    name:"DataReducer",
    initialState:initialState,
    reducers:{
        getData:(state,action)=>{
            console.log(action)
            state.orderedData=[...state.orderedData,action.payload]
            return state
        }
    }
})

export const {getData}=DataReducer.actions
export default DataReducer.reducer