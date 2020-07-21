import { FETCH_JOBS } from "../actions/types";

const INITIAL_STATE = {
  results: []
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return action.payload; // return only the current result set.
    default:
      return state;
  }
}
