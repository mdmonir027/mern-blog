import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../store/actions/public/postActions';
import HomePageSinglePost from './HomePageSinglePost';

const HomePagePosts = ({ posts, fetchPosts, totalPage }) => {
  const itemPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(
    () => fetchPosts(itemPerPage, currentPage),
    [fetchPosts, currentPage, itemPerPage]
  );

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
          likes={post.likes}
          commentCount={post.comments.length}
          slug={post.slug}
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
  totalPage: state.public.post.totalPage,
});

export default connect(mapStateToProps, { fetchPosts })(HomePagePosts);
