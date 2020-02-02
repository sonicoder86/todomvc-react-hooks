import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FILTERS } from '../constants/Filters';
import { withStateAndDispatch } from '../store/container';

export function Footer({ todos, filter, itemsLeft, completedCount, onFilterSelect, onClearCompleted }) {
  const filterTitles = {
    [FILTERS.all]: 'All',
    [FILTERS.active]: 'Active',
    [FILTERS.completed]: 'Completed'
  };

  const itemText = itemsLeft === 1 ? 'item' : 'items';

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{itemsLeft}</strong><span> {itemText} left</span></span>
      <ul className="filters">
        {Object.keys(filterTitles).map(filterKey =>
          <li key={filterKey}>
            <a
              href="#"
              className={classNames({ selected: filterKey === filter })}
              onClick={() => onFilterSelect(filterKey)}
            >
              {filterTitles[filterKey]}
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
