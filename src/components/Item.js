import React from 'react';

const Item = ({
  onClick,
  activity,
  target,
  unit,
  enabled
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
        enabled ?
          'none' :
          'line-through'
    }}>
    {activity} {target} {unit}
  </li>
)

export default Item;