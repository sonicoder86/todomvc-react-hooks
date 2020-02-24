import React from 'react';
import { render } from 'react-dom';
import 'todomvc-app-css/index.css';
import { Provider } from 'react-redux';
import { createStore } from './store';
import { AppContainer } from './components/app/app';

render(
  <Provider store={createStore()}>
    <AppContainer />
  </Provider>,
  document.getElementsByTagName('app-root')[0]
);
