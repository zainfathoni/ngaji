import { combineReducers } from 'redux';

const createList = (filter) => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_ITEMS_SUCCESS':
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
      case 'FETCH_ITEMS_REQUEST':
        return true;
      case 'FETCH_ITEMS_SUCCESS':
      case 'FETCH_ITEMS_FAILURE':
        return false ;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_ITEMS_FAILURE':
        return action.message;
      case 'FETCH_ITEMS_REQUEST':
      case 'FETCH_ITEMS_SUCCESS':
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  })
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;