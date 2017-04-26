import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Items from './Items';
import * as actions from '../actions';
import { getVisibleItems, getIsFetching } from '../reducers';

class VisibleItems extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, requestItems, fetchItems } = this.props;
    requestItems(filter);
    fetchItems(filter);
  }

  render() {
    const { toggleItem, items, isFetching } = this.props;
    if (isFetching && !items.length) {
      return <p>Loading...</p>;
    }
    return (
      <Items
        items={items}
        onItemClick={toggleItem}
      />
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    items: getVisibleItems(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  };
};

VisibleItems = withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleItems)
);

export default VisibleItems;