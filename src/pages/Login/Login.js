import React from 'react';
import styled from 'styled-components';

const Login = () => {
  const API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  return (
    <Container>
      <FormWrap>
        <LogoImage src="./images/logo.png" />
        <Button>
          <a
            href={`https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`}
          >
            카카오 계정으로 간편 로그인/회원가입
          </a>
        </Button>
        <Text>로그인에 문제가 있으신가요?</Text>
      </FormWrap>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
`;

const FormWrap = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')};
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 40px;
  margin-top: 100px;
`;

const LogoImage = styled.img``;

const Button = styled.button`
  all: unset;
  padding: 20px 30px;
  background-color: #fae100;
  font-size: 18px;
  border-radius: ${props => props.theme.style.borderRadius};
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

const Text = styled.span`
  color: ${props => props.theme.style.middleGrey};
  cursor: pointer;
`;
