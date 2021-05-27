import React, { useEffect, useMemo, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import ProgressBar from '../../../../shared/components/progressBar';
import { allPostsAction } from '../../../../store/actions/postActions';
import Post from './Post';

const Posts = ({ allPostsAction }) => {
  const post = useSelector((state) => state.post);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useMemo(() => {
    setPosts(post.posts);
  }, [post.posts]);
  useMemo(() => {
    setLoading(post.loading);
  }, [post.loading]);

  useEffect(() => allPostsAction(), [allPostsAction]);

  useEffect(() => {
    console.log(posts);
    console.log(loading);
  }, [posts, loading]);

  return (
    <div>
      <h3>Posts</h3>
      {loading ? (
        <ProgressBar />
      ) : (
        posts.map((post) => (
          <Post
            user={post.user}
            title={post.title}
            key={post._id}
            createdAt={post.createdAt}
            body={post.body}
            likeCount={post.likes.length}
            commentCount={1}
          />
        ))
      )}
    </div>
  );
};

export default connect(null, { allPostsAction })(Posts);
