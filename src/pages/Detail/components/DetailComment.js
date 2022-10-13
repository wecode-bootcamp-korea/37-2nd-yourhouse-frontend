import React from 'react';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';
// import HeartButton from './HeartButton';

const DetailComment = ({
  paramsId,
  comments,
  removeComment,
  commentArray,
  setCommentArray,
  commentInfo,
  setCommentInfo,
}) => {
  // const [like, setLike] = useState(false);

  const deleteComments = e => {
    // console.log(value);
    fetch(
      `http://10.58.52.71:3000/comment?postId=${paramsId}
      &commentId=${Number(e.target.id)}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Delete Success') {
          alert('삭제 성공');
          setCommentInfo(data);
        } else {
          alert('삭제 실패');
        }
      });
  };
  return (
    <ReplyContainer>
      <CommentProfile
        src={
          comments.profileImage ? comments.profileImage : './images/user.png'
        }
        alt="프로필"
      />
      <div>
        <ReplyUserId>{comments.nickName}</ReplyUserId>
        <ReplyUserText>{comments.comment}</ReplyUserText>
        <ReplyEtc>
          {/* <HeartButton like={like} onClick={() => setLike(!like)} /> */}
          {/* <DeleteButton onClick={() => removeComment(value.id)} /> */}
          <DeleteButton id={comments.id} onClick={deleteComments} />

          {/* <DeleteButton
          
            commentArray={commentArray}
            onClick={setCommentArray}
          /> */}
        </ReplyEtc>
      </div>
    </ReplyContainer>
  );
};

export default DetailComment;

const CommentProfile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
  border-radius: 100%;
`;

const ReplyContainer = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', '')}
  width: 100%;
  height: 80px;
  margin-top: 30px;
`;

const ReplyUserId = styled.div`
  /* border: 1px solid red; */
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
`;

const ReplyUserText = styled.div`
  width: 100%;
  margin: 8px 0px;
  line-height: 24px;
  overflow-wrap: break-word;
  word-break: keep-all;
  color: ${props => props.theme.style.black};
  font-size: 16px;
  /* border: 1px solid red; */
`;

const ReplyEtc = styled.div`
  /* border: 1px solid red; */
  height: 30px;
  ${props => props.theme.variables.flex('', 'center', 'center')}
`;

// const ReplyLike = styled.button`
//   width: 18px;
//   height: 18px;
// `;

// const ReplyBtn = styled.img``;

const ReplyDelete = styled.button`
  width: 40px;
  height: 18px;
  font-size: 12px;
  border: none;
  background-color: ${props => props.theme.style.white};
  color: ${props => props.theme.style.middleGrey};
  /* border: 1px solid red; */
`;
