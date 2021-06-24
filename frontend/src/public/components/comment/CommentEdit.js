import { TextField } from '@material-ui/core';
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { editComment } from '../../../store/actions/author/commentAction';

const CommentEdit = ({
  body,
  comment,
  editComment,
  postSlug,
  commentId,
  setCommentEdit,
}) => {
  const [editBody, setEditBody] = useState('');

  useEffect(() => setEditBody(body), [body]);
  const error = useMemo(() => {
    if (comment.error.page === 'editComment') return comment.error.errors;
    return {};
  }, [comment.error]);

  const submitHandler = (event) => {
    event.preventDefault();
    editComment({ postSlug, commentId, body: editBody }, (result) =>
      setCommentEdit(!result)
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

export default connect(mapStateToProps, { editComment })(CommentEdit);
