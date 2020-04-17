import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../item/item';
import { selectVisible } from '../../store/selectors/todo';
import { onUpdate, onRemove, onCompleteAll } from '../../store/actions/todo';

export function List() {
  const dispatch = useDispatch();
  const visibleTodos = useSelector(state => selectVisible(state.todos, state.filter));
  const areAllCompleted = useSelector(state => state.todos.length && state.todos.every(todo => todo.completed));
  const completeAll = () => dispatch(onCompleteAll());
  const update = values => dispatch(onUpdate(values));
  const remove = id => dispatch(onRemove(id));

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={areAllCompleted} readOnly />
      <label htmlFor="toggle-all" onClick={completeAll} />

      <ul className="todo-list">
        {visibleTodos.map(todo => (
          <Item key={todo.id} todo={todo} onUpdate={update} onRemove={remove} />
        ))}
      </ul>
    </section>
  );
}
