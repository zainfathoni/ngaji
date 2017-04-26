import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

const mapStateToProps = (state, { match }) => {
  return {
    items: getVisibleItems(
      state.items,
      match.params.filter || 'all'
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

const VisibleItems = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Items)
);

export default VisibleItems;