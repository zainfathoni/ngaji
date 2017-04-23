const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log(action)
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          enabled: true
        }
      ];
    default:
      return state;
  }
};

export default items;