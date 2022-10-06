import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
      <FormWrap>
        <LogoImage src="./images/logo.png" />
        <Button>카카오 계정으로 간편 로그인/회원가입</Button>
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
  ${props => props.theme.variables.absoluteCenter};
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
