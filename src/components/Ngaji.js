import React, { Component } from 'react';
import Items from './Items';
import FilterLink from './FilterLink';

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

let nextItemId = 0;
class Ngaji extends Component {
  render() {
    const { store, items, visibilityFilter } = this.props;
    const visibleItems = getVisibleItems(
      items,
      visibilityFilter
    )

    return (
      <div>
        <input
          type="text"
          placeholder="Activity"
          ref={node => {this.activity = node}}
        />
        <input
          type="number"
          placeholder="Target"
          ref={node => {this.target = node}}
        />
        <input
          type="text"
          placeholder="Unit"
          ref={node => {this.unit = node}}
        />
        <button
          onClick={() => {
            store.dispatch({
              id: nextItemId++,
              type: 'ADD_ITEM',
              activity: this.activity.value,
              target: this.target.value,
              unit: this.unit.value,
            });
            this.activity.value = "";
            this.target.value = "";
            this.unit.value = "";
          }}
          >
          Add Item
        </button>
        <Items
          items={visibleItems}
          onItemClick={id => {
            store.dispatch({
              type: 'TOGGLE_ITEM',
              id
            });
          }}
        />
        <p>
          Show:
          {' '}
          <FilterLink
            store={store}
            filter='SHOW_ALL'
            currentFilter={visibilityFilter}
          >
            All
          </FilterLink>
          {' '}
          <FilterLink
            store={store}
            filter='SHOW_ENABLED'
            currentFilter={visibilityFilter}
          >
            Enabled
          </FilterLink>
          {' '}
          <FilterLink
            store={store}
            filter='SHOW_DISABLED'
            currentFilter={visibilityFilter}
          >
            Disabled
          </FilterLink>
        </p>
      </div>
    )
  }
}

export default Ngaji;