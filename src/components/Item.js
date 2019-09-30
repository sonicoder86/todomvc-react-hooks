import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Item({ todo, onUpdate, onRemove }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(todo.name);

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
    onRemove(todo.id);
  };

  const handleChange = event => setName(event.target.value);

  const handleBlur = () => {
    onUpdate(
      todo.id,
      { name }
    );
    setEditing(false);
  };

  const { completed } = todo;

  return (
    <li className={classNames({ completed, editing })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleCompleted}
        />
        <label onDoubleClick={handleEdit}>{todo.name}</label>
        <button
          className="destroy"
          onClick={handleDelete}
        />
      </div>
      {
        editing &&
        <input
          className="edit"
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus={true}
        />
      }
    </li>
  );
}

Item.propTypes = {
  todo: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
