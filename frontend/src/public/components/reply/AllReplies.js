import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import Reply from './Reply';

const AllReplies = ({ comments, commentId }) => {
  const replies = useMemo(() => {
    if (comments.length === 0) return [];
    if (!commentId) return [];
    const comment = comments.find((com) => com._id === commentId);
    return comment.replies;
  }, [comments, commentId]);

  if (replies.length === 0) {
    return null;
  }
  return (
    <div>
      {replies.map((reply) => (
        <Reply
          username={reply.user.username}
          body={reply.body}
          profilePic={reply.user.profilePic}
          likes={reply?.likes || []}
          createdAt={reply.createdAt}
          commentId={reply.comment}
          replyId={reply._id}
          key={reply._id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.public.comments.comments,
});

export default connect(mapStateToProps)(AllReplies);
