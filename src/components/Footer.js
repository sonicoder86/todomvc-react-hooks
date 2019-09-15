import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FILTERS } from '../constants/Filters';
import { selectNotCompleted, selectCompleted } from '../selectors/Todo';

const FILTER_TITLES = {
  [FILTERS.all]: 'All',
  [FILTERS.active]: 'Active',
  [FILTERS.completed]: 'Completed'
};

export function Footer({ todos, filter, onFilterSelect, onClearCompleted }) {
  const itemsLeft = selectNotCompleted(todos).length;
  const completedCount = selectCompleted(todos).length;
  const itemText = itemsLeft === 1 ? 'item' : 'items';

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{itemsLeft}</strong><span> {itemText} left</span></span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filterKey =>
          <li key={filterKey}>
            <a
              href="#"
              className={classNames({ selected: filterKey === filter })}
              onClick={() => onFilterSelect(filterKey)}
            >
              {FILTER_TITLES[filterKey]}
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
    onClearCompleted: PropTypes.func.isRequired,
    onFilterSelect: PropTypes.func.isRequired
};
