import { React, useState } from 'react';
import styled from 'styled-components';

const ListFollow = ({ writerId, isFollowing }) => {
  const accessToken = localStorage.getItem('token');
  const [isFollow, setIsFollow] = useState(isFollowing);
  const pushFollow = () => {
    if (isFollow) {
      fetch(`http://10.58.52.110:3000/post/follow?writerId=${writerId}`, {
        method: 'DELETE',
        headers: {
          authorization: accessToken,
          'Content-Type': 'application/json;charset=utf-8',
        },
      }).then(result => console.log(result));
    } else if (!isFollow) {
      fetch(`http://10.58.52.110:3000/post/follow?writerId=${writerId}`, {
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
