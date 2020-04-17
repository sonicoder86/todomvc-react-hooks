import { combineReducers, createStore as createReduxStore } from 'redux';
import { FILTERS } from '../constants/filter';

import { todosReducer } from './reducers/todo';
import { filterReducer } from './reducers/filter';

const reducers = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const defaultState = { todos: [], filter: FILTERS.all };
export const createStore = (state = defaultState) => createReduxStore(reducers, state, storeEnhancer);
