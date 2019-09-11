import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>1</strong><span> </span><span>item</span><span> left</span></span>
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
  );
}
