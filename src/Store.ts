import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export type RootStore = ReturnType<typeof RootReducer>;

export default createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
