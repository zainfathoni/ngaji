const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          enabled: true
        }
      ];
    case 'TOGGLE_ITEM':
      return state.map(item => {
        if (item.id !== action.id) {
          return item;
        } else {
          return {
            ...item,
            enabled: !item.enabled
          }
        }
      })
    default:
      return state;
  }
};

export default items;