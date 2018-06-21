import { combineReducers } from "redux";
import loginUserReducer, { userState } from "./loginUserReducer";
import registerUserReducer, { registerUserState } from "./registerUserReducer";

export const initialState = {  
    userState: userState,
    registerUserState:registerUserState
};
  
export default combineReducers( { 
    loginUserReducer,
    registerUserReducer
} );
  
