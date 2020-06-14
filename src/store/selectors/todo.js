import { FILTERS } from '../../constants/filter';

export function selectCompleted(todos) {
  return todos.filter(todo => todo.completed);
}

export function selectNotCompleted(todos) {
  return todos.filter(todo => !todo.completed);
}

export function selectVisible(todos, filter) {
  switch (filter) {
    case FILTERS.filter:
      return [...todos];
    case FILTERS.completed:
      return selectCompleted(todos);
    case FILTERS.active:
      return selectNotCompleted(todos);
    default:
      return [...todos];
  }
}
