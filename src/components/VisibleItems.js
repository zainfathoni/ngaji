import { connect } from 'react-redux';
import Items from './Items';
import { toggleItem } from '../actions';

const getVisibleItems = (
  items,
  filter
) => {
  switch (filter) {
    case 'all':
      return items;
    case 'enabled':
      return items.filter(
        i => i.enabled
      );
    case 'disabled':
      return items.filter(
        i => !i.enabled
      );
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: getVisibleItems(
      state.items,
      ownProps.filter
    )
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: id => {
      dispatch(
        toggleItem(id)
      )
    }
  };
}

const VisibleItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);

export default VisibleItems;