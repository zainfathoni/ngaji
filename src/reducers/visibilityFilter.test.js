import deepFreeze from 'deep-freeze';
import visibilityFilter from './visibilityFilter';

test('Set Visibility Filter', () => {
  const stateBefore = 'SHOW_ALL';
  const action = {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_ENABLED'
  }
  const stateAfter = 'SHOW_ENABLED';

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    visibilityFilter(stateBefore, action)
  ).toEqual(stateAfter);
});