import React from 'react';
import AddItem from './AddItem';
import Items from './Items';
import Footer from './Footer';

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
const Ngaji = ({
  store,
  items,
  visibilityFilter
}) => (
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
      items={
        getVisibleItems(
          items,
          visibilityFilter
        )
      }
      onItemClick={id => {
        store.dispatch({
          type: 'TOGGLE_ITEM',
          id
        });
      }}
    />
    <Footer
      store={store}
    />
  </div>
  )

export default Ngaji;