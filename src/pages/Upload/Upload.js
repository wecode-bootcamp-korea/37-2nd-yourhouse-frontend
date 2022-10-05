import React, { useState } from 'react';
import { TagsInput } from 'react-tag-input-component';
import styled from 'styled-components';

const SIZES = [
  { id: 0, text: '10평 미만' },
  { id: 1, text: '10평대' },
  { id: 2, text: '20평대' },
  { id: 3, text: '30평대' },
  { id: 4, text: '40평대' },
  { id: 5, text: '50평대 이상' },
];

const RESIDENCE = [
  { id: 0, text: '원룸&오피스텔' },
  { id: 1, text: '아파트' },
  { id: 2, text: '빌라&연립' },
  { id: 3, text: '단독주택' },
  { id: 4, text: '사무공간' },
  { id: 5, text: '상업공간' },
  { id: 6, text: '기타' },
];

const STYLE = [
  { id: 0, text: '모던' },
  { id: 1, text: '북유럽' },
  { id: 2, text: '빈티지' },
  { id: 3, text: '내추럴' },
  { id: 4, text: '프로방스&로맨틱' },
  { id: 5, text: '클래식&앤틱' },
  { id: 6, text: '한국&아시아' },
  { id: 7, text: '유니크' },
];

const SPACE = [
  { id: 0, text: '원룸' },
  { id: 1, text: '거실' },
  { id: 2, text: '침실' },
  { id: 3, text: '주방' },
  { id: 4, text: '욕실' },
  { id: 5, text: '아이방' },
  { id: 6, text: '드레스룸' },
  { id: 7, text: '서재&작업실' },
  { id: 8, text: '베란다' },
  { id: 9, text: '사무공간' },
  { id: 10, text: '상업공간' },
];

const Upload = () => {
  const [selectedSize, setSelectedSize] = useState();
  const [selectedResidence, setSelectedResidence] = useState();
  const [selectedStyle, setSelectedStyle] = useState();
  const [selectedSpace, setSelectedSpace] = useState();
  const [hagTags, setHashTags] = useState([]);
  const [clickPhotoOrVideo, setClickPhotoOrVideo] = useState(false);

  const onClickPhotoOrVideo = () => {
    setClickPhotoOrVideo(current => !current);
  };

  return (
    <Container>
      <Nav>
        <LogoBox>
          <LogoImg src="/images/logo.png" alt="yourhouse_logo" />
        </LogoBox>
        <UploadBtn>올리기</UploadBtn>
      </Nav>
      <BorderGray />
      <ImageOrVideo>
        <Image isClicked={clickPhotoOrVideo} onClick={onClickPhotoOrVideo}>
          사진
        </Image>
        <Video isClicked={clickPhotoOrVideo} onClick={onClickPhotoOrVideo}>
          동영상
        </Video>
      </ImageOrVideo>
      <BorderGray />
      <ContentBox>
        <SelectBox marginRight="15px">
          <Select
            onChange={e => setSelectedSize(e.target.value)}
            isSelected={!!selectedSize}
          >
            <Option value="none" hidden>
              평수
            </Option>
            {SIZES.map(({ id, text }) => (
              <Option key={id} value={id}>
                {text}
              </Option>
            ))}
          </Select>
          <DownArrowImg src="/images/downArrow.png" alt="downArrowImg" />
        </SelectBox>
        <SelectBox marginRight="15px">
          <Select
            onChange={e => setSelectedResidence(e.target.value)}
            isSelected={!!selectedResidence}
          >
            <Option value="none" hidden>
              주거형태
            </Option>
            {RESIDENCE.map(({ id, text }) => (
              <Option key={id} value={id}>
                {text}
              </Option>
            ))}
          </Select>
          <DownArrowImg src="/images/downArrow.png" alt="downArrowImg" />
        </SelectBox>
        <SelectBox marginRight="15px">
          <Select
            onChange={e => setSelectedStyle(e.target.value)}
            isSelected={!!selectedStyle}
          >
            <Option value="none" hidden>
              스타일
            </Option>
            {STYLE.map(({ id, text }) => (
              <Option key={id} value={id}>
                {text}
              </Option>
            ))}
          </Select>
          <DownArrowImg src="/images/downArrow.png" alt="downArrowImg" />
        </SelectBox>
      </ContentBox>
      <UploadBox>
        <UploadImg htmlFor="upload">
          <UploadInput type="file" id="upload" />
          <CameraIcon src="/images/camera.png" alt="cameraIcon" />
          <UploadImgTitle>
            {clickPhotoOrVideo ? '사진' : '동영상'} 올리기
          </UploadImgTitle>
          <MaxTenImgs>
            {clickPhotoOrVideo
              ? '(* 최대 10장까지)'
              : '(* 5GB 미만, 3초~60초 길이의 \n세로 영상을 권장합니다.)'}
          </MaxTenImgs>
        </UploadImg>
        <UploadText>
          <SelectBox marginRight="0">
            <Select
              onChange={e => setSelectedSpace(e.target.value)}
              isSelected={!!selectedSpace}
            >
              <Option value="none" hidden>
                공간 (필수)
              </Option>
              {SPACE.map(({ id, text }) => (
                <Option key={id} value={id}>
                  {text}
                </Option>
              ))}
            </Select>
            <DownArrowImg src="/images/downArrow.png" alt="downArrowImg" />
          </SelectBox>
          <UploadTextArea placeholder="사진에 대해 설명해주세요." />
          <TagsInput
            value={hagTags}
            onChange={setHashTags}
            name="hagtag"
            placeHolder="키워드"
          />
        </UploadText>
      </UploadBox>
    </Container>
  );
};

