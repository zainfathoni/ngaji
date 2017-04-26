import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Items from './Items';
import * as actions from '../actions';
import { getVisibleItems } from '../reducers';
import { fetchItems } from '../api';

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
    const { filter, receiveItems } = this.props;
    fetchItems(filter).then(items =>
      receiveItems(filter, items)
    );
  }

  render() {
    const { toggleItem, ...rest } = this.props;
    return (
      <Items
        {...rest}
        onItemClick={toggleItem}
      />
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    items: getVisibleItems(state, filter),
    filter
  };
}

VisibleItems = withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleItems)
);

export default VisibleItems;