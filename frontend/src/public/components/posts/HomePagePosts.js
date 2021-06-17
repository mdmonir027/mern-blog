import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../store/actions/public/postActions';
import HomePageSinglePost from './HomePageSinglePost';

const HomePagePosts = ({ posts, fetchPosts, userId, totalPage }) => {
  const itemPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(
    () => fetchPosts(itemPerPage, currentPage),
    [fetchPosts, currentPage, itemPerPage]
  );

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
      <Pagination
        count={totalPage > 0 ? totalPage : 1}
        onChange={(event, page) => {
          setCurrentPage(page);
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.public.post.posts,
  userId: state.auth.user._id,
  totalPage: state.public.post.totalPage,
});

export default connect(mapStateToProps, { fetchPosts })(HomePagePosts);
