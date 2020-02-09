import { storeFactory } from './factory';
import { onCreate } from './actions';

describe('storeFactory', () => {
  it('should create a new instance of store', () => {
    const store = storeFactory();

    const state = store.getState();
    expect(state.todos).toEqual([]);
    expect(state.filter).toEqual('all');
  });

  it('should add new todo', () => {
    const store = storeFactory();

    store.dispatch(onCreate('Demo'));

    const state = store.getState();
    expect(state.todos).toHaveLength(1);
    expect(state.todos[0].id).toBeString();
    expect(state.todos[0].name).toEqual('Demo');
    expect(state.todos[0].completed).toEqual(false);
  });
});
