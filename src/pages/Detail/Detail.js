import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DetailFeed from './components/DetailFeed';
import DetailProfile from './components/DetailProfile';
import DetailComment from './components/DetailComment';

const Detail = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('data/detailfeed.json')
      .then(response => response.json())
      .then(result => setFeedData(result));
  });

  return (
    <>
      <DetailNavBox>
        <DetailNav>
          <DetailNavBtn>10평대</DetailNavBtn>
          <DetailNavBtn>빌라 & 연립</DetailNavBtn>
        </DetailNav>
      </DetailNavBox>
      <Container>
        <FeedBox>
          {feedData.map((feeds, idx) => {
            return <DetailFeed key={idx} feeds={feeds} />;
          })}

          <ReviewContainer>
            <ReviewInContainer>
              <ReviewText1>조회</ReviewText1>
              <ReviewText2>203</ReviewText2>
              <ReviewText1>댓글</ReviewText1>
              <ReviewText2>4</ReviewText2>
            </ReviewInContainer>
            <Report>신고하기</Report>
          </ReviewContainer>
        </FeedBox>
      </Container>
      <DetailProfile />

      <DetailComment />
    </>
  );
};

export default Detail;

const DetailNavBox = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
`;

const DetailNav = styled.h1`
  width: 720px;
  height: 40px;
  color: ${props => props.theme.style.middleGrey};
`;

const DetailNavBtn = styled.button`
  text-align: center;
  width: 80px;
  height: 32px;
  color: ${props => props.theme.style.middleGrey};
  background-color: ${props => props.theme.style.white};
  border: 1px solid white;
`;

const Container = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 100%;
`;

const FeedBox = styled.div`
  width: 720px;
`;

const ReviewInContainer = styled.div``;
const ReviewContainer = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  width: 720px;
  height: 40px;
  border-bottom: 1px solid ${props => props.theme.style.middleGrey};
  margin: 8px 0 8px 0;
`;

const ReviewText1 = styled.span`
  color: ${props => props.theme.style.middleGrey};
`;

const ReviewText2 = styled(ReviewText1)`
  margin: 0px 10px 0px 5px;
`;
const Report = styled.div`
  color: ${props => props.theme.style.middleGrey};
`;
