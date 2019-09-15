import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item';

export function List({ todos, onUpdate, onDelete, onCompleteAll }) {
  const areAllCompleted = todos.length && todos.every(todo => todo.completed);

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={areAllCompleted} readOnly />
      <label htmlFor="toggle-all" onClick={onCompleteAll}></label>

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
  onDelete: PropTypes.func.isRequired,
  onCompleteAll: PropTypes.func.isRequired
};
