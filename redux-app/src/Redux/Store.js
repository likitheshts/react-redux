import { applyMiddleware, createStore } from "redux";
import RootReducers from "./RootReducers";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const store = createStore(RootReducers, applyMiddleware(thunk));

export default store;
