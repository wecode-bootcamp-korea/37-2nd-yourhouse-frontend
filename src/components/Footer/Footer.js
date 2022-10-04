import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const today = new Date();

  return (
    <Container>
      <TextBox>
        <CustomerCenterTitle href="tel:1004-1004">
          고객센터 {'>'}
        </CustomerCenterTitle>
        <CustomerCenterNum>1004-1004</CustomerCenterNum>
      </TextBox>
      <Text>09:00~18:00 (주말, 공휴일은 상담 불가능)</Text>
      <FooterMenus>
        {FOOTER_ITEMS.map((item, i) => (
          <Item key={i}>{item}</Item>
        ))}
      </FooterMenus>
      <TextBox>
        <GreyItem>상호명 : (주) 너네집 이메일 : yourHouse@gmail.com</GreyItem>
        <GreyItem>
          개발자 : 김지원, 박영태, 양석문, 장기석, 장문정, 정우진, 추재호
        </GreyItem>
        <GreyItem>
          &copy; Copyright {today.getFullYear()}. YourHouse. All rights
          reserved.
        </GreyItem>
      </TextBox>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  ${props => props.theme.variables.flex('column', '', '')}
  gap: 5px;
  width: 100%;
  padding: 40px 80px;
  background-color: ${props => props.theme.style.lightGrey};
`;

const TextBox = styled.div`
  ${props => props.theme.variables.flex('column', '', '')};
  gap: 5px;
`;

const CustomerCenterTitle = styled.a`
  text-decoration: none;

  :hover {
    text-decoration: none;
  }
`;

const CustomerCenterNum = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

const Text = styled.span`
  font-size: 14px;
`;

const FooterMenus = styled.div`
  ${props => props.theme.variables.flex('', '', '')};
  gap: 10px;
`;

const Item = styled.span`
  font-size: 12px;
  cursor: pointer;
`;

const GreyItem = styled(Item)`
  color: ${props => props.theme.style.middleGrey};
  cursor: auto;
`;

const FOOTER_ITEMS = [
  '브랜드 스토리',
  '회사소개',
  '채용정보',
  '이용약관',
  '개인정보처리방침',
  '공지사항',
  '고객의 소리',
];
