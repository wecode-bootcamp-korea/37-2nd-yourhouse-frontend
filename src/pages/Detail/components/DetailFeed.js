import React from 'react';
import styled from 'styled-components';

const DetailFeed = ({ feeds }) => {
  const { text, hashtag, main_pic_url, sub_pic_url } = feeds;
  return (
    <div>
      <DetailPic src={main_pic_url} />
      <DetailSubPic>
        <DetailInnerPicBox>
          <DetailInnerPicCtn src={sub_pic_url.img1} />
          {/* <DetailInnerPicBanner>{banner}</DetailInnerPicBanner> */}
        </DetailInnerPicBox>
        <DetailInnerPicBox>
          <DetailInnerPicCtn src={sub_pic_url.img2} />
          {/* <DetailInnerPicBanner>비슷한</DetailInnerPicBanner> */}
        </DetailInnerPicBox>
        <DetailInnerPicBox>
          <DetailInnerPicCtn src={sub_pic_url.img3} />
          {/* <DetailInnerPicBanner>비슷한</DetailInnerPicBanner> */}
        </DetailInnerPicBox>
        <DetailInnerPicBox>
          <DetailInnerPicCtn src={sub_pic_url.img4} />
          {/* <DetailInnerPicBanner>비슷한</DetailInnerPicBanner> */}
        </DetailInnerPicBox>
        <DetailInnerPicBox>
          <DetailInnerPicCtn src={sub_pic_url.img5} />
          {/* <DetailInnerPicBanner>비슷한</DetailInnerPicBanner> */}
        </DetailInnerPicBox>
        <DetailInnerPicBox>
          <DetailInnerPicCtn src={sub_pic_url.img6} />
          {/* <DetailInnerPicBanner>비슷한</DetailInnerPicBanner> */}
        </DetailInnerPicBox>
      </DetailSubPic>

      <DetailText>{text}</DetailText>

      <DetailHashTagBox>
        <DetailHashTag>{hashtag.tag1}</DetailHashTag>
        <DetailHashTag>{hashtag.tag2}</DetailHashTag>
        <DetailHashTag>{hashtag.tag3}</DetailHashTag>
        <DetailHashTag>{hashtag.tag4}</DetailHashTag>
        <DetailHashTag>{hashtag.tag5}</DetailHashTag>
        <DetailHashTag>{hashtag.tag6}</DetailHashTag>
        <DetailHashTag>{hashtag.tag7}</DetailHashTag>
      </DetailHashTagBox>
    </div>
  );
};

export default DetailFeed;

const DetailPic = styled.img`
  background-position: center;
  width: 720px;
  height: 720px;
  /* border: 1px solid red; */
`;

const DetailSubPic = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 720px;
  /* border: 1px solid green; */
  padding: 20px 0 20px 0;
`;

const DetailInnerPicBox = styled.div``;
const DetailInnerPicCtn = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid ${props => props.theme.style.lightGrey};
  margin-left: 10px;
  /* background-image: url(https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60); */
  background-position: center;
  background-size: cover;
  border-radius: 32px;
  &:hover {
    border: 3px solid ${props => props.theme.style.skyBlue};
  }
`;

// const DetailInnerPicBanner = styled.div`
//   ${props => props.theme.variables.flex('', '', 'center')}
//   position: absolute;
//   /* top: -px; */
//   left: 50%;
//   width: 50px;
//   height: 26px;
//   margin-left: -25px;
//   padding: 0 8px;
//   font-size: 12px;
//   border-radius: 12px;
//   border: 1px solid ${props => props.theme.style.lightGrey};
//   background-color: rgba(225, 225, 225, 0.7);
// `;

const DetailText = styled.div`
  width: 720px;
  height: 24px auto;
  /* border: 1px solid #d35400; */
  margin: 24px 0px;
  line-height: 20px;
`;

const DetailHashTagBox = styled.div`
  width: 720px;
  height: 24px;
  margin-bottom: 50px;
  /* border: 1px solid #192a56; */
`;

const DetailHashTag = styled.button`
  color: ${props => props.theme.style.skyBlue};
  background-color: ${props => props.theme.style.white};
  font-size: 15px;
  border: 1px solid white;
`;
