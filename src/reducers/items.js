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
    case 'RENAME_ACTIVITY':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        activity: action.activity
      };
    case 'UPDATE_TARGET':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        target: action.target || state.target,
        unit: action.unit || state.unit,
      };
    case 'TOGGLE_ITEM':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        enabled: !state.enabled
      };
    default:
      return state;
  }
}

const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ];
    case 'RENAME_ACTIVITY':
    case 'UPDATE_TARGET':
    case 'TOGGLE_ITEM':
      return state.map(i => item(i, action));
    default:
      return state;
  }
};

export default items;