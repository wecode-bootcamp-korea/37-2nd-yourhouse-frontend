import React from 'react';
import styled from 'styled-components';

const DeleteButton = ({ onClick }) => {
  return <Delete onClick={onClick}>삭제</Delete>;
};

export default DeleteButton;

const Delete = styled.button`
  width: 40px;
  height: 18px;
  font-size: 12px;
  border: none;
  background-color: ${props => props.theme.style.white};
  color: ${props => props.theme.style.middleGrey};
`;
