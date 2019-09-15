import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import { Header } from './Header';
import { List } from './List';
import { Footer } from './Footer';
import { FILTERS } from '../constants/Filters';
import { TodoLocal } from '../services/TodoLocal';
import { selectCompleted, selectNotCompleted, selectVisible } from '../selectors/Todo';

export function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(FILTERS.all);

  useEffect(() => {
    setTodos(TodoLocal.loadTodos());
  }, []);

  useEffect(() => {
    TodoLocal.storeTodos(todos);
  }, [todos]);

  const onCreate = name => {
    const newTodo = { id: uuid(), name, completed: false };

    setTodos([...todos, newTodo]);
  };

  const onUpdate = (id, values) => {
    setTodos(todos.map(
      todo => todo.id === id ? { ...todo, ...values } : todo
    ));
  };

  const onDelete = id => {
    setTodos(todos.filter(
      todo => todo.id !== id
    ));
  };

  const onCompleteAll = () => {
    const areAllCompleted = todos.length && selectCompleted(todos).length === todos.length;

    setTodos(todos.map(
      todo => ({ ...todo, ...{ completed: !areAllCompleted } })
    ));
  };

  const onClearCompleted = () => {
    setTodos(selectNotCompleted(todos));
  };

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  return (
    <section className="todoapp">
      <Header
        onSave={onCreate}
      />
      {
        !!todos.length &&
        <List
          todos={selectVisible(todos, filter)}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onCompleteAll={onCompleteAll}
        />
      }
      {
        !!todos.length &&
        <Footer
          todos={todos}
          filter={filter}
          onClearCompleted={onClearCompleted}
          onFilterSelect={onFilterSelect}
        />
      }
    </section>
  );
}
