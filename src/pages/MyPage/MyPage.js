import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MyPageDropdown from './MyPageDropdown/MyPageDropdown';
import MyPageContent from './MyPageContent/MyPageContent';
import { Link } from 'react-router-dom';

const MyPage = () => {
  const accessToken = localStorage.getItem('token');
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);
  const [isDropdown, setIsDropdown] = useState(false);

  const closeDropdownMenu = () => {
    setIsDropdown(false);
  };
  useEffect(() => {
    fetch('http://10.58.52.78:3000/profile', {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjUzOTIyODB9.Tc3gQja-ZlpQ4J3wuat73yntLoI_RAngbBH5SVyvmLM',
      },
    })
      .then(res => res.json())
      .then(data => setProfile(data.profile));
  }, []);

  useEffect(() => {
    fetch(`http://10.58.52.78:3000/profile/post`, {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjUzOTIyODB9.Tc3gQja-ZlpQ4J3wuat73yntLoI_RAngbBH5SVyvmLM',
      },
    })
      .then(res => res.json())
      .then(data => (console.log(data.posts), setPosts(data.posts)));
  }, []);

  const fetchData = name => {
    if (name === '좋아요') {
      fetch('http://10.58.52.78:3000/profile/like', {
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjUzOTIyODB9.Tc3gQja-ZlpQ4J3wuat73yntLoI_RAngbBH5SVyvmLM',
        },
      })
        .then(res => res.json())
        .then(data => (console.log(data.posts), setPosts(data.posts)));
    }
  };

  return (
    <>
      <Nav>
        {NAV_LIST.map(list => {
          return <NavList key={list.id}>{list.name}</NavList>;
        })}
      </Nav>
      {/*  */}
      <Top>
        {LIST_TOP.map(data => {
          return (
            <ListTop key={data.id} onClick={() => fetchData(data.name)}>
              {data.name}
            </ListTop>
          );
        })}
      </Top>
      <Box>
        <Contents>
          <UserWrap>
            <UserCont>
              <User>
                <Social
                  src="./images/share.png"
                  onClick={() => {
                    setIsDropdown(prev => !prev);
                  }}
                  // closeDropdownMenu={closeDropdownMenu}
                />
                {isDropdown && (
                  <MyPageDropdown closeDropdownMenu={closeDropdownMenu} />
                )}
                <UserProfile>
                  <ProfileImg
                    src={
                      profile.profile_image
                        ? profile.profile_image
                        : './images/user.png'
                    }
                    alt="유저프로필"
                  />
                </UserProfile>
                <UserId>{profile.nickname}</UserId>
                <FollowWrap>
                  <FollowBox>
                    <Follow>팔로워</Follow>
                    <FollowNum>{profile.follow}</FollowNum>
                  </FollowBox>
                  <FollowingBox>
                    <Following>팔로잉</Following>
                    <FollowingNum>{profile.follower}</FollowingNum>
                  </FollowingBox>
                </FollowWrap>
                <OptionWrap>
                  <Option>설정</Option>
                </OptionWrap>
                <UserAction>
                  <Bookmark>
                    <BookmarkImg src="./images/ribbon3.png" alt="북마크" />
                    <Scrap>스크랩북</Scrap>
                    <BookmarkNum>0</BookmarkNum>
                  </Bookmark>
                  <Like>
                    <LikeImg src="./images/heart2.png" alt="좋아요" />
                    <Liked>좋아요</Liked>
                    <Num>{profile.likes}</Num>
                  </Like>
                  <Coupon>
                    <CouponImg src="./images/coupon2.png" alt="쿠폰" />
                    <GetCoupon>내 쿠폰</GetCoupon>
                    <CouponNum>0</CouponNum>
                  </Coupon>
                </UserAction>
              </User>
              <Banner>
                친구 초대하고 <Point>5,000P</Point> 받기
                <Next src="./images/next.png" alt="넘기기" />
              </Banner>
            </UserCont>
          </UserWrap>
          <MyPageContent posts={posts} />
        </Contents>
      </Box>
    </>
  );
};

export default MyPage;

const Nav = styled.div`
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.style.deepGrey};
  font-size: 20px;
  font-weight: 600;
  height: 60px;
  border-bottom: 1px solid rgb(218, 220, 224);
`;

