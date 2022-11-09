import { React, useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import ListFilter from './ListFilter/ListFilter';
import ListImages from './ListImages/ListImages';
import API from '../../config';

const List = () => {
  const [data, setData] = useState([]);
  const accessToken = localStorage.getItem('token');

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.toString();

  useEffect(() => {
    fetch(`${API.list}?limit=100&offset=0&${query}`, {
      method: 'GET',
      headers: {
        authorization: accessToken,
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => (console.log(data), setData(data.lists)));
  }, [query]);

  // useEffect(() => {
  //   fetch(`필터API`, { method: 'GET' })
  //     .then(res => res.json())
  //     .then(result => console.log(result));
  // }, []);

  return (
    <Container>
      <ContainerBox>
        <ListNav>
          <Link to="/list">
            <NavItem>사진</NavItem>
          </Link>
          <Link to="/follow">
            <NavItem>팔로잉</NavItem>
          </Link>
        </ListNav>
        <ListFilter DROPDOWN_MENU />
        <ListWrap>
          <ListImages data={data} />
        </ListWrap>
      </ContainerBox>
    </Container>
  );
};

export default List;

const Container = styled.div`
  background-color: ${props => props.theme.style.white};
  display: flex;
  justify-content: center;
`;

const ListNav = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 130px;
  padding-left: 22%;
  gap: 40px;
  width: 100vw;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid ${props => props.theme.style.lightGrey};
  margin-bottom: 10px;
  background-color: white;
  z-index: 1000;
`;

const NavItem = styled.span`
  font-weight: 500;

  a {
    text-decoration: none;
  }

  :hover {
    text-decoration: none;
    color: ${props => props.theme.style.skyBlue};
  }
`;

const ContainerBox = styled.div`
  width: 60%;
  margin-top: 140px;
`;

const ListWrap = styled.div`
  width: 100%;
  padding: 20px 0;
`;
