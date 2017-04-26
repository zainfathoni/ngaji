import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Items from './Items';
import * as actions from '../actions';
import { getVisibleItems } from '../reducers';

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
    const { filter, fetchItems } = this.props;
    fetchItems(filter);
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