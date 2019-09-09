import React from 'react';
import { render } from 'react-dom';
import 'todomvc-app-css/index.css';
import { App } from './components/App';

render(
  <div>
    <App />
    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>Created by <a href="http://github.com/blacksonic/">blacksonic</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>,
  document.getElementById('root')
);
