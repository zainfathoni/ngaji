import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Items from './Items';
import * as actions from '../actions';
import { getVisibleItems, getIsFetching, getErrorMessage } from '../reducers';
import FetchError from './FetchError';

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
    fetchItems(filter).then(() => console.log('done!'));
  }

  render() {
    const { toggleItem, items, isFetching, errorMessage } = this.props;
    if (isFetching && !items.length) {
      return <p>Loading...</p>;
    }
    if (errorMessage && !items.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      )
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
    errorMessage: getErrorMessage(state, filter),
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