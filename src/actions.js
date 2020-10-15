import * as actions from "./actionTypes";

export const updateFilter = (term) => ({
  type: actions.UPDATE_FILTER,
  payload: {
    term,
  },
});