const NavList = styled.div`
  z-index: 1000;
  padding: 0 15px 0 15px;
  cursor: pointer;

  :hover {
    color: #35c5f0;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.style.deepGrey};
  font-weight: 600;
  height: 60px;
  border-bottom: 1px solid rgb(218, 220, 224);
`;

const ListTop = styled.div`
  padding: 0 15px 0 15px;
  cursor: pointer;

  :hover {
    color: #35c5f0;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Contents = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
`;
const UserWrap = styled.div`
  width: 265px;
`;

const UserCont = styled.div`
  position: sticky;
  top: 80px;
`;

const Social = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  opacity: 0.7;
  cursor: pointer;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 410px;
  padding: 30px 25px 18px;
  border: 1px solid rgb(218, 220, 224);
  border-radius: 5px;
`;
const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-top: 15px;
  border-radius: 5px;
  font-weight: 400;
  color: ${props => props.theme.style.deepGrey};
  background-color: rgb(239, 251, 255);
  transition: background-color 0.5s ease 0s;
  cursor: pointer;
  :hover {
    background-color: #d7f3fc;
  }
`;

const Next = styled.img`
  width: 30px;
  padding-left: 10px;
`;

const Point = styled.span`
  margin: 0 5px 0 5px;
  color: ${props => props.theme.style.skyBlue};
  font-weight: 700;
`;

const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  width: 217px;
  height: 130px;
`;

const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const UserId = styled.div`
  width: 217px;
  height: 30px;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  color: rgb(41, 41, 41);
  background-color: white;
  padding: 20px 0 20px 0;
`;

const FollowWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 217px;
  height: 20px;
  padding: 20px 0 30px 0;
`;
const OptionWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(218, 220, 224);
`;
const Option = styled.button`
  width: 55px;
  height: 32px;
  background-color: white;
  border: 1px solid rgb(218, 220, 224);
  border-radius: 5px;

  :hover {
    background-color: ${props => props.theme.style.lightGrey};
  }
`;

const FollowBox = styled.div`
  display: flex;

  font-size: 13px;
  color: ${props => props.theme.style.deepGrey};
`;
const Follow = styled.div`
  padding-right: 5px;
  color: rgb(130, 140, 148);
`;

const FollowNum = styled.div`
  padding-right: 5px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

const FollowingBox = styled.div`
  display: flex;
  font-size: 13px;
  color: ${props => props.theme.style.deepGrey};
`;

const Following = styled.div`
  padding-right: 5px;
  color: rgb(130, 140, 148);
`;

const FollowingNum = styled.div`
  padding-right: 5px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

const UserAction = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 20px;
  cursor: pointer;
`;
const Bookmark = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2;

  :hover {
    opacity: 0.5;
  }
`;
const BookmarkImg = styled.img`
  opacity: 0.9;
  width: 28px;
  height: 28px;
`;
const Scrap = styled.div`
  font-size: 13px;

  color: ${props => props.theme.style.deepGrey};
`;
const BookmarkNum = styled.div`
  color: ${props => props.theme.style.deepGrey};
  font-size: 13px;
  font-weight: 800;
`;

const LikeImg = styled.img`
  opacity: 0.9;
  width: 28px;
  height: 28px;
`;
const Like = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2;

  :hover {
    opacity: 0.5;
  }
`;
const Liked = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${props => props.theme.style.deepGrey};
`;
const Num = styled.div`
  color: ${props => props.theme.style.deepGrey};
  font-size: 13px;
  font-weight: 800;
`;
const Coupon = styled(Like)``;
const CouponImg = styled.img`
  opacity: 0.9;
  width: 28px;
  height: 28px;
`;

const GetCoupon = styled.div`
  font-size: 13px;
  color: ${props => props.theme.style.deepGrey};
`;

const CouponNum = styled.div`
  color: ${props => props.theme.style.deepGrey};
  font-size: 13px;
  font-weight: 800;
`;

const NAV_LIST = [
  { id: 1, name: '프로필' },
  { id: 2, name: '나의 쇼핑' },
  { id: 3, name: '나의 리뷰' },
  { id: 4, name: '설정' },
];

const LIST_TOP = [
  { id: 1, name: '사진' },
  { id: 2, name: '좋아요' },
  { id: 3, name: '노하우' },
  { id: 4, name: '질문과답변' },
  { id: 5, name: '스크랩북' },
  { id: 6, name: '집들이' },
];
