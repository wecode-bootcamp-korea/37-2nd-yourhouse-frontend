import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ListFilter from './ListFilter/ListFilter';
import ListImages from './ListImages/ListImages';
const List = () => {
  const [data, setData] = useState([]);
  const accessToken = localStorage.getItem('token');

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.toString();

  useEffect(() => {
    fetch(`http://10.58.52.110:3000/post?${query}`, {
      method: 'GET',
      headers: {
        authorization: accessToken,
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => (console.log(data), setData(data.list)));
  }, [query]);

  // useEffect(() => {
  //   fetch(`필터API`, { method: 'GET' })
  //     .then(res => res.json())
  //     .then(result => console.log(result));
  // }, []);

  return (
    <Container>
      <ContainerBox>
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
const ContainerBox = styled.div`
  width: 60%;
  margin-top: 50px;
`;

const ListWrap = styled.div`
  width: 100%;
  padding: 20px 0;
`;
