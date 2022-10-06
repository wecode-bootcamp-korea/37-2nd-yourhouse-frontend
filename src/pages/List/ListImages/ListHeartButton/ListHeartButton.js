import React, { useState } from 'react';
import styled from 'styled-components';
import ListCount from './ListCount/LIstCount';

const ListHeartButton = ({ liked, likesNum, postId }) => {
  const accessToken = localStorage.getItem('token');

  const [isLike, setIsLike] = useState(liked);

  const likeClick = () => {
    if (isLike) {
      fetch(`http://10.58.52.110:3000/like?postId=${postId}`, {
        method: 'DELETE',
        headers: {
          authorization: accessToken,
          'Content-Type': 'application/json;charset=utf-8',
        },
      }).then(result => console.log(result));
    } else if (!isLike) {
      fetch(`http://10.58.52.110:3000/like?postId=${postId}`, {
        method: 'POST',
        headers: {
          authorization: accessToken,
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(response => response.json())
        .then(result => console.log(result));
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
