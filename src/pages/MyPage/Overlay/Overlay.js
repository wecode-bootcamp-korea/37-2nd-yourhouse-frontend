import React from 'react';
import styled from 'styled-components';

const Overlay = ({ onclick }) => {
  return <OverlayWrap onClick={onclick} />;
};

export default Overlay;

const OverlayWrap = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0%;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
  z-index: 100;
`;
