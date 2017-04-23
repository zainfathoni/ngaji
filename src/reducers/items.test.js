import deepFreeze from 'deep-freeze';
import items from './items';

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

deepFreeze(stateBefore);

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
  
  deepFreeze(action);

  expect(
    items(stateBefore, action)
  ).toEqual(stateAfter);
});

test('Rename Activity', () => {
  const action = {
    type: 'RENAME_ACTIVITY',
    id: 1,
    activity: 'Shalat Tahajjud'
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
      activity: 'Shalat Tahajjud',
      target: 4,
      unit: "Raka'at",
      enabled: true
    }
  ]

  deepFreeze(action);

  expect(
    items(stateBefore, action)
  ).toEqual(stateAfter);
});

test('Update Target', () => {
  const action = {
    type: 'UPDATE_TARGET',
    id: 0,
    target: 2,
    unit: 'Halaman'
  }
  const stateAfter = [
    {
      id: 0,
      activity: 'Tilawah',
      target: 2,
      unit: 'Halaman',
      enabled: true
    },
    {
      id: 1,
      activity: 'Shalat Dhuha',
      target: 4,
      unit: "Raka'at",
      enabled: true
    }
  ]

  deepFreeze(action);

  expect(
    items(stateBefore, action)
  ).toEqual(stateAfter);
});

test('Toggle Item', () => {
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

  deepFreeze(action);

  expect(
    items(stateBefore, action)
  ).toEqual(stateAfter);
});