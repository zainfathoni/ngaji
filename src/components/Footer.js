import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
    >
      All
    </FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_ENABLED'
    >
      Enabled
    </FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_DISABLED'
    >
      Disabled
    </FilterLink>
  </p>
)

export default Footer;