import React from 'react';
import ReactDOM from 'react-dom';
import Ngaji from './components/Ngaji';
import ngaji from './reducers';

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

const store = createStore(ngaji);
const render = () => {
  ReactDOM.render(
    <Ngaji
      store={store}
      items={store.getState().items}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
