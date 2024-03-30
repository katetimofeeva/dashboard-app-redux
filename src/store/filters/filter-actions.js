export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const REMOVE_ALL = "REMOVE_ALL";

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  filter,
});

export const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter,
});

export const removeAllFilters = {
  type: REMOVE_ALL,
};
