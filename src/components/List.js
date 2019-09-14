import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item';

export function List({ todos, onUpdate, onDelete }) {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" ></label>

      <ul className="todo-list">
        {todos.map(todo =>
          <Item
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        )}
      </ul>
    </section>
  );
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
