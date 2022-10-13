import React, { useState, useRef } from 'react';
import { TagsInput } from 'react-tag-input-component';
import MakerModal from './MakerModal';
import styled from 'styled-components';

const UploadList = ({
  handleUploadImg,
  clickPhotoOrVideo,
  space,
  uploadedImgs,
  image,
  trackPos,
  position,
  handleInput,
  selectedSpace,
  comment,
  handleComment,
  handleHashtag,
  handlePosition,
  handleProductId,
  marker,
  uploadInfo,
}) => {
  const imgRef = useRef(null);
  const [isTagged, setIsTagged] = useState(false);
  const [isClickedModal, setIsClickedModal] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);

  const handleProductModal = () => {
    setOpenProductModal(current => !current);
  };

  const handleTagBtn = e => {
    e.preventDefault();
    setIsTagged(current => !current);
  };

  const handleModal = e => {
    e.preventDefault();
    if (!isTagged) return;

    setIsClickedModal(current => !current);

    handlePosition({
      x: (
        (e.clientX - e.target.getBoundingClientRect().left) /
        imgRef.current?.offsetWidth
      ).toFixed(4),
      y: (
        (e.clientY - e.target.getBoundingClientRect().top) /
        imgRef.current?.offsetHeight
      ).toFixed(4),
    });
  };

  return (
    <UploadContents>
      {uploadedImgs.length === 0 ? (
        <UploadImg htmlFor="upload">
          <UploadInput
            type="file"
            id="upload"
            multiple
            onChange={handleUploadImg}
          />
          <PreviousImg>
            <CameraIcon src="/images/camera.png" alt="cameraIcon" />
            <UploadImgTitle>
              {clickPhotoOrVideo ? '사진' : '동영상'} 올리기
            </UploadImgTitle>
            <MaxTenImgs>
              {clickPhotoOrVideo
                ? '(* 최대 10장까지)'
                : '(* 5GB 미만, 3초~60초 길이의 \n세로 영상을 권장합니다.)'}
            </MaxTenImgs>
          </PreviousImg>
        </UploadImg>
      ) : (
        <UploadImg as="div" ref={imgRef}>
          {isTagged && (
            <TagText>사진을 클릭하여 상품 태그를 등록해보세요.</TagText>
          )}
          {isTagged && isClickedModal && (
            <MakerModal
              onClose={() => setIsClickedModal(false)}
              position={position}
              trackPos={trackPos}
              parentHeight={imgRef.current?.offsetHeight}
              parentWidth={imgRef.current?.offsetWidth}
              handleProductId={handleProductId}
            />
          )}
          {!isClickedModal && marker.productId && (
            <>
              <PlusBtn
                onClick={handleProductModal}
                markerX={marker.x}
                markerY={marker.y}
              >
                +
              </PlusBtn>
              <ProductModal
                openProductModal={openProductModal}
                markerX={marker.x}
                markerY={marker.y}
              >
                <CircleProductInfo>
                  <CircleProductImg
                    src={
                      uploadInfo.productInfo.find(
                        el => el.id === uploadInfo.marker.productId
                      ).image
                    }
                  />

                  <CircleProductText>
                    <Brand>
                      {
                        uploadInfo.productInfo.find(
                          el => el.id === uploadInfo.marker.productId
                        ).name
                      }
                    </Brand>
                    <Description>
                      {
                        uploadInfo.productInfo.find(
                          el => el.id === uploadInfo.marker.productId
                        ).description
                      }
                    </Description>
                  </CircleProductText>
                </CircleProductInfo>
              </ProductModal>
            </>
          )}
          <ShowImgBox>
            <ShowImgIcons>
              <ShowImgIcon src="/images/reload.png" />
              <ShowImgIcon src="/images/trash-bin.png" />
              <ShowImgIcon src="/images/up-arrow.png" />
              <ShowImgIcon src="/images/down-arrow.png" />
            </ShowImgIcons>
            <TagBtn onClick={handleTagBtn}>
              {isTagged ? '편집완료' : '+ 상품태그하기'}
            </TagBtn>
          </ShowImgBox>
          <ShowImg src={image} onClick={handleModal} />
        </UploadImg>
      )}
      <UploadText>
        <SelectBox marginRight="0">
          <Select
            onChange={handleInput}
            isSelected={!!selectedSpace}
            name="space"
          >
            <Option value="none" hidden>
              공간 (필수)
            </Option>
            {space.map(({ id, text }) => (
              <Option key={id} value={id}>
                {text}
              </Option>
            ))}
          </Select>
          <DownArrowImg src="/images/downArrow.png" alt="downArrowImg" />
        </SelectBox>
        <UploadTextArea
          placeholder="사진에 대해 설명해주세요."
          value={comment}
          name="comment"
          onChange={handleComment}
        />
        <TagsInput
          onChange={handleHashtag}
          name="hagtag"
          placeHolder="키워드"
        />
      </UploadText>
    </UploadContents>
  );
};

export default UploadList;

const UploadContents = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'flex-start')};
  margin-bottom: 50px;
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

const UploadInput = styled.input`
  display: none;
`;

const UploadImg = styled.label`
  position: relative;
  width: 49%;
  border-radius: 4px;
  background-color: ${props => props.theme.style.lightGrey};
  transition: all 300ms ease;
`;

const PreviousImg = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')};
  width: 100%;
  height: 300px;
  border: 1px dashed rgb(218, 220, 224);

  &:hover {
    opacity: 0.6;
  }
`;

const TagText = styled.h1`
  position: absolute;
  top: 15px;
  width: 100%;
  color: ${props => props.theme.style.white};
  font-size: 14px;
  text-align: center;
  text-shadow: rgb(21 25 29 / 50%) 0px 1px 4px;
`;

const PlusBtn = styled.div`
  color: ${props => props.theme.style.white};
  background-color: ${props => props.theme.style.skyBlue};
  position: absolute;
  top: ${props => props.markerY * 100}%;
  left: ${props => props.markerX * 100}%;
  width: 25px;
  height: 25px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  z-index: 20;
`;

const ShowImgBox = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.54));
`;

const ShowImgIcons = styled.div`
  padding: 12px;
`;

const ShowImgIcon = styled.img`
  width: 20px;
  margin: 10px;
`;

const TagBtn = styled.button`
  color: ${props => props.theme.style.white};
  background-color: ${props => props.theme.style.skyBlue};
  margin-right: 20px;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 18px;
  font-weight: 700;
`;

const ShowImg = styled.img`
  width: 100%;
  object-fit: cover;
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
    outline: 3px solid #aadeee;
  }
`;

const ProductModal = styled.div`
  display: ${props => (props.openProductModal ? 'block' : 'none')};
  position: absolute;
  top: ${props => props.markerY * 100}%;
  left: ${props => props.markerX * 100}%;
  background-color: ${props => props.theme.style.white};
  width: 200px;
  height: 100px;
  padding: 10px;
  transform: translate(-50%, 30px);
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
  border-radius: 4px;
`;

const CircleProductInfo = styled.div`
  ${props => props.theme.variables.flex('', 'space-evenly', 'center')}
`;

const CircleProductImg = styled.img`
  width: 80px;
  height: 80px;
  background-color: tomato;
`;

const CircleProductText = styled.div`
  width: calc(100% - 80px);
  padding-left: 10px;
`;

const Brand = styled.p`
  font-size: 11px;
  line-height: 17px;
  color: #757575;
`;

const Description = styled.p`
  font-size: 13px;
  line-height: 20px;
`;
