import { getIsFetching } from "../reducers";
import * as api from '../api';

export const fetchItems = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_ITEMS_REQUEST',
    filter
  });

  return api.fetchItems(filter).then(
    response => {
      dispatch({
        type: 'FETCH_ITEMS_SUCCESS',
        filter,
        response
      });
    },
    error => {
      dispatch({
        type: 'FETCH_ITEMS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.'
      });
    }
  );
};

export const addItem = (activity, target, unit) => (dispatch) =>
  api.addItem(activity, target, unit).then(response => {
    dispatch({
      type: 'ADD_ITEM_SUCCESS',
      response
    });
  });

export const toggleItem = (
  id
) => ({
  type: 'TOGGLE_ITEM',
  id
});