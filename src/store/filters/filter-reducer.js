import { ADD_FILTER, REMOVE_ALL, REMOVE_FILTER } from "./filter-actions";

export const filterReducer = (state = [], { type, filter }) => {
  switch (type) {
    case ADD_FILTER: {
      if (!state.includes(filter)) {
        return [...state, filter];
      }
      return state;
    }
    case REMOVE_ALL: {
      return [];
    }
    case REMOVE_FILTER: {
      return state.filter((el) => filter !== el);
    }
    default: {
      return state;
    }
  }
};
