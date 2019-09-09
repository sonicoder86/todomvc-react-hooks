import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <section className="todoapp">

        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" value="" />
        </header>

        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all" ></label>

          <ul className="todo-list">
            <li className="">
              <div className="view">
                <input className="toggle" type="checkbox" checked=""/>
                <label>first</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="first" />
            </li>

            <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" checked="" />
                <label>last</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="last" />
            </li>
          </ul>
        </section>

        <footer className="footer">
        <span className="todo-count" data-reactid=".0.2.0">
          <strong>1</strong><span> </span><span>item</span><span> left</span></span>
          <ul className="filters">
            <li>
              <a href="#/" className="selected">All</a>
            </li>
            <span> </span>
            <li>
              <a href="#/active" className="">Active</a>
            </li>
            <span> </span>
            <li>
              <a href="#/completed" className="">Completed</a>
            </li>
          </ul>
          <button className="clear-completed">Clear completed</button>
        </footer>

      </section>
    );
  }
}
