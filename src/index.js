import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Ngaji from './components/Ngaji';
import ngaji from './reducers';

const persistedState = {
  items: [
    {
      id: 0,
      activity: 'Tilawah',
      target: 1,
      unit: 'Juz',
      enabled: false
    },
    {
      id: 1,
      activity: 'Shalat Dhuha',
      target: 4,
      unit: "Raka'at",
      enabled: true
    }
  ]
}

const store = createStore(ngaji, persistedState);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Ngaji />
    </Provider>,
    document.getElementById('root')
  );
};

render();