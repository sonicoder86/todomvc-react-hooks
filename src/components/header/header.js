import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onCreate } from '../../store/actions/todo';
import classNames from 'classnames';

import { FILTERS } from '../../constants/filter';
import { onFilterSelect } from '../../store/actions/filter';

export function Header() {

const ENTER_KEY = 'Enter';

const filterTitles = [
  { key: FILTERS.all, value: 'All' },
  { key: FILTERS.active, value: 'Active' },
  { key: FILTERS.completed, value: 'Completed' }
];

  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => setName(event.target.value);
  const filter = useSelector(state => state.filter);
  const filterSelect = selectedFilter => dispatch(onFilterSelect(selectedFilter));
  

  const handleSubmit = event => {
    if (event.key !== ENTER_KEY) {
      return;
    }

    dispatch(onCreate(name));
    onCreate(name);
    setName('');
  };

  return (
    <header className="header">
      <h1>todos</h1>

      <ul className="filters">
        {filterTitles.map(filterTitle => (
          <li key={filterTitle.key}>
            <a
              href="./#"
              className={classNames({ selected: filterTitle.key === filter })}
              onClick={() => filterSelect(filterTitle.key)}
            >
              {filterTitle.value}
            </a>
          </li>
        ))}
      </ul>

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
