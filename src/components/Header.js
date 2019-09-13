import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ENTER_KEY = 13;

export function Header({ onSave }) {
  const [name, setName] = useState('');

  const handleChange = event => setName(event.target.value);

  const handleSubmit = event => {
    if (event.which === ENTER_KEY) {
      onSave(name);
      setName('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={name}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    </header>
  );
}

Header.propTypes = {
  onSave: PropTypes.func.isRequired
};
