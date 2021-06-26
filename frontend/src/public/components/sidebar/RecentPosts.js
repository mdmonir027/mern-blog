import { Card, CardContent, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecentPosts } from '../../../store/actions/public/postActions';
import useStyles from './style/recentPosts';
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
        <Typography paragraph>{title}</Typography>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.public.post.recent,
});

export default connect(mapStateToProps, { fetchRecentPosts })(RecentPosts);
