import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../../Dropdown/Dropdown';

const ListButton = ({ list, filterTypeClick, filterValueClick }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <ListFilterButton
      onMouseOver={() => {
        setIsOpenMenu(true);
        filterTypeClick(list.name);
      }}
      onMouseLeave={() => {
        setIsOpenMenu(prev => !prev);
      }}
      onClick={() => {
        setIsOpenMenu(prev => !prev);
      }}
    >
      <NameBox>
        {list.title}

        <ListOpen src="../images/down-arrow.png" />
      </NameBox>

      {isOpenMenu && (
        <Dropdown data={list} filterValueClick={filterValueClick} />
      )}
    </ListFilterButton>
  );
};

export default ListButton;

const NameBox = styled.div`
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  /* color: ${props => props.theme.style.deepGrey}; */
  background-color: ${props => props.theme.style.lightGrey};
  margin-left: 3px;

  :hover {
    background-color: #f0f0f0;
  }
`;

const ListFilterButton = styled.button`
  padding-bottom: 10px;
  background: transparent;
  border: 0;
`;
const ListOpen = styled.img`
  width: 7px;
  margin-left: 5px;
`;
