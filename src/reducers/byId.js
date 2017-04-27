const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
      const nextState = { ...state };
      action.response.forEach(item => {
        nextState[item.id] = item;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getItem = (state, id) => state[id];