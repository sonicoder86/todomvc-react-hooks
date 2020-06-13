import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCompleted, selectNotCompleted } from '../../store/selectors/todo';
import { onClearCompleted } from '../../store/actions/todo';

export function Footer() {
  
  const dispatch = useDispatch();
  const completedCount = useSelector(state => selectCompleted(state.todos).length);
  const itemsLeft = useSelector(state => selectNotCompleted(state.todos).length);
  const clearCompleted = () => dispatch(onClearCompleted());

  const itemText = itemsLeft === 1 ? 'item' : 'items';

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong>
        <span> {itemText} left</span>
      </span>
      
      {!!completedCount && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