export default Upload;

const Container = styled.form`
  margin: 0 auto;
`;

const Nav = styled.nav`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  width: 80%;
  height: 79px;
  margin: 0 auto;
`;

const LogoBox = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  width: 120px;
  height: 50px;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const UploadBtn = styled.button`
  color: ${props => props.theme.style.white};
  background-color: ${props => props.theme.style.skyBlue};
  width: 135px;
  height: 50px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

const BorderGray = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e1e1e1;
`;

const ImageOrVideo = styled.ul`
  ${props => props.theme.variables.flex('', '', 'center')};
  color: ${props => props.theme.style.deepGrey};
  width: 80%;
  height: 60px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 700;
`;

const Image = styled.li`
  color: ${({ isClicked }) => (isClicked ? '#35C5F0' : '#000000')};
  border-bottom: ${({ isClicked }) =>
    isClicked ? '2px solid #35C5F0' : 'none'};
  margin-right: 15px;
  padding: 15px 5px;
  line-height: 30px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.style.skyBlue};
  }
`;

const Video = styled.li`
  color: ${({ isClicked }) => (isClicked ? '#000000' : '#35C5F0')};
  border-bottom: ${({ isClicked }) =>
    isClicked ? 'none' : '2px solid #35C5F0'};
  margin-right: 15px;
  padding: 15px 5px;
  line-height: 30px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.style.skyBlue};
  }
`;

const ContentBox = styled.div`
  ${props => props.theme.variables.flex('', '', 'center')};
  width: 65%;
  margin: 30px auto 0;
`;

const SelectBox = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  flex-wrap: wrap;
  position: relative;
  margin-right: ${props => props.marginRight};
`;

const Select = styled.select`
  width: 100%;
  color: ${({ isSelected }) => !isSelected && '#bdbdbd'};
  padding: 10px 40px 10px 20px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  font-size: 15px;
  outline: none;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all 300ms ease;

  &:hover {
    background-color: ${props => props.theme.style.lightGrey};
    border: 1px solid #c1c1c1;

    & > * {
      background-color: ${props => props.theme.style.white};
    }
  }
`;

const Option = styled.option`
  color: ${props => props.theme.style.deepGrey};

  &:disabled {
    color: #cacaca;
  }
`;

const DownArrowImg = styled.img`
  position: absolute;
  top: 8px;
  right: 5px;
  padding: 5px 10px;
  opacity: 0.5;
`;

const UploadBox = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')};
  width: 65%;
  margin: 50px auto 0;
`;

const UploadImg = styled.label`
  ${props => props.theme.variables.flex('column', 'center', 'center')};
  width: 49%;
  height: 350px;
  border: 1px dashed rgb(218, 220, 224);
  border-radius: 4px;
  background-color: ${props => props.theme.style.lightGrey};
  transition: all 300ms ease;

  &:hover {
    opacity: 0.6;
  }
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadText = styled.div`
  width: 49%;
  .rti--container {
    --rti-main: transparent;
    margin-top: 10px;
    padding: 0;
    border: none;
  }

  .rti--tag {
    padding: 10px;
    background-color: #f5f5f5;
  }

  .rti--tag::before {
    content: '#';
    margin-right: 5px;
  }

  .rti--tag:hover {
    color: #000000;
  }
`;

const CameraIcon = styled.img`
  width: 48px;
`;

const UploadImgTitle = styled.h3`
  color: #747474;
  font-weight: 700;
  margin: 10px 0 5px;
`;

const MaxTenImgs = styled.h6`
  width: 200px;
  color: #828c94;
  text-align: center;
  font-size: 12px;
  line-height: 18px;
`;

const UploadTextArea = styled.textarea`
  width: 100%;
  height: 180px;
  margin-top: 15px;
  padding: 15px;
  border: 1px solid #e4e4e4;
  color: ${props => props.theme.style.black};
  border-radius: 4px;
  font-size: 15px;
  line-height: 21px;
  resize: none;
  outline: none;
  -webkit-appearance: none;

  &::placeholder {
    color: #bdbdbd;
  }

  &:hover {
    background-color: ${props => props.theme.style.lightGrey};
    border: 1px solid #c1c1c1;

    & > * {
      background-color: ${props => props.theme.style.white};
    }
  }

  &:focus {
    background-color: ${props => props.theme.style.white};
    border: 3px solid #aadeee;
  }
`;
