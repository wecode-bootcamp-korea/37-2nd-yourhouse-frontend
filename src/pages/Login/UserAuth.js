import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';
import { useLocation, useNavigate } from 'react-router-dom';
import API from '../../config';

const UserAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const code = location.search;

  useEffect(() => {
    fetch(`${API.login}${code}`, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(
        result => (
          result.accessToken
            ? alert(`${result.nickname}님 반갑습니다!`)
            : alert('로그인 실패'),
          localStorage.setItem('token', result.accessToken),
          localStorage.setItem('nickname', result.nickname),
          localStorage.setItem('profileImage', result.profileImage)
        )
      )
      .then(() => navigate('/main'));
  }, []);

  return (
    <Container>
      <RotatingLines
        strokeColor="skyblue"
        strokeWidth="4"
        animationDuration="1"
        width="96"
        visible={true}
      />
      <Message>카카오 계정과 연결 중입니다.</Message>
    </Container>
  );
};

export default UserAuth;

const Container = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')};
  ${props => props.theme.variables.absoluteCenter};
  gap: 30px;
`;

const Message = styled.div`
  font-size: 24px;
`;
