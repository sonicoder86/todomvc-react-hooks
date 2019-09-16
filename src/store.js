import { rootReducer } from './reducers';
import { createStore } from 'redux';
import { FILTERS } from './constants/Filters';

export const storeFactory = () => createStore(
  rootReducer,
  { todos: [], filter: FILTERS.all },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
