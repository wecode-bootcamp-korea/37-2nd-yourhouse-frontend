import React from 'react';
import styled from 'styled-components';

const SearchedResult = () => {
  return (
    <Container>
      <ResultItem>
        <Icon src="./images/search.png" />
        <ItemText>상품 이름/ 유저 아이디</ItemText>
      </ResultItem>
    </Container>
  );
};

export default SearchedResult;

const Container = styled.div`
  margin-top: 10px;
  width: 360px;
  border: 1px solid ${props => props.theme.style.lightGrey};
  border-radius: ${props => props.theme.style.borderRadius};
  box-shadow: ${props => props.theme.style.boxShadow};
`;

const ResultItem = styled.div`
  position: relative;
  ${props => props.theme.variables.flex('', '', 'center')};
  height: 40px;
  padding: 8px;
  font-size: 14px;
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 8%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  opacity: 0.5;
`;

const ItemText = styled.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(0%, -50%);
`;
