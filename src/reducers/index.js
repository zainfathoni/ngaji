import items from './items';
import visibilityFilter from './visibilityFilter';

const ngaji = (
  state = {},
  action,
) => ({
  items: items(
    state.items,
    action
  ),
  visibilityFilter: visibilityFilter(
    state.visibilityFilter,
    action
  )
});

export default ngaji;