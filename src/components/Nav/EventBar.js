import React from 'react';
import styled from 'styled-components';

const EventBar = ({ setIsEventBarVisible, eventBarHeight }) => {
  return (
    <Container eventBarHeight={eventBarHeight}>
      <PromotionImage src="./images/promo-code.png" />
      <PromotionText fontSize="16px">첫 구매라면 누구나 최대 </PromotionText>
      <PromotionText fontSize="20px" fontWeight="700">
        2만원 할인 받기
      </PromotionText>
      <PromotionImage2 src="./images/download-arrow.png" />
      <CloseButton
        onClick={() => setIsEventBarVisible(false)}
        src="./images/close(white).png"
      />
    </Container>
  );
};

export default EventBar;

const Container = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  gap: 6px;
  width: 100%;
  height: ${props => `${props.eventBarHeight}px`};
  background-color: ${props => props.theme.style.skyBlue};
  cursor: pointer;
`;

const PromotionImage = styled.img`
  height: 36px;
`;

const PromotionImage2 = styled.img`
  height: 20px;
  width: 20px;
`;

const PromotionText = styled.span`
  color: ${props => props.theme.style.white};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
`;

const CloseButton = styled.img`
  position: absolute;
  right: 3%;
  height: 20px;
`;
