import { v4 } from 'uuid';

export const receiveItems = (
  filter,
  response
) => ({
  type: 'RECEIVE_ITEMS',
  filter,
  response
})

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