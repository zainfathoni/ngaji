import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Ngaji from './components/Ngaji';
import ngaji from './reducers';

const store = createStore(ngaji);
const render = () => {
  ReactDOM.render(
    <Ngaji
      store={store}
      {...store.getState()}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
