import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import ProductList from './ProductList';
import styled from 'styled-components';

const BTN_SIZE = 25;

const MakerModal = ({
  onClose,
  position,
  trackPos,
  parentHeight,
  parentWidth,
  handleProductId,
}) => {
  const [searchProduct, setSearchProduct] = useState('');
  const [searchProductInfo, setSearchProductInfo] = useState([]);

  useEffect(() => {
    if (searchProduct.length > 0) {
      fetch('data/searchProduct.json')
        // fetch(`http://10.58.52.78:3000/search/product?product=${searchProduct}`)
        .then(response => response.json())
        .then(result => setSearchProductInfo(result.products));
    }
  }, [searchProduct]);

  const onChangeSearch = e => {
    e.preventDefault();
    setSearchProduct(e.target.value);
  };

  return (
    <Draggable
      bounds={{
        left: BTN_SIZE / 2,
        top: BTN_SIZE / 2,
        right: parentWidth - BTN_SIZE / 2,
        bottom: parentHeight - BTN_SIZE / 2,
      }}
      defaultPosition={{
        x: position.x * parentWidth,
        y: position.y * parentHeight,
      }}
      onStop={(_, data) =>
        trackPos(data.lastX / parentWidth, data.lastY / parentHeight)
      }
    >
      <Maker>
        <PlusBtn>+</PlusBtn>
        <Modal>
          <TriangleBorder />
          <TriangleFill />
          <SearchBox>
            <SearchInput
              onChange={onChangeSearch}
              value={searchProduct}
              placeholder="상품명을 검색해보세요."
            />
            <CloseBtn onClick={onClose}>취소</CloseBtn>
          </SearchBox>
          <ProductLists>
            {searchProductInfo.length === 0 && searchProduct === '' && (
              <Preview>
                <PreviewText>
                  구매한 상품이 없습니다.
                  <br />
                  상품을 검색해보세요.
                </PreviewText>
              </Preview>
            )}
            {searchProductInfo.length === 0 && searchProduct !== '' && (
              <>검색 결과가 없습니다.</>
            )}
            {searchProductInfo.map(product => (
              <ProductList
                key={product.id}
                product={product}
                handleProductId={handleProductId}
                onClose={onClose}
                searchProductInfo={searchProductInfo}
              />
            ))}
          </ProductLists>
        </Modal>
      </Maker>
    </Draggable>
  );
};

export default MakerModal;

const Maker = styled.div`
  position: relative;
  z-index: 10;
`;

const Modal = styled.div`
  position: absolute;
  width: 370px;
  transform: translate(-50%, 30px);
  border-radius: 10px;
  background-color: white;
  outline: 1px solid #e1e1e1;
  box-shadow: 0 4px 10px 0 rgb(63 71 77 / 20%);
  z-index: 10;
`;

const PlusBtn = styled.div`
  color: ${props => props.theme.style.white};
  background-color: ${props => props.theme.style.skyBlue};
  position: absolute;
  width: ${BTN_SIZE}px;
  height: ${BTN_SIZE}px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  z-index: 20;
`;

const TriangleFill = styled.div`
  position: absolute;
  top: -9px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-bottom: 13px solid #ffffff;
  border-top: 13px solid transparent;
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  z-index: 10;
`;

const TriangleBorder = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-bottom: 10px solid #e1e1e1;
  border-top: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
`;

const ProductLists = styled.div`
  height: 400px;
  overflow-y: scroll;
  margin-bottom: 15px;
`;

const Preview = styled.div`
  ${props => props.theme.variables.flex('column', 'center', '')};
  height: inherit;
  padding: 30px 0;
`;

const PreviewText = styled.div`
  text-align: center;
  font-size: 15px;
  line-height: 23px;
  color: #9e9e9e;
`;

const SearchBox = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  padding: 20px;
`;

const SearchInput = styled.input`
  width: 85%;
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  outline: none;

  &::placeholder {
    color: #b9b9b9;
  }

  &:focus {
    outline: 2px solid #aadeee;
  }
`;

const CloseBtn = styled.button`
  width: 15%;
  margin-left: 10px;
  border: none;
  outline: none;
  background-color: transparent;
`;
