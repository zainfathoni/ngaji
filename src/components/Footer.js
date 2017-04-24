import React from 'react';
import FilterLink from './FilterLink';

const Footer = ({
  visibilityFilter,
  onFilterClick
}) => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      All
    </FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_ENABLED'
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      Enabled
    </FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_DISABLED'
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      Disabled
    </FilterLink>
  </p>
)

export default Footer;