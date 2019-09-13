import React from 'react';
import { Header } from './Header';
import { List } from './List';
import { Footer } from './Footer';

export function App() {
  const onCreate = (name) => {
    console.log('new todo', name);
  };

  return (
    <section className="todoapp">
      <Header onSave={onCreate} />
      <List />
      <Footer />
    </section>
  );
}
