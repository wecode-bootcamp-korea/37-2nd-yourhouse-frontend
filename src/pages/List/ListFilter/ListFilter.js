import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ListButton from './ListButton/ListButton';

const ListFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [clicked, setClicked] = useState([]);

  // console.log(
  //   clicked.map(el =>
  //     DROPDOWN_MENU.find(({ name }) => name === el[0]).category.find(
  //       ({ id }) => id === el[1]
  //     )
  //   )
  // );
  const clickedFilter = [];
  clicked.forEach(([cate, id]) => {
    DROPDOWN_MENU.forEach(({ name, category }) => {
      if (name === cate)
        clickedFilter.push({
          category: name,
          text: category.find(el => el.id === Number(id)).name,
        });
    });
  });

  // console.log(clicked);
  // console.log(
  //   clicked.map(el =>
  //     DROPDOWN_MENU.find(({ name }) => {
  //       // name 찾고
  //       // 그 다음 category 접근해서 id(el[1]) 일치하는 부분 찾고
  //       // 그 다음 name으로 return해서 map method의 결과값으로
  //       return name === el[0];
  //     })
  //   )
  // );

  const sort = searchParams.get('sort');
  const residence = searchParams.get('residence');
  const space = searchParams.get('space');
  const roomsize = searchParams.get('roomsize');
  const style = searchParams.get('style');
  const color = searchParams.get('color');

  const sortId = DROPDOWN_MENU.find(
    ({ name }) => name === 'sort'
  ).category.find(({ name }) => name === sort)?.id;
  const residenceId = DROPDOWN_MENU.find(
    ({ name }) => name === 'residence'
  ).category.find(({ name }) => name === residence)?.id;
  const spaceId = DROPDOWN_MENU.find(
    ({ name }) => name === 'space'
  ).category.find(({ name }) => name === space)?.id;
  const roomsizeId = DROPDOWN_MENU.find(
    ({ name }) => name === 'roomsize'
  ).category.find(({ name }) => name === roomsize)?.id;
  const styleId = DROPDOWN_MENU.find(
    ({ name }) => name === 'style'
  ).category.find(({ name }) => name === style)?.id;
  const colorId = DROPDOWN_MENU.find(
    ({ name }) => name === 'color'
  ).category.find(({ name }) => name === color)?.id;

  const [filterType, setFilterType] = useState('');

  const filterTypeClick = name => {
    setFilterType(name);
  };

  const deleteFilter = item => {
    searchParams.delete(item);

    setSearchParams(searchParams);
  };

  useEffect(() => {
    setSearchParams(searchParams);
    const clickedForCopy = [];
    for (const value of searchParams.entries()) {
      clickedForCopy.push(value);
    }
    setClicked(clickedForCopy);

    // const parsedObj = Object.fromEntries(searchParams);

    // for (let val in parsedObj) {
    //   console.log(parsedObj[val]);
    // }

    // console.log(parsedObj);

    // fetch(`${API}/list${searchParams}`).then().then();
  }, [searchParams]);

  const filterValueClick = name => {
    searchParams.set(filterType, name);
    setSearchParams(searchParams);
  };

  return (
    <>
      <FilterWrap>
        {DROPDOWN_MENU.map(title => {
          return (
            <DropdownWrap key={title.id}>
              <ListButton
                list={title}
                filterTypeClick={filterTypeClick}
                filterValueClick={filterValueClick}
              />
            </DropdownWrap>
          );
        })}
      </FilterWrap>
      <ClickedFilterWrap>
        {clickedFilter.map(item => {
          return (
            <ClickedFilter
              key={item}
              onClick={() => deleteFilter(item.category)}
            >
              {item.text}
              <Remove src="./images/remove.png" />
            </ClickedFilter>
          );
        })}
      </ClickedFilterWrap>
    </>
  );
};

export default ListFilter;

const FilterWrap = styled.div`
  display: flex;
  width: 800px;
  padding: 10px 0 10px 0;
`;

const DropdownWrap = styled.div`
  height: 30px;
`;

const ClickedFilterWrap = styled.div`
  display: flex;
`;

const ClickedFilter = styled.div`
  display: inline-block;
  padding: 5px 10px 5px 10px;
  margin-right: 8px;
  font-size: 13px;
  color: ${props => props.theme.style.white};
  background-color: ${props => props.theme.style.skyBlue};
  border-radius: 15px;
`;

const Remove = styled.img`
  width: 11px;
  margin-left: 5px;
  cursor: pointer;
`;

const DROPDOWN_MENU = [
  {
    id: 0,
    name: 'sort',
    title: '정렬',
    category: [
      { id: 1, name: '최신순' },
      { id: 2, name: '인기순' },
    ],
  },
  {
    id: 1,
    name: 'residence',
    title: '거주형태',
    category: [
      { id: 1, name: '원룸&오피스텔' },
      { id: 2, name: '아파트' },
      { id: 3, name: '빌라&연합' },
      { id: 4, name: '단독주택' },
      { id: 5, name: '사무공간' },
      { id: 6, name: '상업공간' },
      { id: 7, name: '기타' },
    ],
  },
  {
    id: 2,
    name: 'space',
    title: '공간',
    category: [
      { id: 1, name: '원룸' },
      { id: 2, name: '거실' },
      { id: 3, name: '침실' },
      { id: 4, name: '주방' },
      { id: 5, name: '욕실' },
      { id: 6, name: '아이방' },
      { id: 7, name: '드레스룸' },
      { id: 8, name: '서재 & 작업실' },
      { id: 9, name: '베란다' },
      { id: 10, name: '사무공간' },
      { id: 11, name: '상업공간' },
      { id: 12, name: '가구 & 소품' },
      { id: 13, name: '현관' },
      { id: 14, name: '외관 & 기타' },
    ],
  },
  {
    id: 3,
    name: 'roomsize',
    title: '평수',
    category: [
      { id: 1, name: '10평미만' },
      { id: 2, name: '10평대' },
      { id: 3, name: '20평대' },
      { id: 4, name: '30평대' },
      { id: 5, name: '40평대' },
      { id: 6, name: '50평 이상' },
    ],
  },
  {
    id: 4,
    name: 'style',
    title: '스타일',
    category: [
      { id: 1, name: '모던' },
      { id: 2, name: '북유럽' },
      { id: 3, name: '빈티지' },
      { id: 4, name: '내추럴' },
      { id: 5, name: '프로방스&로맨틱' },
      { id: 6, name: '클래식&앤틱' },
      { id: 7, name: '한국&아시아' },
      { id: 7, name: '유니크' },
    ],
  },
  {
    id: 5,
    name: 'color',
    title: '컬러',
    category: [
      { id: 1, name: '그레이', color: 'grey' },
      { id: 2, name: '화이트', color: 'ivory' },
      { id: 3, name: '블랙', color: 'black' },
      { id: 4, name: '민트', color: '#9EDEC6' },
      { id: 5, name: '블루', color: 'blue' },
      { id: 6, name: '핑크', color: 'pink' },
      { id: 7, name: '그린', color: 'green' },
      { id: 8, name: '레드', color: 'red' },
    ],
  },
];
