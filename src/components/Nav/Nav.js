import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchedResult from './SearchedResult';

const Nav = () => {
  const [searchedTerm, setSearchedTerm] = useState('');

  const saveTerm = e => {
    setSearchedTerm(e.target.value);
  };

  const clearTerm = () => {
    setSearchedTerm('');
  };

  return (
    <Container>
      <ContentsWrap>
        <CenterWrap>
          <Link to="/">
            <Logo src="./images/logo.png" />
          </Link>
          <MenuItems>
            <MenuItem>커뮤니티</MenuItem>
            <MenuItem>스토어</MenuItem>
          </MenuItems>
        </CenterWrap>
        <SearchSet>
          <SearchBarSet>
            <Icon src="./images/search.png" />
            <SearchBar
              onChange={saveTerm}
              value={searchedTerm}
              placeholder="아이디, 상품 검색"
            />
            {searchedTerm.length !== 0 ? (
              <XIcon onClick={clearTerm} src="./images/close.png" />
            ) : null}
          </SearchBarSet>
          {/* <SearchedResult /> */}
        </SearchSet>
        <CenterWrap>
          <Link to="/mypage">
            <UserName>김지원 님</UserName>
          </Link>
          <Link to="/upload">
            <UploadButton>글쓰기 ✏️</UploadButton>
          </Link>
        </CenterWrap>
      </ContentsWrap>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')};
  position: relative;
  width: 100%;

  a {
    text-decoration: none;
  }
`;

const ContentsWrap = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')};
  padding: 10px 50px;
  height: 80px;
  width: 1256px;
`;

const CenterWrap = styled.div`
  ${props => props.theme.variables.flex('', '', 'center')};
  gap: 20px;
`;

const Logo = styled.img`
  height: 30px;
`;

const MenuItems = styled.div`
  ${props => props.theme.variables.flex('', '', 'center')};
`;

const MenuItem = styled.span`
  display: inline-block;
  padding: 20px;
  min-width: 103px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    color: ${props => props.theme.style.skyBlue};
  }
`;

const SearchSet = styled.div`
  ${props => props.theme.variables.flex('column', '', '')};
  width: 360px;
  margin-top: 10px;
`;

const SearchBarSet = styled.div`
  position: relative;
  width: 100%;
`;

const SearchBar = styled.input`
  padding: 10px 10px 10px 45px;
  width: 100%;
  border: 1px solid ${props => props.theme.style.middleGrey};
  border-radius: ${props => props.theme.style.borderRadius};

  :hover {
    background-color: ${props => props.theme.style.lightGrey};
  }

  :focus {
    outline: none;
    border: 1px solid ${props => props.theme.style.skyBlue};
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  opacity: 0.5;
`;

const XIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  opacity: 0.5;

  :hover {
    opacity: 0.3;
  }
`;

const UserName = styled.span``;

const UploadButton = styled.button`
  all: unset;
  padding: 12px 20px;
  color: ${props => props.theme.style.white};
  background-color: ${props => props.theme.style.skyBlue};
  border-radius: ${props => props.theme.style.borderRadius};
  cursor: pointer;

  :hover {
    background-color: #009fce;
  }
`;
