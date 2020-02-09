import { rootReducer } from './index';
import { FILTERS } from '../../constants/Filters';
import { onCreate, onLoad, onRemove, onUpdate } from '../actions';

describe('todosMutations', () => {
  it('should set list of items on load', () => {
    const state = { todos: [], filter: FILTERS.all };
    const todos = [{ id: 'e2bb892a', name: 'Demo', completed: false }];

    const newState = rootReducer(state, onLoad(todos));

    expect(newState.todos).toEqual(todos);
    expect(newState.todos).toHaveLength(1);
    expect(newState.todos).toContain(todos[0]);
  });

  it('should create new todo', () => {
    const state = { todos: [] };

    const newState = rootReducer(state, onCreate('Demo'));

    expect(newState.todos).toHaveLength(1);
    expect(newState.todos[0].id).toBeString();
    expect(newState.todos[0].name).toEqual('Demo');
    expect(newState.todos[0].completed).toEqual(false);
  });

  it('should update existing todo', () => {
    const state = { todos: [{ id: 'e2bb892a', name: 'Demo', completed: false }] };

    const newState = rootReducer(state, onUpdate({ id: 'e2bb892a', name: 'Demo2' }));

    expect(newState.todos[0].name).toEqual('Demo2');
  });

  it('should remove existing todo', () => {
    const state = { todos: [{ id: 'e2bb892a', name: 'Demo', completed: false }] };

    const newState = rootReducer(state, onRemove('e2bb892a'));

    expect(newState.todos).toHaveLength(0);
  });
});
