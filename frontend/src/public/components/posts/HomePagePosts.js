import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../store/actions/public/postActions';
import HomePageSinglePost from './HomePageSinglePost';

const HomePagePosts = ({ posts, fetchPosts }) => {
  useEffect(() => fetchPosts(), [fetchPosts]);

  return (
    <div>
      {posts.map((post) => (
        <HomePageSinglePost
          username={post.user.username}
          profilePic={post.user.profilePic}
          title={post.title}
          key={post._id}
          createdAt={post.createdAt}
          body={post.body}
          likeCount={post.likes.length}
          commentCount={1}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.public.posts,
});

export default connect(mapStateToProps, { fetchPosts })(HomePagePosts);
