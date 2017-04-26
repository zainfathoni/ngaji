import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Items from './Items';
import { toggleItem } from '../actions';
import { getVisibleItems } from '../reducers';

const mapStateToProps = (state, { match }) => {
  return {
    items: getVisibleItems(
      state,
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