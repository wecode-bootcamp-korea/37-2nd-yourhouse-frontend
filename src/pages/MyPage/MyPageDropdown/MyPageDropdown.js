import React from 'react';
import styled from 'styled-components';
import Overlay from '../Overlay/Overlay';

const MyPageDropdown = ({ closeDropdownMenu }) => {
  return (
    <>
      <Overlay onclick={closeDropdownMenu} />
      <MyPageDropdownTop>
        {SOCIAL_LIST.map(data => {
          return (
            <SocialBOX key={data}>
              <SocialImg src={data.url} alt="소셜이미지" />
            </SocialBOX>
          );
        })}
      </MyPageDropdownTop>
    </>
  );
};

export default MyPageDropdown;

const SocialBOX = styled.div`
  border-radius: 30px;
  cursor: pointer;
`;
const MyPageDropdownTop = styled.div`
  z-index: 1000;
  display: flex;
  position: absolute;
  background-color: ${props => props.theme.style.white};
  border-radius: 10px;
  margin: 35px 0 0 200px;
  box-shadow: ${props => props.theme.style.boxShadow};
  animation: FadeIn 0.1s ease-in;

  @keyframes FadeIn {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const SocialImg = styled.img`
  width: 50px;
  padding: 6px;
  border-radius: 30px;
`;
const SOCIAL_LIST = [
  { id: 1, url: './images/facebook.png' },
  { id: 2, url: './images/kakaotalk.png' },
  { id: 3, url: './images/naverblog2.png' },
  { id: 4, url: './images/link1.png' },
];
