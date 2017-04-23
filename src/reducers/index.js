// import { combineReducers } from 'redux';
import items from './items';
import visibilityFilter from './visibilityFilter';

const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      {}
    )
  }
}

const ngaji = combineReducers({
  items,
  visibilityFilter
});

export default ngaji;