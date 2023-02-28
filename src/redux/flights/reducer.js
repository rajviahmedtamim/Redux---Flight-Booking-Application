import { ADDED, REMOVED } from "./actionTypes";
import initialState from "./initialState";

const flightID = (flights) => {
  const maxID = flights.reduce(
    (maxID, flight) => Math.max(flight.id, maxID),
    -1
  );

  return maxID + 1;
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: flightID(state),
          from: action.payload.from,
          to: action.payload.to,
          date: action.payload.date,
          guests: action.payload.guests,
          class: action.payload.class,
        },
      ];

    case REMOVED:
      return state.filter((flight) => flight.id !== action.payload);

    default:
      return state;
  }
};

export default flightReducer;
