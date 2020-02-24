import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FILTERS } from '../../constants/filter';
import { withStateAndDispatch } from '../../store';

export function Footer({ todos, filter, itemsLeft, completedCount, onFilterSelect, onClearCompleted }) {
  const filterTitles = [
    { key: FILTERS.all, value: 'All' },
    { key: FILTERS.active, value: 'Active' },
    { key: FILTERS.completed, value: 'Completed' }
  ];

  const itemText = itemsLeft === 1 ? 'item' : 'items';

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{itemsLeft}</strong><span> {itemText} left</span></span>
      <ul className="filters">
        {filterTitles.map(filterTitle =>
          <li key={filterTitle.key}>
            <a
              href="#"
              className={classNames({ selected: filterTitle.key === filter })}
              onClick={() => onFilterSelect(filterTitle.key)}
            >
              {filterTitle.value}
            </a>
          </li>
        )}
      </ul>
      {
        !!completedCount &&
        <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>
      }
    </footer>
  );
}

Footer.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  itemsLeft: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onFilterSelect: PropTypes.func.isRequired
};

export const FooterContainer = withStateAndDispatch(Footer);
