import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SearchedResult = ({
  searchedPosts,
  searchedRelatedTerm,
  setResultOpen,
  clearTerm,
}) => {
  const navigate = useNavigate();

  const resultClick = el => {
    setResultOpen(false);
    navigate(`/detail/${el.postId}`);
    clearTerm();
  };

  return (
    <Container>
      {searchedRelatedTerm?.map(el => (
        <ResultItem key={el.id}>
          <Icon src="../images/search.png" />
          <ItemText>{el.description}</ItemText>
        </ResultItem>
      ))}

      {searchedPosts?.map(el => (
        <ResultItem2 onClick={() => resultClick(el)} key={el.id}>
          <Icon src={el.profile_image} />
          <ItemText>{el.nickname}</ItemText>
          <ItemText2>{el.postInfo[0].description}</ItemText2>
        </ResultItem2>
      ))}
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
  background-color: white;
`;

const ResultItem2 = styled(ResultItem)`
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.style.lightGrey};
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 8%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
`;

const ItemText = styled.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(0%, -50%);
`;

const ItemText2 = styled(ItemText)`
  left: 30%;
`;
