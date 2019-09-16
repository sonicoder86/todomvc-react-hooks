import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TodoLocal } from '../services/TodoLocal';
import { selectVisible } from '../selectors/Todo';
import { ListContainer, FooterContainer, HeaderContainer } from '../containers';

export function App({ todos, filter, onLoad }) {
  useEffect(() => {
    onLoad(TodoLocal.loadTodos());
  }, [onLoad]);

  useEffect(() => {
    TodoLocal.storeTodos(todos);
  }, [todos]);

  return (
    <section className="todoapp">
      <HeaderContainer />
      {
        !!todos.length &&
        <ListContainer todos={selectVisible(todos, filter)} />
      }
      {
        !!todos.length &&
        <FooterContainer todos={todos} filter={filter} />
      }
    </section>
  );
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired
};
