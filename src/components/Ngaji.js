import React from 'react';
import AddItem from './AddItem';
import VisibleItems from './VisibleItems';
import Footer from './Footer';

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
    <VisibleItems
      store={store}
    />
    <Footer
      store={store}
    />
  </div>
)

export default Ngaji;