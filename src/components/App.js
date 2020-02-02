import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TodoLocal } from '../services/TodoLocal';
import { withStateAndDispatch } from '../store/container';
import { HeaderContainer } from './Header';
import { ListContainer } from './List';
import { FooterContainer } from './Footer';
import { CopyRight } from './CopyRight';

export function App({ todos, onLoad }) {
  useEffect(() => {
    onLoad(TodoLocal.loadTodos());
  }, [onLoad]);

  useEffect(() => {
    TodoLocal.storeTodos(todos);
  }, [todos]);

  return (
    <div id="app">
      <section className="todoapp">
        <HeaderContainer />
        {
          !!todos.length &&
          <ListContainer />
        }
        {
          !!todos.length &&
          <FooterContainer />
        }
      </section>
      <CopyRight />
    </div>
  );
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  onLoad: PropTypes.func.isRequired
};

export const AppContainer = withStateAndDispatch(App);
