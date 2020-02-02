import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item';
import { withStateAndDispatch } from '../store/container';

export function List({ visibleTodos, areAllCompleted, onUpdate, onRemove, onCompleteAll }) {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={areAllCompleted} readOnly />
      <label htmlFor="toggle-all" onClick={onCompleteAll}></label>

      <ul className="todo-list">
        {visibleTodos.map(todo =>
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
  visibleTodos: PropTypes.array.isRequired,
  areAllCompleted: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onCompleteAll: PropTypes.func.isRequired
};

export const ListContainer = withStateAndDispatch(List);
