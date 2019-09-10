import React, { Component } from 'react';
import { Header } from './Header';
import { List } from './List';
import { Footer } from './Footer';

export class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <Header />
        <List />
        <Footer />
      </section>
    );
  }
}
