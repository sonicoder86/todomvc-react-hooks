import React from 'react';

export function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" value="" />
    </header>
  );
}
