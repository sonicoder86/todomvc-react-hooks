import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Header } from './header';
import { createStore } from '../../store';

describe('Header', () => {
  it('should add new element to store', () => {
    const store = createStore();
    const { getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const input = getByTestId('todo-create');
    input.value = 'Demo';
    fireEvent.input(input);
    fireEvent.keyUp(input, { key: 'Enter' });

    const state = store.getState();
    expect(state.todos).toHaveLength(1);
    expect(state.todos[0].id).toBeString();
    expect(state.todos[0].name).toEqual('Demo');
    expect(state.todos[0].completed).toEqual(false);
  });
});
