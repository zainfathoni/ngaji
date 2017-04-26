import { v4 } from 'uuid';
import * as api from '../api';

const receiveItems = (
  filter,
  response
) => ({
  type: 'RECEIVE_ITEMS',
  filter,
  response
});

export const fetchItems = (filter) =>
  api.fetchItems(filter).then(response =>
    receiveItems(filter, response)
  );

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