//npm i @reduxjs/toolkit
//npm i react-redux

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    orderedData:[],
}

//createSlice function is used for slicing the data (getting the individual item value)

const DataReducer=createSlice({

    // the reducer's name is DataReducer
    name:'DataReducer',
    
    // in the initialState we have array orderedData(data to the orderedData array will be given by dispatch())
    initialState:initialState,
    
    //Under the reducer
    reducers:{
        
        //getData function is used to get the data from the state
        getData:(state,action)=>{ 

            //the unitPrice i.e. price of 1 quantity's value is stored here
            const unitPrice = action.payload.price / action.payload.quantity;

            //action.payload -> newly added item to the orderedData

            // Check if item with the same name already exists
            const existingItemIndex = state.orderedData.findIndex(item => item.name === action.payload.name);

            // If item doesn't exist, add it to orderedData
            if (existingItemIndex === -1) {
                state.orderedData = [...state.orderedData, { ...action.payload, unitPrice }];
            }
            
        },

        //filter method -> creates a new array, adds the data i.e. filters the data based on the condition. Here,
        //removes an item from the state based on the name property specified in the action.payload i.e. current item. 
        //It filters out the item with the matching name and updates the state with the new filtered array.
        remove_from_cart:(state,action)=>{

            state.orderedData=state.orderedData.filter(item=> item.name!==action.payload.name)
            // this checks both the name in the orderedData and current item name, 
            //if it doesn't match then the value will be added to the orderedData,
            //otherwise it will be excluded i.e. deleted from the orderedData
        },


        increment_function: (state, action) => {

            const itemIndex = state.orderedData.findIndex(item => item.name === action.payload.name);
            //finds the index of the current item based on the name
            
            if (itemIndex !== -1) {
                state.orderedData[itemIndex].quantity++; // Increment quantity
                state.orderedData[itemIndex].price=state.orderedData[itemIndex].unitPrice*state.orderedData[itemIndex].quantity //price=unitPrice*quantity unitPrice(price of a single quantity)
            }
        },
        
        decrement_function: (state, action) => {
            
            const itemIndex = state.orderedData.findIndex(item => item.name === action.payload.name);
            if (itemIndex !== -1 && state.orderedData[itemIndex].quantity > 1) {
                state.orderedData[itemIndex].quantity--; // Decrement quantity, ensuring it doesn't go below 1
                state.orderedData[itemIndex].price=state.orderedData[itemIndex].unitPrice*state.orderedData[itemIndex].quantity
            }
        }
    }
})

export const {getData,remove_from_cart,increment_function,decrement_function}=DataReducer.actions
export default DataReducer.reducer