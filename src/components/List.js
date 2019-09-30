import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item';

export function List({ todos, onUpdate, onRemove, onCompleteAll }) {
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
            onRemove={onRemove}
          />
        )}
      </ul>
    </section>
  );
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onCompleteAll: PropTypes.func.isRequired
};
