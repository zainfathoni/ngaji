import { v4 } from 'uuid';

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