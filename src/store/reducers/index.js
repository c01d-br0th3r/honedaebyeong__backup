import isOpen from "./isOpen";
import loginInfo from "./loginInfo";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ isOpen, loginInfo });

export default rootReducer;
