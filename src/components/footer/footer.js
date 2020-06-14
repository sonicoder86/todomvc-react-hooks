import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisible } from '../../store/selectors/todo';
import { onFilterSelect } from '../../store/actions/filter';


export function Footer() {
  
  const selectedFilter = useSelector(selectedFilter => onFilterSelect(selectedFilter.filter).filter);
  const itemsLeft = useSelector(state => selectVisible(state.todos, selectedFilter ).length);
  const itemText = itemsLeft === 1 ? 'item' : 'items';

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong>
        <span> {itemText}</span>
      </span>
      
      
    </footer>
  );
}
