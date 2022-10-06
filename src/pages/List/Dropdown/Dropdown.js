import React from 'react';
import styled from 'styled-components';

const Dropdown = ({ data, filterValueClick }) => {
  return (
    <DropdownTop>
      {data.category.map(item => {
        return (
          <DropdownList key={item.id} onClick={() => filterValueClick(item.id)}>
            {item.color && <Color color={item.color} />}
            {item.name}
          </DropdownList>
        );
      })}
    </DropdownTop>
  );
};

export default Dropdown;

const DropdownTop = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  max-height: 280px;
  margin-top: 5px;
  transform: translate(-35%, 0);
  border: 2px solid ${props => props.theme.style.lightGrey};
  border-radius: 7px;
  box-shadow: ${props => props.theme.style.boxShadow};
  overflow-y: scroll;
  z-index: 10000;
`;
const DropdownList = styled.li`
  width: 200px;
  height: 50px;
  border: none;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.style.white};
  padding: 15px 0 15px 0;

  :hover {
    background-color: #eaf5f7;
  }
`;

const Color = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: ${props => props.color};
  box-shadow: ${props => props.theme.style.boxShadow};
  margin-right: 10px;
`;
