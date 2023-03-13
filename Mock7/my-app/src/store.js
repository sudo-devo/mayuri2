import { reducer as AuthEducer } from "./Redux/reducer";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

const rootReducer = combineReducers({ AuthEducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
