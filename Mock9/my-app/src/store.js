import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { reducer } from "./Redux/AppReducer/reducer";

const rootReducer = combineReducers({
  reducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export { store };
