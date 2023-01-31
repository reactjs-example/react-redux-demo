import { createStore } from "redux";
import LAPTOP_REDUCER from "./laptopReducers";
const LAPTOP_STORE = createStore(LAPTOP_REDUCER);

export default LAPTOP_STORE;
