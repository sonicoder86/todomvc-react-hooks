import { rootReducer } from './reducers/index';
import { createStore } from 'redux';
import { FILTERS } from '../constants/Filters';

export const storeFactory = (state = { todos: [], filter: FILTERS.all }) => createStore(
  rootReducer, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
