import { combineReducers } from 'redux';
import items, * as fromItems from './items';

const ngaji = combineReducers({
  items
});

export default ngaji;

export const getVisibleItems = (state, filter) =>
  fromItems.getVisibleItems(state.items, filter);