import React from 'react';
import FilterLink from './FilterLink';

const Footer = ({
  store
}) => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
      store={store}
    >
      All
    </FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_ENABLED'
      store={store}
    >
      Enabled
    </FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_DISABLED'
      store={store}
    >
      Disabled
    </FilterLink>
  </p>
)

export default Footer;