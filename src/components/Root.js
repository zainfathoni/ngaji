import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Ngaji from './Ngaji';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path='/' component={Ngaji} />
    </Router>
  </Provider>
);

export default Root;