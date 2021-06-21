import React from 'react';
import Reply from './Reply';

const AllReplies = ({ replies }) => {
  return (
    <div>
      {replies.length > 0 &&
        replies.map((reply) => (
          <Reply
            username={reply.user.username}
            body={reply.body}
            profilePic={reply.user.profilePic}
            likes={reply?.likes || []}
            createdAt={reply.createdAt}
          />
        ))}
    </div>
  );
};

export default AllReplies;
