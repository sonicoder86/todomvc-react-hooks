import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStateAndDispatch } from '../../store';
const ENTER_KEY = 'Enter';

export function Header({ onCreate }) {
  const [name, setName] = useState('');

  const handleChange = event => setName(event.target.value);

  const handleSubmit = event => {
    if (event.key !== ENTER_KEY) {
      return;
    }

    onCreate(name);
    setName('');
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={name}
        onInput={handleChange}
        onKeyUp={handleSubmit}
        onChange={() => {}}
        data-testid="todo-create"
      />
    </header>
  );
}

Header.propTypes = {
  onCreate: PropTypes.func.isRequired
};

export const HeaderContainer = withStateAndDispatch(Header);
