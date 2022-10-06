import React, { useState } from 'react';
import styled from 'styled-components';

const ListCount = ({ likesNum }) => {
  const [isCount, setIsCount] = useState('0');

  return <ListCountOn>{likesNum}</ListCountOn>;
};

export default ListCount;

const ListCountOn = styled.div``;
