import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import useStyles from './style/singleCategory';

const HomePageSingleCategoryPosts = ({ categorySlug, categories }) => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(() => {
      const categoryFound = categories.find(
        (category) => category.slug === categorySlug
      );
      return categoryFound.posts;
    });
  }, [categories, categorySlug]);

  return (
    <CardContent className={classes.postsWrapper}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Link to={`/post/${post.slug}`} className={classes.postLink}>
            <Typography variant='p'>{post.title}</Typography>
          </Link>
        ))
      ) : (
        <h6>No post found</h6>
      )}
    </CardContent>
  );
};

const mapStateToProps = (state) => ({
  categories: state.public.category.categories,
});

export default connect(mapStateToProps)(HomePageSingleCategoryPosts);
