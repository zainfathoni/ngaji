import deepFreeze from 'deep-freeze';
import items from './items';

test('Add Item', () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_ITEM',
    id: 0,
    text: 'Tilawah 1 Juz'
  };
  const stateAfter = [{
    id: 0,
    text: 'Tilawah 1 Juz',
    enabled: true
  }];
  
  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    items(stateBefore, action)
  ).toEqual(stateAfter);
});

test('Toggle Item', () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Tilawah 1 Juz',
      enabled: true
    },
    {
      id: 1,
      text: 'Shalat Dhuha',
      enabled: true
    }
  ];
  const action = {
    type: 'TOGGLE_ITEM',
    id: 1
  }
  const stateAfter = [
    {
      id: 0,
      text: 'Tilawah 1 Juz',
      enabled: true
    },
    {
      id: 1,
      text: 'Shalat Dhuha',
      enabled: false
    }
  ]

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    items(stateBefore, action)
  ).toEqual(stateAfter);
});