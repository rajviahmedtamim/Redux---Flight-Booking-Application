import { ADDED, REMOVED } from "./actionTypes";

export const added = (flight) => {
  return {
    type: ADDED,
    payload: {
      from: flight.from,
      to: flight.to,
      date: flight.date,
      guests: flight.guests,
      class: flight.class,
    },
  };
};

export const removed = (flightID) => {
  return {
    type: REMOVED,
    payload: flightID,
  };
};
