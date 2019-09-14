import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Item({ todo, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCompleted = () => {
    onUpdate(
      todo.id,
      { completed: !todo.completed }
    );
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const { name, completed } = todo;

  return (
    <li className={classNames({ completed })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleCompleted}
        />
        <label onDoubleClick={handleEdit}>{name}</label>
        <button
          className="destroy"
          onClick={handleDelete}
        />
      </div>
    </li>
  );
}

Item.propTypes = {
  todo: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
