import { combineReducers, createStore as createReduxStore } from 'redux';
import { FILTERS } from '../constants/filter';

import { todosReducer } from './reducers/todo';
import { filterReducer } from './reducers/filter';

const reducers = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

export const createStore = (state = { todos: [], filter: FILTERS.all }) => createReduxStore(
  reducers, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
