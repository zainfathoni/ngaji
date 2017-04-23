const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ];
    case 'TOGGLE_ITEM':
      return state.map(i => item(i, action));
    default:
      return state;
  }
};

const item = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        activity: action.activity,
        target: action.target,
        unit: action.unit,
        enabled: true
      };
    case 'TOGGLE_ITEM':
      if (state.id !== action.id) {
        return state;
      } else {
        return {
          ...state,
          enabled: !state.enabled
        }
      };
    default:
      return state;
  }
}

export default items;