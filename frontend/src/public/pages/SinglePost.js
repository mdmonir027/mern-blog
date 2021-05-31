import { Grid } from '@material-ui/core';
import React, { useEffect, useMemo } from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProgressBar from '../../shared/components/progressBar';
import { singlePostAction } from '../../store/actions/postActions';
import Post from '../components/singlePost/components/Post';

const SinglePost = ({ singlePostAction }) => {
  const { slug } = useParams();

  const postState = useSelector((state) => state.post);

  const post = useMemo(() => postState.post, [postState.post]);

  const loading = useMemo(() => postState.loading, [postState.loading]);

  useEffect(() => singlePostAction(slug), [singlePostAction, slug]);

  if (loading && Object.keys(post).length === 0) {
    return <ProgressBar />;
  }

  return (
    <Grid container>
      <Grid item md={8}>
        <div className='post__data'>
          <Post postData={post} />
        </div>
      </Grid>
    </Grid>
  );
};

export default connect(null, { singlePostAction })(SinglePost);

// likes, title, body, user, createdAt, comments
