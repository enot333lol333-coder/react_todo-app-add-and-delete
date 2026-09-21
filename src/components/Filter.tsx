import React from 'react';
import classNames from 'classnames';

export type FilterStatus = 'all' | 'active' | 'completed';

type Props = {
  filter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
};

export const Filter: React.FC<Props> = ({ filter, onFilterChange }) => {
  return (
    <nav className="filter" data-cy="Filter">
      <a
        href="#/"
        className={classNames('filter__link', {
          selected: filter === 'all',
        })}
        data-cy="FilterLinkAll"
        onClick={() => onFilterChange('all')}
      >
        All
      </a>

      <a
        href="#/active"
        className={classNames('filter__link', {
          selected: filter === 'active',
        })}
        data-cy="FilterLinkActive"
        onClick={() => onFilterChange('active')}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={classNames('filter__link', {
          selected: filter === 'completed',
        })}
        data-cy="FilterLinkCompleted"
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </a>
    </nav>
  );
};
