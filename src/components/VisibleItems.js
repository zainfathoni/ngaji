import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Items from './Items';
import { toggleItem } from '../actions';
import { getVisibleItems } from '../reducers';
import { fetchItems } from '../api';

class VisibleItems extends Component {
  componentDidMount() {
    fetchItems(this.props.filter).then(items =>
      console.log(this.props.filter, items)
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      fetchItems(this.props.filter).then(items =>
        console.log(this.props.filter, items)
      );
    }
  }

  render() {
    return (
      <Items {...this.props} />
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
    { onItemClick: toggleItem }
  )(VisibleItems)
);

export default VisibleItems;