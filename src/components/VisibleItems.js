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

const VisibleItems = withRouter(
  connect(
    mapStateToProps,
    { onItemClick: toggleItem }
  )(Items)
);

export default VisibleItems;