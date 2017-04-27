import { v4 } from 'uuid';
import { getIsFetching } from "../reducers";
import * as api from '../api';

const requestItems = (filter) => ({
  type: 'REQUEST_ITEMS',
  filter
});

const receiveItems = (
  filter,
  response
) => ({
  type: 'RECEIVE_ITEMS',
  filter,
  response
});

export const fetchItems = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(requestItems(filter));

  return api.fetchItems(filter).then(response => {
    dispatch(receiveItems(filter, response))
  });
};

export const addItem = (
  activity,
  target,
  unit
) => ({
  type: 'ADD_ITEM',
  id: v4(),
  activity,
  target,
  unit
});

export const toggleItem = (
  id
) => ({
  type: 'TOGGLE_ITEM',
  id
});