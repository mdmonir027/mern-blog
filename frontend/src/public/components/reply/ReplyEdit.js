import { TextField } from '@material-ui/core';
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { commentReplyEdit } from '../../../store/actions/author/commentAction';

const ReplyEdit = ({
  body,
  comment,
  commentReplyEdit,
  commentId,
  setReplyEdit,
  replyId,
}) => {
  const [editBody, setEditBody] = useState('');

  useEffect(() => setEditBody(body), [body]);
  const error = useMemo(() => {
    if (comment.error.page === 'editReply') return comment.error.errors;
    return {};
  }, [comment.error]);

  const submitHandler = (event) => {
    event.preventDefault();
    commentReplyEdit({ replyId, commentId, body: editBody }, (result) =>
      setReplyEdit(!result)
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        placeholder='write a comment'
        fullWidth
        value={editBody}
        onChange={(event) => setEditBody(event.target.value)}
        error={!!error.body}
        helperText={error.body ? error.body : ''}
      />
    </form>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  comment: state.public.comments,
  postSlug: state.public.post.single.slug,
});

export default connect(mapStateToProps, { commentReplyEdit })(ReplyEdit);
