import { React, useState } from 'react';
import styled from 'styled-components';
import API from '../../../../config';

const ListFollow = ({ writerId, isFollowing }) => {
  const accessToken = localStorage.getItem('token');
  const [isFollow, setIsFollow] = useState(isFollowing);

  const pushFollow = () => {
    if (isFollow) {
      fetch(`${API.follow}?writerId=${writerId}`, {
        method: 'DELETE',
        headers: {
          authorization: accessToken,
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(result => console.log(result))
        .then(() => window.location.reload());
    } else if (!isFollow) {
      fetch(`${API.follow}?writerId=${writerId}`, {
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
  };

  return (
    <ListFollowing
      onClick={pushFollow}
      textColor={isFollow ? '#757575' : '#35C5F0'}
    >
      {isFollow ? '팔로잉' : '팔로우'}
    </ListFollowing>
  );
};

export default ListFollow;

const ListFollowing = styled.button`
  border: none;
  background-color: ${props => props.theme.style.white};
  color: ${props => props.textColor};
  font-weight: 700;
`;
