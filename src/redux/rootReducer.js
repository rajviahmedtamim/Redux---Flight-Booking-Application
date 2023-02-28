import { combineReducers } from "redux";
import flightReducer from "./flights/reducer";

const rootReducer = combineReducers({
  flights: flightReducer,
});

export default rootReducer;
