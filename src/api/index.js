import { v4 } from 'uuid';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  items: [
    {
      id: v4(),
      activity: 'Tilawah',
      target: 1,
      unit: 'Juz',
      enabled: true
    },
    {
      id: v4(),
      activity: 'Shalat Dhuha',
      target: 4,
      unit: "Raka'at",
      enabled: true
    },
    {
      id: v4(),
      activity: 'Shalat Tahajjud',
      target: 2,
      unit: "Raka'at",
      enabled: false
    }
  ],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchItems = (filter) =>
  delay(500).then(() => {
    if (Math.random() > 0.95) {
      throw new Error('Boom!');
    }

    switch (filter) {
      case 'all':
        return fakeDatabase.items;
      case 'enabled':
        return fakeDatabase.items.filter(t => t.enabled);
      case 'disabled':
        return fakeDatabase.items.filter(t => !t.enabled);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const addItem = (activity, target, unit) =>
  delay(500).then(() => {
    const item = {
      id: v4(),
      activity,
      target,
      unit,
      enabled: true
    };
    fakeDatabase.items.push(item);
    return item;
  });

export const toggleItem = (id) =>
  delay(500).then(() => {
    const item = fakeDatabase.items.find(i => i.id === id);
    item.enabled = !item.enabled;
    return item;
  });
