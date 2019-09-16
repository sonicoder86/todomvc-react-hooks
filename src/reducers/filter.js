import { ACTION_TYPES } from '../constants/ActionTypes';
import { FILTERS } from '../constants/Filters';

export const filterReducer = (state = FILTERS.all, action) => {
  switch (action.type) {
    case ACTION_TYPES.selectFilter:
      return action.filter;
    default:
      return state;
  }
};
