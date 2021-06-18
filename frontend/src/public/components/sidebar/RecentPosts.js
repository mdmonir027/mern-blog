import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecentPosts } from '../../../store/actions/public/postActions';
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
    display: 'block',
    cursor: 'Pointer',
    marginBottom: '5px',
  },
}));
const RecentPosts = ({ posts, fetchRecentPosts }) => {
  const classes = useStyles();

  useEffect(() => fetchRecentPosts(), [fetchRecentPosts]);

  return (
    <div>
      <Card>
        <Typography className={classes.title} variant='h5'>
          Recent Posts
        </Typography>
        <CardContent>
          {posts.map((post) => (
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

const mapStateToProps = (state) => ({
  posts: state.public.post.recent,
});

export default connect(mapStateToProps, { fetchRecentPosts })(RecentPosts);
