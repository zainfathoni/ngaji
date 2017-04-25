import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='all'
    >
      All
    </FilterLink>
    {' '}
    <FilterLink
      filter='enabled'
    >
      Enabled
    </FilterLink>
    {' '}
    <FilterLink
      filter='disabled'
    >
      Disabled
    </FilterLink>
  </p>
)

export default Footer;