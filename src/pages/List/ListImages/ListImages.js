import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import ListFollow from './ListFollow/ListFollow';
import ListHeartButton from './ListHeartButton/ListHeartButton';

const ListImages = ({ data }) => {
  const navigate = useNavigate();

  return (
    <ListImageCont>
      {data?.map(list => {
        return (
          <ListBox key={list.id}>
            <ListUser>
              <ListProfile src={list.profile_image} alt="유저프로필" />
              <ListUserWrap>
                <ListUserBox>
                  <ListUserId>{list.nickname} ·</ListUserId>
                  <ListFollow
                    writerId={list.writerId}
                    isFollowing={list.followEx}
                  />
                </ListUserBox>
                <ListUserDetail>{list.description}</ListUserDetail>
              </ListUserWrap>
            </ListUser>
            <ListImageWrap>
              <ListView>조회수 250</ListView>

              <ListImage
                src={list.postinfo[0].image}
                alt="리스트이미지"
                onClick={() => navigate(`detail/${list.id}}`)}
              />
            </ListImageWrap>
            <ListLike>
              <LikeWrap>
                <ListHeartButton
                  // isLike={isLike}
                  // onClick={() => setIsLike(!isLike)}
                  liked={list.likeEx}
                  likesNum={list.likesNum}
                  postId={list.id}
                />
              </LikeWrap>
              <LikeWrap>
                <ImageButton>
                  <ListBookmark src="./images/ribbon3.png" />
                </ImageButton>
                0
              </LikeWrap>
              <LikeWrap>
                <ImageButton>
                  <ListComment src="./images/chat.png" />
                </ImageButton>
                {list.commentsNum}
              </LikeWrap>
            </ListLike>
            <ListContent>{list.postinfo[0].desc}</ListContent>
            <ListReview>
              <ListCommentWrap>
                <ListCommentProfile
                  src={list.commentInfo[0].profile}
                  alt="댓글작성자프로필"
                />
                <ListCommentUser>
                  {list.commentInfo[0].nickname}
                </ListCommentUser>
                <ListCommentContent>
                  {list.commentInfo[0].comment}
                </ListCommentContent>
              </ListCommentWrap>
            </ListReview>
          </ListBox>
        );
      })}
    </ListImageCont>
  );
};

export default ListImages;

const ListImageCont = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ListBox = styled.div`
  width: 270px;
  margin-bottom: 50px;
`;

const ListUser = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
`;

const ListProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const ListUserWrap = styled.div`
  width: 70%;
`;
const ListUserBox = styled.div`
  display: flex;
`;

const ListUserId = styled.div`
  cursor: pointer;
  :hover {
    color: ${props => props.theme.style.middleGrey};
  }
`;

const ListUserDetail = styled.div`
  width: 230px;
  height: 13px;
  font-size: 13px;
  color: ${props => props.theme.style.middleGrey};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ListImageWrap = styled.div`
  height: 280px;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;

  :hover {
    border-radius: 5px;
    z-index: 10;
  }
`;

const ListImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;

  :hover {
    transform: scale(1.1);
    transition: 0.35s;
  }
`;

const ListView = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 7px 10px 0;
  color: ${props => props.theme.style.white};
  font-size: 12px;
  font-weight: 400;
  z-index: 100;
`;

const ListCommentWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ListCommentProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  margin-right: 10px;
`;

const ListCommentUser = styled.button`
  all: unset;

  font-weight: 700;
`;
const ListLike = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10%;
  background-color: ${props => props.theme.style.white};
`;

const ListContent = styled.div`
  padding: 10px 0 10px 0;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.style.deepGrey};
  cursor: pointer;

  :hover {
    color: ${props => props.theme.style.middleGrey};
  }
`;

const ListReview = styled.div`
  background-color: ${props => props.theme.style.white};
  padding: 10px 0 10px 0;
  font-size: 14px;
  color: ${props => props.theme.style.deepGrey};
  cursor: pointer;
  :hover {
    color: ${props => props.theme.style.middleGrey};
  }
`;

const ListBookmark = styled.img`
  width: 20px;
  margin-right: 5px;
  :hover {
    opacity: 0.5;
  }
`;

const ListComment = styled.img`
  width: 20px;
  margin-right: 5px;
  :hover {
    opacity: 0.5;
  }
`;

const ListCommentContent = styled.div`
  padding-left: 10px;
`;

const LikeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageButton = styled.button`
  border: none;
  background-color: ${props => props.theme.style.white};
  font-size: 23px;
  color: ${props => props.theme.style.skyBlue};
`;
