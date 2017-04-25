import { connect } from 'react-redux';
import Items from './Items';

const getVisibleItems = (
  items,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items;
    case 'SHOW_ENABLED':
      return items.filter(
        i => i.enabled
      );
    case 'SHOW_DISABLED':
      return items.filter(
        i => !i.enabled
      );
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
}

const mapStateToProps = (state) => {
  return {
    items: getVisibleItems(
      state.items,
      state.visibilityFilter
    )
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: id =>
      dispatch({
        type: 'TOGGLE_ITEM',
        id
      })
  }
}

const VisibleItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)

export default VisibleItems;