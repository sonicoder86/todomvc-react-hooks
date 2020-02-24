import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TodoLocal } from '../../services/todo-local';
import { withStateAndDispatch } from '../../store';
import { HeaderContainer } from '../header/header';
import { ListContainer } from '../list/list';
import { FooterContainer } from '../footer/footer';
import { CopyRight } from '../copy-right/copy-right';

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
