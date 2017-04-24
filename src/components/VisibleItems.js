import React, { Component } from 'react';
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

class VisibleItems extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const store = props.store;
    const state = store.getState();

    return (
      <Items
        items={
          getVisibleItems(
            state.items,
            state.visibilityFilter
          )
        }
        onItemClick={id =>
          store.dispatch({
            type: 'TOGGLE_ITEM',
            id
          })
        }
      />
    );
  }
}

export default VisibleItems;