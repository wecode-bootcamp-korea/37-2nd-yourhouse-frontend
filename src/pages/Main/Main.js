import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      e => {
        setCurrentIndex(prev =>
          prev === MAIN_IMAGES.length - 4 ? 0 : prev + 1
        );
      },
      currentIndex === 0 ? 0 : 2000
    );

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <Container>
      <TextArea>
        <Title>
          공간을 통해 모든 사람들의
          <br />
          삶을 바꾸는 혁신
        </Title>
        <DetailText>
          공간을 바꾸면 인생이 바뀝니다. <br />
          우리는 모두의 라이프스타일에 영감을 줄 수 있도록 끊임없이 기술을
          혁신하고,
          <br />
          모두가 자신의 공간, 나아가 삶을 사랑하게 만드는 유례없는 도전을 하고
          있습니다.
        </DetailText>
      </TextArea>

      <ImageArea>
        <ViewWindow currentIndex={currentIndex}>
          {MAIN_IMAGES.map(item => (
            <ImageBox key={item.id}>
              <Image src={item.img} alt="유저가 올린 콘텐츠 사진" />
              <ImageDescription>
                너네집 유저 {item.userName}님의 콘텐츠
              </ImageDescription>
            </ImageBox>
          ))}
        </ViewWindow>
      </ImageArea>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  ${props => props.theme.variables.flex('column', '', '')}
  width: 1200px;
`;

const TextArea = styled.div`
  ${props => props.theme.variables.flex('column', '', '')};
  gap: 20px;
`;

const Title = styled.span`
  line-height: 1.4;
  font-size: 50px;
  font-weight: 600;
`;

const DetailText = styled(Title)`
  font-size: 20px;
  font-weight: 400;
`;

const ImageArea = styled.div`
  margin: 30px 0px 100px 0px;
`;

const ViewWindow = styled.div`
  ${props => props.theme.variables.flex('row', '', '')};
  width: 1200px;
  transition: ${props => (props.currentIndex ? `transform 1s ease-in` : null)};
  transform: ${props => `translateX(-${props.currentIndex * 420}px)`};
`;

const ImageBox = styled.div`
  position: relative;
  margin: 10px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 400px;
  height: 400px;
  border-radius: ${props => props.theme.style.borderRadius};
`;

const ImageDescription = styled.span`
  position: absolute;
  bottom: 8px;
  left: 8px;
  font-size: 13px;
  color: white;
`;

const MAIN_IMAGES = [
  { id: 1, userName: '지원', img: './images/MainImages/img1.jpg' },
  { id: 2, userName: '영태', img: './images/MainImages/img2.jpg' },
  { id: 3, userName: '석문', img: './images/MainImages/img3.jpg' },
  { id: 4, userName: '문정', img: './images/MainImages/img4.jpg' },
  { id: 5, userName: '우진', img: './images/MainImages/img5.jpg' },
  { id: 6, userName: '기석', img: './images/MainImages/img6.jpg' },
  { id: 7, userName: '재호', img: './images/MainImages/img7.jpg' },
  { id: 8, userName: '지원', img: './images/MainImages/img1.jpg' },
  { id: 9, userName: '영태', img: './images/MainImages/img2.jpg' },
  { id: 10, userName: '석문', img: './images/MainImages/img3.jpg' },
  { id: 11, userName: '문정', img: './images/MainImages/img4.jpg' },
];
