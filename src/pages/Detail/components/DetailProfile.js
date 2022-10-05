import React from 'react';
import styled from 'styled-components';

const DetailProfile = () => {
  return (
    <DetailProfileBox>
      <DetailProfileCtn>
        <UserInfoBox>
          <UserProfilePic />
          <InfoBox>
            <UserId>오늘도느그집</UserId>
            <Date>1일 전</Date>
          </InfoBox>
        </UserInfoBox>
        <Follow>&#43;팔로우</Follow>
      </DetailProfileCtn>
      <UserPicList>
        <UserPic>
          <UserImg
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="제품"
          />
        </UserPic>
        <UserPic>
          <UserImg
            src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="제품"
          />
        </UserPic>
        <UserPic>
          <UserImg
            src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="제품"
          />
        </UserPic>
        <UserPic>
          <UserImg
            src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="제품"
          />
        </UserPic>
      </UserPicList>
    </DetailProfileBox>
  );
};

export default DetailProfile;

const DetailProfileBox = styled.div`
  width: 720px;
  margin: 0 auto;
`;

const DetailProfileCtn = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}

  width: 720px;
  margin-top: 40px;
`;

const UserProfilePic = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  background-image: url(https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60);
  background-size: cover;
  background-position: center;
`;

const UserInfoBox = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  margin-left: 10px;
`;

const InfoBox = styled.div`
  margin-left: 10px;
`;
const UserId = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

const Date = styled.p`
  margin-top: 4px;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.theme.style.middleGrey};
`;

const Follow = styled.button`
  width: 94px;
  height: 40px;
  font-size: 17px;
  border: 1px solid white;
  border-radius: 4px;
  color: ${props => props.theme.style.white};
  background-color: ${props => props.theme.style.skyBlue};
  &:hover {
    background: #5352ed;
  }
`;

const UserPicList = styled.ul`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  margin-bottom: 50px;
`;

const UserPic = styled.li`
  height: 174px;
  width: 300px;
  margin: 9px;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  border-radius: ${props => props.theme.style.borderRadius};
`;
