import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../store/actions/public/postActions';
import HomePageSinglePost from './HomePageSinglePost';

const HomePagePosts = ({ posts, fetchPosts, userId }) => {
  useEffect(() => fetchPosts(), [fetchPosts]);

  const isLiked = (likesArray, userId) => {
    if (!userId) return false;
    if (likesArray.includes(userId)) return true;
    return false;
  };

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
          slug={post.slug}
          liked={isLiked(post.likes, userId)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.public.posts,
  userId: state.auth.user._id,
});

export default connect(mapStateToProps, { fetchPosts })(HomePagePosts);
