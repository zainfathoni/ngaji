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
    if (Math.random() > 0.5) {
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
