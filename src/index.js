import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Ngaji from './components/Ngaji';
import ngaji from './reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const store = createStore(ngaji, persistedState);

store.subscribe(
  throttle(() => {
    saveState({
      items: store.getState().items
    })
  }, 1000)
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Ngaji />
    </Provider>,
    document.getElementById('root')
  );
};

render();