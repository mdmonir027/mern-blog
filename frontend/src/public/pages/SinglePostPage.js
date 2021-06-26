import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSinglePost } from '../../store/actions/public/postActions';
import SinglePagePost from '../components/posts/SinglePagePost';

const SinglePostPage = ({ post, userId, fetchSinglePost }) => {
  const { slug } = useParams();

  useEffect(() => fetchSinglePost(slug), [slug, fetchSinglePost]);

  return (
    <div>
      {post ? (
        <SinglePagePost
          username={post?.user?.username}
          profilePic={post?.user?.profilePic}
          title={post.title}
          key={post._id}
          createdAt={post.createdAt}
          body={post.body}
          likeCount={post?.likes?.length}
          commentCount={1}
          slug={post.slug}
          likes={post.likes}
          image={`http://${post.thumbnail}`}
        />
      ) : (
        <h3>Loading....</h3>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.public.post.single,
  userId: state.auth.user._id,
});

export default connect(mapStateToProps, { fetchSinglePost })(SinglePostPage);
