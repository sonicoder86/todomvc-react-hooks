import React from 'react';
import { Header } from './Header';
import { List } from './List';
import { Footer } from './Footer';

export function App() {
  return (
    <section className="todoapp">
      <Header />
      <List />
      <Footer />
    </section>
  );
}
