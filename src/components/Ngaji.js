import React, { Component } from 'react';
import AddItem from './AddItem';
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
        <AddItem
          onAddClick={(activity, target, unit) => 
            store.dispatch({
              type: 'ADD_ITEM',
              id: nextItemId++,
              activity,
              target,
              unit
            })
        }
        />
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