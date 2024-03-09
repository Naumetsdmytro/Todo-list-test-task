import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../redux/filter/filter-slice';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 35px;
`;

const FilterButton = styled.button`
  padding: 15px;
  border: none;
  border-radius: 10px;
  background-color: #dcdcdc;
  color: black;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  &.active {
    background-color: #007bff;
    color: white;
  }
`;

export const FilterMenu = () => {
  const currentFilter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <FilterContainer>
      <FilterButton
        onClick={() => handleFilterChange('ALL')}
        className={currentFilter === 'ALL' ? 'active' : ''}
      >
        All
      </FilterButton>
      <FilterButton
        onClick={() => handleFilterChange('COMPLETED')}
        className={currentFilter === 'COMPLETED' ? 'active' : ''}
      >
        Completed
      </FilterButton>
      <FilterButton
        onClick={() => handleFilterChange('CURRENT')}
        className={currentFilter === 'CURRENT' ? 'active' : ''}
      >
        Current
      </FilterButton>
    </FilterContainer>
  );
};
