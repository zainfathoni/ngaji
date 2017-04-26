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

export default item;