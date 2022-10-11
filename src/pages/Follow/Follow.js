import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Follow = () => {
  const [product, setProduct] = useState([]);
  const accessToken = localStorage.getItem('token');

  useEffect(() => {
    fetch(`http://10.58.52.110:3000/post/follow?limit=100&offset=0`, {
      method: 'GET',
      headers: {
        authorization: accessToken,
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <FollowWrap>
      {product.map(product => {
        return (
          <FollowBox key={product.id}>
            <ListBox>
              <ListUser>
                <ListProfile src={product.userprofile} />
                <ListUserWrap>
                  <ListUserBox>
                    <ListUserId>{product.userid}</ListUserId>
                  </ListUserBox>
                </ListUserWrap>
              </ListUser>
              <ListImageWrap>
                <ListView>조회수 250</ListView>

                <ListImage src={product.images} />
              </ListImageWrap>

              <ListContent>{product.contents}</ListContent>
              <ListLike>
                <LikeWrap>
                  <ImageButton>
                    <ListBookmark src="./images/ribbon3.png" />
                  </ImageButton>
                  4
                </LikeWrap>
                <LikeWrap>
                  <ImageButton>
                    <ListComment src="./images/chat.png" />
                  </ImageButton>
                  {product.comment}
                </LikeWrap>
                <LikeWrap>
                  <ImageButton>
                    <ListBookmark src="./images/share.png" />
                  </ImageButton>
                </LikeWrap>
              </ListLike>
            </ListBox>
          </FollowBox>
        );
      })}
    </FollowWrap>
  );
};

export default Follow;

const FollowWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgb(247, 248, 250);
`;

const FollowBox = styled.div`
  background-color: white;
  border: 2px solid ${props => props.theme.style.lightGrey};
  border-radius: 5px;
  box-shadow: ${props => props.theme.boxShadow};
  margin: 20px 0 20px 0;
`;
const ListBox = styled.div`
  width: 500px;
  margin-bottom: 50px;
`;

const ListUser = styled.div`
  padding: 10px;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
`;

const ListProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 40px;
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
const ListImageWrap = styled.div`
  height: 500px;
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

const ListLike = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.style.white};
`;

const ListContent = styled.div`
  padding: 10px 10px 10px 10px;
  font-size: 14px;
  line-height: 20px;
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

const LikeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const ImageButton = styled.button`
  border: none;
  background-color: ${props => props.theme.style.white};
  font-size: 23px;
  color: ${props => props.theme.style.skyBlue};
`;
