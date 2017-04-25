import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Ngaji from './components/Ngaji';
import ngaji from './reducers';

const render = () => {
  ReactDOM.render(
    <Provider store={createStore(ngaji)}>
      <Ngaji />
    </Provider>,
    document.getElementById('root')
  );
};

render();