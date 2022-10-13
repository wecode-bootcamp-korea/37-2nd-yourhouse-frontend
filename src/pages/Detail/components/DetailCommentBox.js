import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailComment from './DetailComment';

const DetailFooter = ({ postId }) => {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);
  const [commentInfo, setCommentInfo] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const params = useParams();

  const paramsId = params.id;

  const movePage = pageNum => {
    searchParams.set('offset', (pageNum - 1) * 5);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/comment?postId=2&limit=${5}&offset=${0}`)
      // fetch(
      //   `http://10.58.52.71:3000/comment?postId=${paramsId}&limit=${5}&offset=${offset}`
      // )
      .then(response => response.json())
      .then(result => setCommentInfo(result.comments));
  }, [offset, limit, commentArray]);

  const commentSubmit = () => {
    fetch('http://10.58.52.71:3000/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        comment: comment,
        postId: params.id,
      }),
    })
      .then(response => response.json())
      .then(result => (console.log(result.comments), setCommentArray(result)));
  };
  const removeComment = id => {
    setCommentArray(
      commentArray.filter(comment => {
        return comment.id !== id;
      })
    );
  };
  const saveComment = event => {
    if (comment === '') {
      return;
    }
    setCommentArray(commentValueList => [comment, ...commentValueList]);
    setComment('');
  };

  const onChange = event => setComment(event.target.value);

  const pressEnter = event => {
    if (event.key === 'Enter') {
      saveComment();
    }
  };

  // 1이면 내가 쓴글 0이면 내가 안쓸글이니 삭제아이콘을 1일때 띄어라 commentEx

  return (
    <DetailComments>
      <CommentCount>
        댓글
        <CommentCountNum>{commentInfo.length}</CommentCountNum>
      </CommentCount>

      <CommentInputWrap onClick={saveComment}>
        <CommentProfile
          src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcmFjdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="프로필"
        />
        <CommentInputBox>
          <CommentInput
            type="text"
            onKeyPress={pressEnter}
            onChange={onChange}
            comment={comment}
            placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
            inputValue
          />

          <CommentButton onClick={commentSubmit}>입력</CommentButton>
        </CommentInputBox>
      </CommentInputWrap>

      <Comment>
        {commentInfo.map((comments, id) => (
          <DetailComment
            comments={comments}
            key={id}
            removeComment={removeComment}
            commentArray={commentArray}
            setCommentArray={setCommentArray}
            setCommentInfo={setCommentInfo}
            comment={comment}
            postId={postId}
            paramsId={paramsId}
          >
            {/* {console.log(value)} */}
          </DetailComment>
        ))}
        {/* {feed.comments.map((comments, id) => (
          <DetailComment value={comments} key={id} />
        ))} */}
      </Comment>

      {/* <DetailPageNation /> */}
      <DetailPaginationBox>
        <PaginationBtn
          onClick={() => {
            movePage(1);
          }}
        >
          1
        </PaginationBtn>
        <PaginationBtn
          onClick={() => {
            movePage(2);
          }}
        >
          2
        </PaginationBtn>
        <PaginationBtn
          onClick={() => {
            movePage(3);
          }}
        >
          3
        </PaginationBtn>
        <PaginationBtn
          onClick={() => {
            movePage(4);
          }}
        >
          4
        </PaginationBtn>
      </DetailPaginationBox>
    </DetailComments>
  );
};

export default DetailFooter;

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

const CommentInputWrap = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  margin-top: 30px;
  /* border: 1px solid red; */
`;

const CommentProfile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
  border-radius: 100%;
`;

const CommentInputBox = styled.div`
  ${props => props.theme.variables.flex('', 'flex-end', 'center')}
  width: 678px;
  height: 46px;
  border-radius: ${props => props.theme.style.borderRadius};
  outline-color: ${props => props.theme.style.skyBlue};
  border: 1px solid #c2c8cc;
  color: rgb(194, 200, 204);
`;

const CommentInput = styled.input`
  padding: 0 9px;
  width: 630px;
  height: 44px;
  font-size: 16px;
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
`;

const DetailPaginationBox = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  height: 180px;
`;

const PaginationBtn = styled.button`
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

// const DetailPageBtnBox = styled.div`
//   ${props => props.theme.variables.flex('', 'center', 'center')}
//   /* border: 1px solid red; */
//   margin: 20px 0px 40px 0px;
// `;

// const PageBtn = styled.button`s
//   width: 32px;
//   height: 32px;
//   border-radius: 4px;
//   color: ${props => props.theme.style.white};
//   background: ${props => props.theme.style.skyBlue};
//   border: none;
//   margin-inline: 10px;
//   &:hover {
//     opacity: 4;
//   }
// `;

// const PageBtnLeft = styled.button`
//   width: 32px;
//   height: 32px;
//   border-radius: 4px;
//   border: none;
//   color: ${props => props.theme.style.white};
// `;

// const PageBtnRight = styled(PageBtnLeft)``;
