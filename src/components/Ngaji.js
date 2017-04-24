import React from 'react';
import AddItem from './AddItem';
import VisibleItems from './VisibleItems';
import Footer from './Footer';

const Ngaji = ({
  store,
  items,
  visibilityFilter
}) => (
  <div>
    <AddItem
      store={store}      
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