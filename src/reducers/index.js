import { combineReducers } from 'redux';
import items from './items';
import visibilityFilter from './visibilityFilter';

const ngaji = combineReducers({
  items,
  visibilityFilter
});

export default ngaji;