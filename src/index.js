import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root';

import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );
};

render();