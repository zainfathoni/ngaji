import deepFreeze from 'deep-freeze';
import items from './items';

test('Add Item', () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_ITEM',
    id: 0,
    activity: 'Tilawah',
    target: 1,
    unit: 'Juz'
  };
  const stateAfter = [{
    id: 0,
    activity: 'Tilawah',
    target: 1,
    unit: 'Juz',
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
      activity: 'Tilawah',
      target: 1,
      unit: 'Juz',
      enabled: true
    },
    {
      id: 1,
      activity: 'Shalat Dhuha',
      target: 4,
      unit: "Raka'at",
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
      activity: 'Tilawah',
      target: 1,
      unit: 'Juz',
      enabled: true
    },
    {
      id: 1,
      activity: 'Shalat Dhuha',
      target: 4,
      unit: "Raka'at",
      enabled: false
    }
  ]

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    items(stateBefore, action)
  ).toEqual(stateAfter);
});