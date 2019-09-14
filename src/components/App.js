import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { Header } from './Header';
import { List } from './List';
import { Footer } from './Footer';

export function App() {
  const [todos, setTodos] = useState([]);

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

  return (
    <section className="todoapp">
      <Header onSave={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
      <Footer />
    </section>
  );
}
