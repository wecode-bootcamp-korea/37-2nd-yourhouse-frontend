import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ListHeartButton from '../../List/ListImages/ListHeartButton/ListHeartButton';

const MyPageContent = ({ posts }) => {
  return (
    <ImageWrap>
      <ImageCont>
        {posts?.map(data => {
          return (
            <Photo key={data.postId}>
              <PhotoUser>
                <PhotoUserProfile
                  src={
                    data.profile_image
                      ? data.profile_image
                      : './images/user.png'
                  }
                  alt="유저의프로필"
                />
                <PhotoUserId>{data.nickname}</PhotoUserId>
              </PhotoUser>
              <Link to={`/detail/${data.postId}`}>
                <ImgBox>
                  <Image src={data.postInfo[0].image} alt="포스트이미지" />
                </ImgBox>
              </Link>
              <PhotoBox>사진</PhotoBox>
              <UserAction>
                <Like>
                  <ListHeartButton
                    likesNum={data.likes}
                    liked={data.likeEx}
                    postId={data.postId}
                  />
                </Like>
                <Bookmark>
                  <BookmarkImg src="./images/ribbon3.png" alt="북마크" />
                  <BookmarkNum>0</BookmarkNum>
                </Bookmark>

                <Coupon>
                  <CouponImg src="./images/chat.png" alt="쿠폰" />
                  <CouponNum>{data.comments}</CouponNum>
                </Coupon>
              </UserAction>
              <>
                <Photocontents>{data.postInfo[0].description}</Photocontents>
              </>
            </Photo>
          );
        })}
      </ImageCont>
    </ImageWrap>
  );
};

export default MyPageContent;

const ImageWrap = styled.div`
  width: calc(100% - 265px);
  margin-left: 100px;
`;

const ImageCont = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  margin: 0px -10px 20px -10px;
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Photo = styled.div`
  position: relative;
  width: 33.3333%;
  padding: 0 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;
const PhotoBox = styled.div`
  position: absolute;
  width: 40px;
  bottom: 80px;
  left: 15px;
  font-size: 13px;
  color: white;
  padding: 5px 8px 5px 8px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PhotoUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const PhotoUserProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
`;
const PhotoUserId = styled.div`
  color: ${props => props.theme.style.deepGrey};
  padding-left: 10px;
  cursor: pointer;
`;

const Photocontents = styled.div`
  margin-top: 8px;
  margin-left: 20px;
  font-size: 14px;
`;

const UserAction = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 20px;
  cursor: pointer;
`;
const Bookmark = styled.div`
  display: flex;
  align-items: center;
  line-height: 2;

  :hover {
    opacity: 0.5;
  }
`;
const BookmarkImg = styled.img`
  opacity: 0.9;
  width: 25px;
  height: 25px;
`;

const BookmarkNum = styled.div`
  color: ${props => props.theme.style.deepGrey};
  margin-left: 5px;
  font-size: 13px;
`;

const LikeImg = styled.img`
  opacity: 0.9;
  width: 25x;
  height: 25px;
`;
const Like = styled.div`
  display: flex;

  align-items: center;
  line-height: 2;

  :hover {
    opacity: 0.5;
  }
`;

const Num = styled.div`
  color: ${props => props.theme.style.deepGrey};
  margin-left: 5px;
  font-size: 13px;
`;
const Coupon = styled(Like)``;
const CouponImg = styled.img`
  opacity: 0.9;
  width: 25px;
  height: 25px;
`;

const CouponNum = styled.div`
  color: ${props => props.theme.style.deepGrey};
  margin-left: 5px;
  font-size: 13px;
`;
