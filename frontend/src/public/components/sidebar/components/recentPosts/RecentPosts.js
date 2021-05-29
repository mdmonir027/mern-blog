import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProgressBar from '../../../../../shared/components/progressBar';

const useStyles = makeStyles((theme) => ({
  title: {
    background: '#0e33fd',
    textAlign: 'center',
    color: 'white',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    cursor: 'Pointer',
  },
}));
const RecentPosts = () => {
  const classes = useStyles();
  const postState = useSelector((state) => state.post);
  const posts = useMemo(
    () => postState.posts.reverse().slice(0, 10),
    [postState.posts]
  );
  const loading = useMemo(() => postState.loading, [postState.loading]);

  return (
    <div>
      <Card>
        {loading && <ProgressBar />}

        <Typography className={classes.title} variant='h5'>
          Recent Posts
        </Typography>
        <CardContent>
          {!loading &&
            posts.map((post) => (
              <Post key={post._id} title={post.title} slug={post.slug} />
            ))}
        </CardContent>
      </Card>
    </div>
  );
};

const Post = ({ title, slug }) => {
  const classes = useStyles();
  return (
    <div>
      <Link to={`/post/${slug}`} className={classes.link}>
        <Typography variant='p'>{title}</Typography>
      </Link>
    </div>
  );
};

export default RecentPosts;
