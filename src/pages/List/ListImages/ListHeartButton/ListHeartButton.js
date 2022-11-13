import React, { useState } from 'react';
import styled from 'styled-components';
import ListCount from './ListCount/LIstCount';
import API from '../../../../config';

const ListHeartButton = ({ liked, likesNum, postId }) => {
  const accessToken = localStorage.getItem('token');

  const [isLike, setIsLike] = useState(liked);

  const likeClick = () => {
    if (accessToken) {
      if (isLike) {
        fetch(`${API.like}?postId=${postId}`, {
          method: 'DELETE',
          headers: {
            authorization: accessToken,
            'Content-Type': 'application/json;charset=utf-8',
          },
        })
          .then(result => console.log(result))
          .then(result => console.log(result))
          .then(() => window.location.reload());
      } else if (!isLike) {
        fetch(`${API.like}?postId=${postId}`, {
          method: 'POST',
          headers: {
            authorization: accessToken,
            'Content-Type': 'application/json;charset=utf-8',
          },
        })
          .then(response => response.json())
          .then(result => console.log(result))
          .then(() => window.location.reload());
      }
    } else {
      alert('로그인 후 이용가능한 서비스입니다.');
    }
  };

  return (
    <>
      <ImageButton>
        <ListHeart
          src={isLike ? './images/blueheart.png' : './images/heart2.png'}
          onClick={likeClick}
        />
      </ImageButton>
      <ListCount likesNum={likesNum} />
    </>
  );
};

export default ListHeartButton;

const ListHeart = styled.img`
  width: 20px;
  margin-right: 5px;
  :hover {
    opacity: 0.5;
  }
`;

const ImageButton = styled.button`
  border: none;
  background-color: ${props => props.theme.style.white};
  font-size: 23px;
  color: ${props => props.theme.style.skyBlue};
`;
