import React from 'react';

export function List() {
  return (
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
  );
}
