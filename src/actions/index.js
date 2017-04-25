import { v4 } from 'node-uuid';

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

export const setVisibilityFilter = (
  filter
) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})