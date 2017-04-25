import React from 'react';
import { Provider } from 'react-redux';
import Ngaji from './Ngaji';

const Root = ({ store }) => (
  <Provider store={store}>
    <Ngaji />
  </Provider>
);

export default Root;