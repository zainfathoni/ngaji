import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Ngaji from './Ngaji';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path='/:filter?' component={Ngaji} />
      </div>
    </Router>
  </Provider>
);

export default Root;