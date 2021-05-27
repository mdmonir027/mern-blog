import { CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  postsWrapper: {
    background: '#F5F5F5',
  },
}));

const CategoryPosts = ({ id }) => {
  const classes = useStyles();
  const category = useSelector((state) => state.category);
  const posts = useMemo(
    () => category.categories.find((category) => category._id === id).posts,
    [category.categories, id]
  );

  return (
    <CardContent className={classes.postsWrapper}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Link to={`/post/${post.slug}`} className={classes.link}>
            <Typography variant='p'>{post.title}</Typography>
          </Link>
        ))
      ) : (
        <Typography variant='p'>No Post Found</Typography>
      )}
    </CardContent>
  );
};

export default CategoryPosts;
