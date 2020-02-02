import React from 'react';
import { render } from 'react-dom';
import 'todomvc-app-css/index.css';
import { Provider } from 'react-redux';
import { storeFactory } from './store/index';
import { AppContainer } from './components/App';

render(
  <Provider store={storeFactory()}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
