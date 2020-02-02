import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { filterReducer } from './filter';

export const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});
