import React from 'react';
import styled from 'styled-components';

const HeartButton = ({ like, onClick }) => {
  return (
    <Heart
      src={like ? '/images/heartSkyBlue.png' : '/images/heart.png'}
      onClick={onClick}
    />
  );
};

export default HeartButton;

const Heart = styled.img`
  width: 16px;
  height: 16px;
`;
