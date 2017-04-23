import deepFreeze from 'deep-freeze';
import ngaji from './';

test('Add Item', () => {
  const stateBefore = {};
  const action = {
    type: 'ADD_ITEM',
    id: 0,
    activity: 'Tilawah',
    target: 1,
    unit: 'Juz'
  };
  const stateAfter = {
    items: [{
      id: 0,
      activity: 'Tilawah',
      target: 1,
      unit: 'Juz',
      enabled: true
    }],
    visibilityFilter: 'SHOW_ALL'
  }
  
  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    ngaji(stateBefore, action)
  ).toEqual(stateAfter);
});

test('Set Visibility Filter', () => {
  const stateBefore = {};
  const action = {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_ENABLED'
  };
  const stateAfter = {
    items: [],
    visibilityFilter: 'SHOW_ENABLED'
  }
  
  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    ngaji(stateBefore, action)
  ).toEqual(stateAfter);
});
