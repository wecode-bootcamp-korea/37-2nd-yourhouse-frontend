import React from 'react';
import styled from 'styled-components';

const ProductList = ({
  product,
  handleProductId,
  onClose,
  searchProductInfo,
}) => {
  const { id, name, image, description } = product;

  const selectProductBtn = e => {
    handleProductId(e, id, searchProductInfo);
    onClose();
  };
  return (
    <ProductListContainer
      onClick={e => selectProductBtn(e, id, searchProductInfo)}
    >
      <ProductPreview>
        <ProductImg src={image} />
      </ProductPreview>
      <ProductInfo>
        <ProductTitle>{name}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
      </ProductInfo>
      <div>
        <ProductBtn>선택</ProductBtn>
      </div>
    </ProductListContainer>
  );
};

export default ProductList;

const ProductListContainer = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  width: 100%;
  height: 80px;
  padding: 5px 15px;
  background: none;
  outline: none;
  border: none;
  box-sizing: border-box;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.1s ease 0s;
  overflow-y: hidden;

  &:hover {
    background-color: #fafafa;
  }
`;

const ProductPreview = styled.div`
  position: relative;
`;

const ProductImg = styled.img`
  width: 70px;
  height: 70px;
  border: 1px solid rgba(130, 140, 148, 0.33);
  border-radius: 22px;
  background-position: center;
  background-size: cover;
`;

const ProductInfo = styled.div`
  margin-left: 10px;
  flex-grow: 1;
  align-self: stretch;
`;

const ProductTitle = styled.h1`
  color: #424242;
  font-size: 11px;
  font-weight: 700;
  line-height: 21px;
`;

const ProductDescription = styled.span`
  color: #424242;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  height: 38px;
  overflow: hidden;
`;

const ProductBtn = styled.button`
  color: ${props => props.theme.style.white};
  background-color: ${props => props.theme.style.skyBlue};
  width: 60px;
  margin-left: 10px;
  padding: 6px 3px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  transition: background-color 0.1s;
`;
