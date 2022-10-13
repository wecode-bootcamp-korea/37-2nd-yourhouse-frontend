import React, { useState } from 'react';
import styled from 'styled-components';

const ListCount = ({ likesNum }) => {
  return <ListCountOn>{likesNum}</ListCountOn>;
};

export default ListCount;

const ListCountOn = styled.div``;
