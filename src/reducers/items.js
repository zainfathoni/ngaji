import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      const nextState = { ...state };
      action.response.forEach(item => {
        nextState[item.id] = item;
      });
      return nextState;
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  if (action.filter !== 'all') {
    return state;
  }
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      return action.response.map(item => item.id);
    default:
      return state;
  }
};

const enabledIds = (state = [], action) => {
  if (action.filter !== 'enabled') {
    return state;
  }switch (action.type) {
    case 'RECEIVE_ITEMS':
      return action.response.map(item => item.id);
    default:
      return state;
  }
};

const disabledIds = (state = [], action) => {
  if (action.filter !== 'disabled') {
    return state;
  }switch (action.type) {
    case 'RECEIVE_ITEMS':
      return action.response.map(item => item.id);
    default:
      return state;
  }
};

const idsByFilter = combineReducers({
  all: allIds,
  enabled: enabledIds,
  disabled: disabledIds
});

const items = combineReducers({
  byId,
  idsByFilter
});

export default items;

export const getVisibleItems = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
};