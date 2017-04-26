import { combineReducers } from 'redux';

const createList = (filter) => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'RECEIVE_ITEMS':
        return action.response.map(item => item.id);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'REQUEST_ITEMS':
        return true;
      case 'RECEIVE_ITEMS':
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching
  })
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;