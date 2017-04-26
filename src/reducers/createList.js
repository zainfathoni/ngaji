const createList = (filter) => {
  return (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'RECEIVE_ITEMS':
        return action.response.map(item => item.id);
      default:
        return state;
    }
  }
};

export default createList;

export const getIds = (state) => state;