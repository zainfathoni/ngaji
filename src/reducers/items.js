import { combineReducers } from 'redux';
import item from './item';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
    case 'RENAME_ACTIVITY':
    case 'UPDATE_TARGET':
    case 'TOGGLE_ITEM':
      return {
        ...state,
        [action.id]: item(state[action.id], action)
      }
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.id
      ];
    default:
      return state;
  }
}

const items = combineReducers({
  byId,
  allIds
});

export default items;

const getAllItems = (state) =>
  state.allIds.map(id => state.byId[id]);

export const getVisibleItems = (
  state,
  filter
) => {
  const allItems = getAllItems(state);
  switch (filter) {
    case 'all':
      return allItems;
    case 'enabled':
      return allItems.filter(
        i => i.enabled
      );
    case 'disabled':
      return allItems.filter(
        i => !i.enabled
      );
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
}