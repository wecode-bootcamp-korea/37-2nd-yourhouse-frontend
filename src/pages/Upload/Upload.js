import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UploadList from './UploadList';
import styled from 'styled-components';
import { SIZES, RESIDENCE, STYLE, SPACE } from './data/selectFilter';

const Upload = () => {
  const [clickPhotoOrVideo, setClickPhotoOrVideo] = useState(true);
  const [uploadedImgs, setUploadedImgs] = useState([]);
  const [uploadInfo, setUploadInfo] = useState({
    ImgUrl: '',
    marker: { x: null, y: null, productId: '' },
    productInfo: [],
    size: '',
    residence: '',
    style: '',
    space: '',
    comment: '',
    hashTag: [],
  });

  const uploadForm = new FormData();
  uploadForm.append('marker', JSON.stringify(uploadInfo.marker));
  uploadForm.append('size', uploadInfo.size);
  uploadForm.append('residence', uploadInfo.residence);
  uploadForm.append('style', uploadInfo.style);
  uploadForm.append('img', uploadInfo.ImgUrl);
  uploadForm.append('space', uploadInfo.space);
  uploadForm.append('comment', uploadInfo.comment);
  uploadForm.append('hashTag', JSON.stringify(uploadInfo.hashTag));

  const { marker, size, residence, style, space, comment, hashTag } =
    uploadInfo;

  const handleInput = e => {
    const { name, value } = e.target;
    setUploadInfo(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleComment = e => {
    setUploadInfo(prev => {
      return { ...prev, comment: e.target.value };
    });
  };

  const handleHashtag = e => {
    setUploadInfo(prev => {
      return { ...prev, hashTag: e };
    });
  };

  const trackPos = (x, y) => {
    setUploadInfo({
      ...uploadInfo,
      marker: {
        ...uploadInfo.marker,
        x: x.toFixed(4),
        y: y.toFixed(4),
      },
    });
  };

  const handlePosition = ({ x, y }) => {
    setUploadInfo({
      ...uploadInfo,
      marker: {
        ...uploadInfo.marker,
        x,
        y,
      },
    });
  };

  console.log(uploadInfo);
  const handleProductId = (e, id, searchProductInfo) => {
    e.preventDefault();

    setUploadInfo({
      ...uploadInfo,
      marker: {
        ...uploadInfo.marker,
        productId: id,
      },
      productInfo: searchProductInfo,
    });
  };

  const onClickPhotoOrVideo = () => {
    if (uploadedImgs.length > 0) {
      alert(
        '페이지를 벗어나시겠습니까? \n이 페이지를 벗어나면 작성한 내용은 모두 삭제됩니다.'
      );
      setUploadedImgs([]);
    }
    setClickPhotoOrVideo(current => !current);
  };

  const handleUploadImg = e => {
    e.preventDefault();
    const imageLists = e.target.files;
    let imageUrlLists = [...uploadedImgs];

    if (imageLists.length > 10) {
      alert('사진은 최대 10장까지 올릴 수 있습니다.');
      return;
    }

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }
    setUploadedImgs(imageUrlLists);
    setUploadInfo({ ...uploadInfo, ImgUrl: imageLists[0] });
  };

  const onSubmit = e => {
    e.preventDefault();

    fetch('http://10.58.52.71:3000/posting', {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
      },
      body: uploadForm,
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'post success') {
          alert('성공');
        } else {
          alert('실패');
        }
      });
  };

  return (
    <Container>
      <Nav>
        <NavWidth>
          <LogoBox>
            <Link to="/main">
              <LogoImg src="/images/logo.png" alt="yourhouse_logo" />
            </Link>
          </LogoBox>
          <UploadBtn onClick={onSubmit}>올리기</UploadBtn>
        </NavWidth>
      </Nav>
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
          <Select onChange={handleInput} isSelected={!!size} name="size">
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
            onChange={handleInput}
            isSelected={!!residence}
            name="residence"
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
          <Select onChange={handleInput} isSelected={!!style} name="style">
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
        {uploadedImgs.length === 0 ? (
          <UploadList
            handleUploadImg={handleUploadImg}
            clickPhotoOrVideo={clickPhotoOrVideo}
            space={SPACE}
            uploadedImgs={uploadedImgs}
            handleInput={handleInput}
            selectedSpace={space}
            comment={comment}
            handleComment={handleComment}
            hagTags={hashTag}
            handleHashtag={handleHashtag}
          />
        ) : (
          uploadedImgs.map((image, index) => (
            <UploadList
              key={index}
              image={image}
              handleUploadImg={handleUploadImg}
              clickPhotoOrVideo={clickPhotoOrVideo}
              space={SPACE}
              uploadedImgs={uploadedImgs}
              trackPos={trackPos}
              position={marker}
              handleInput={handleInput}
              selectedSpace={space}
              comment={comment}
              handleComment={handleComment}
              hagTags={hashTag}
              handleHashtag={handleHashtag}
              handlePosition={handlePosition}
              handleProductId={handleProductId}
              marker={marker}
              uploadInfo={uploadInfo}
            />
          ))
        )}
        <UploadPreview>
          {uploadedImgs.map((item, index) => (
            <PreviewImgs key={index}>
              <PreviewImg src={item} />
            </PreviewImgs>
          ))}
        </UploadPreview>
        {uploadedImgs.length > 0 && uploadedImgs.length < 10 && (
          <AddImgBtn htmlFor="upload">
            <UploadInput
              type="file"
              id="upload"
              multiple
              onChange={handleUploadImg}
            />
            추가하기
          </AddImgBtn>
        )}
      </UploadBox>
    </Container>
  );
};

export default Upload;

const Container = styled.form`
  margin: 0 auto 200px;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  padding: 15px 0;
  background-color: ${props => props.theme.style.white};
  border-bottom: 1px solid #e1e1e1;
  z-index: 1;
`;

const NavWidth = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  width: 60%;
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
  font-weight: 700;
`;

const ImageOrVideo = styled.ul`
  ${props => props.theme.variables.flex('', '', 'center')};
  color: ${props => props.theme.style.deepGrey};
  width: 60%;
  height: 60px;
  margin: 60px auto 0;
  font-size: 15px;
  font-weight: 700;
`;

const BorderGray = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e1e1e1;
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
  width: 50%;
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
  position: relative;
  width: 50%;
  margin: 50px auto 0;
`;

const UploadPreview = styled.ul`
  position: absolute;
  top: 0;
  left: -120px;
  width: 110px;
`;

const PreviewImgs = styled.li`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
  cursor: move;
`;

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AddImgBtn = styled.label`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  background-color: #f5f5f5;
  border: none;
  outline: none;
  color: ${props => props.theme.style.deepGrey};
  text-align: center;
  font-size: 17px;
  font-weight: 700;

  &:hover {
    opacity: 0.7;
  }
`;

const UploadInput = styled.input`
  display: none;
`;
