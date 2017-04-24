import React from 'react';
import Item from './Item';

const Items = ({
  items,
  onItemClick
}) => (
  <ul>
    {items.map(item =>
      <Item
        key={item.id}
        {...item}
        onClick={() => onItemClick(item.id)}
      />
    )}
  </ul>
);

export default Items;