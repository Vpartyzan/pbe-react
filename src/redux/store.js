import { combineReducers, createStore } from "redux";
import initialStoreData from "../data/dataStore";
import stateReducer from "./stateRedux";

// define initial state and shallow-merge initial data
const initialState = {
  state: initialStoreData.state,
  textContent: initialStoreData.textContent,
  imageContent: initialStoreData.imageContent,
};

// define reducers
const reducers = {
  state: stateReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] == "undefined") {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
