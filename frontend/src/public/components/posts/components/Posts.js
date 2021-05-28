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

  return (
    <div>
      <h3>Posts</h3>
      {loading ? (
        <ProgressBar />
      ) : (
        posts.map((post) => <Post key={post._id} slug={post.slug} />)
      )}
    </div>
  );
};

export default connect(null, { allPostsAction })(Posts);
