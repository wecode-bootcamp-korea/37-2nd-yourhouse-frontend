import React from 'react';
import styled from 'styled-components';

const DetailComment = () => {
  return (
    <DetailComments>
      <CommentCount>
        댓글<CommentCountNum>2</CommentCountNum>
      </CommentCount>
      <CommentInputCtn>
        <CommentProfile
          src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcmFjdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="프로필"
        />
        <CommentInputBox>
          <CommentInput placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)" />
          <CommentButton>입력</CommentButton>
        </CommentInputBox>
      </CommentInputCtn>
      <Comment>댓글이입력되는 창</Comment>
      <DetailPageBtnBox>
        <PageBtnLeft> &#60;</PageBtnLeft>
        <PageBtn>1</PageBtn>
        <PageBtnRight> &#62;</PageBtnRight>
      </DetailPageBtnBox>
    </DetailComments>
  );
};

export default DetailComment;

const DetailComments = styled.div`
  width: 720px;
  margin: 0 auto;
`;

const CommentCount = styled.p`
  margin: 0 0 16px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
`;

const CommentCountNum = styled.span`
  display: inline-block;
  padding-left: 8px;
  color: ${props => props.theme.style.skyBlue};
`;

const CommentInputCtn = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
`;

const CommentProfile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
  border-radius: 100%;
  border: 1px solid black;
`;

const CommentInputBox = styled.div`
  ${props => props.theme.variables.flex('', 'flex-end', 'center')}
  width: 678px;
  height: 46px;
  border-radius: ${props => props.theme.style.borderRadius};
  border: 1px solid #c2c8cc;
  color: rgb(194, 200, 204);
`;

const CommentInput = styled.input`
  padding: 0 9px;
  width: 630px;
  height: 44px;
  outline: none;
  border: 1px solid ${props => props.theme.style.white};
`;

const CommentButton = styled.button`
  width: 50px;
  height: 42px;
  font-size: 16px;
  background: none transparent;
  border: 1px solid ${props => props.theme.style.white};
  color: rgb(194, 200, 204);
`;

const Comment = styled.div`
  margin-top: 50px;
  border: 1px solid red;
  height: 400px;
`;
const DetailPageBtnBox = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  border: 1px solid red;
  margin-top: 20px;
`;

const PageBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  color: ${props => props.theme.style.white};
  background: ${props => props.theme.style.skyBlue};
  border: none;
  margin-inline: 10px;
  &:hover {
    opacity: 4;
  }
`;

const PageBtnLeft = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: none;
  color: ${props => props.theme.style.white};
`;

const PageBtnRight = styled(PageBtnLeft)``;
