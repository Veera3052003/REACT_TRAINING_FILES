import Reducer from "./Reducer";
import { combineReducers } from "@reduxjs/toolkit";
import {legacy_createStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
  DataReducer:Reducer
});

const store=legacy_createStore(rootReducer);

export default store;
